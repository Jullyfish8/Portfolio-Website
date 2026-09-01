import { env } from 'cloudflare:workers';
import { getChatGPTUser } from '../../../chatgpt-auth';
export async function GET(){if(!await getChatGPTUser())return Response.json({error:'Unauthorized'},{status:401});const result=await env.DB.prepare('SELECT blocks FROM projects ORDER BY updated_at DESC').all<{blocks:string}>();return Response.json(result.results.map(row=>JSON.parse(row.blocks)));}
