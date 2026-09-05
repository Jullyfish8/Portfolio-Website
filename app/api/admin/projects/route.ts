import { getPlatformEnv } from '../../../../lib/platform-env';
import { getChatGPTUser } from '../../../chatgpt-auth';
export async function GET(){if(!await getChatGPTUser())return Response.json({error:'Unauthorized'},{status:401});const env=await getPlatformEnv();if(!env)return Response.json({error:'Admin storage is available on the Sites deployment.'},{status:503});const result=await env.DB.prepare('SELECT blocks FROM projects ORDER BY updated_at DESC').all();return Response.json(result.results.map((row:{blocks:string})=>JSON.parse(row.blocks)));}
