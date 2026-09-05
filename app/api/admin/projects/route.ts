import { listProjects } from '../../../../lib/project-store';
import { getChatGPTUser } from '../../../chatgpt-auth';
export async function GET(){if(!await getChatGPTUser())return Response.json({error:'Unauthorized'},{status:401});return Response.json(await listProjects(true));}
