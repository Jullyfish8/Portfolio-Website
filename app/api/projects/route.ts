import { env } from 'cloudflare:workers';
export async function GET(){const result=await env.DB.prepare("SELECT blocks FROM projects WHERE status = 'published' ORDER BY featured DESC, published_at DESC").all<{blocks:string}>();return Response.json(result.results.map(row=>JSON.parse(row.blocks)));}
