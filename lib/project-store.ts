import { neon } from '@neondatabase/serverless';
import { getPlatformEnv } from './platform-env';

type ProjectRecord = Record<string, unknown> & { id: string; status?: string };

let tableReady: Promise<void> | null = null;

function postgres() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not configured');
  return neon(process.env.DATABASE_URL);
}

async function ensureTable() {
  if (!tableReady) {
    tableReady = (async () => {
      const sql = postgres();
      await sql`CREATE TABLE IF NOT EXISTS projects (
        id TEXT PRIMARY KEY,
        status TEXT NOT NULL DEFAULT 'draft',
        data JSONB NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        published_at TIMESTAMPTZ
      )`;
    })();
  }
  return tableReady;
}

export async function listProjects(includeUnpublished = false): Promise<ProjectRecord[]> {
  if (process.env.DATABASE_URL) {
    await ensureTable();
    const sql = postgres();
    const rows = includeUnpublished
      ? await sql`SELECT data FROM projects ORDER BY updated_at DESC`
      : await sql`SELECT data FROM projects WHERE status = 'published' ORDER BY published_at DESC NULLS LAST, updated_at DESC`;
    return rows.map((row) => row.data as ProjectRecord);
  }

  const env = await getPlatformEnv();
  if (!env) return [];
  const query = includeUnpublished
    ? 'SELECT blocks FROM projects ORDER BY updated_at DESC'
    : "SELECT blocks FROM projects WHERE status = 'published' ORDER BY featured DESC, published_at DESC";
  const result = await env.DB.prepare(query).all();
  return result.results.map((row: { blocks: string }) => JSON.parse(row.blocks));
}

export async function saveProject(project: ProjectRecord): Promise<void> {
  if (process.env.DATABASE_URL) {
    await ensureTable();
    const sql = postgres();
    const status = String(project.status ?? 'draft');
    const data = JSON.stringify(project);
    await sql`INSERT INTO projects (id, status, data, published_at)
      VALUES (${project.id}, ${status}, ${data}::jsonb, ${status === 'published' ? new Date() : null})
      ON CONFLICT (id) DO UPDATE SET
        status = EXCLUDED.status,
        data = EXCLUDED.data,
        updated_at = NOW(),
        published_at = CASE WHEN EXCLUDED.status = 'published' THEN COALESCE(projects.published_at, NOW()) ELSE projects.published_at END`;
    return;
  }

  const env = await getPlatformEnv();
  if (!env) throw new Error('Project storage is not configured');
  const now = Date.now();
  await env.DB.prepare(`INSERT INTO projects (id,slug,title,summary,category,year,status,featured,blocks,cover_key,created_at,updated_at,published_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET slug=excluded.slug,title=excluded.title,summary=excluded.summary,category=excluded.category,year=excluded.year,status=excluded.status,blocks=excluded.blocks,cover_key=excluded.cover_key,updated_at=excluded.updated_at,published_at=excluded.published_at`).bind(project.id,project.id,String(project.title||''),String(project.subtitle||''),String(project.category||''),String(project.year||''),String(project.status||'draft'),0,JSON.stringify(project),String(project.coverImage||''),now,now,project.status==='published'?now:null).run();
}
