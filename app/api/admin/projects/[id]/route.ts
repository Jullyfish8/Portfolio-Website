import { saveProject } from '../../../../../lib/project-store';
import { getChatGPTUser } from '../../../../chatgpt-auth';
export async function PUT(request:Request,{params}:{params:Promise<{id:string}>}){if(!await getChatGPTUser())return Response.json({error:'Unauthorized'},{status:401});const {id}=await params;const project=await request.json() as Record<string,unknown>;await saveProject({...project,id});return Response.json({ok:true,id});}
