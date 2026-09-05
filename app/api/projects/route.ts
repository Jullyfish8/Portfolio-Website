import { getPlatformEnv } from '../../../lib/platform-env';
export async function GET(){const env=await getPlatformEnv();if(!env)return Response.json([]);const result=await env.DB.prepare("SELECT blocks FROM projects WHERE status = 'published' ORDER BY featured DESC, published_at DESC").all();return Response.json(result.results.map((row:{blocks:string})=>JSON.parse(row.blocks)));}
