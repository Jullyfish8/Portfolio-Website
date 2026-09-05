import { listProjects } from '../../../lib/project-store';
export async function GET(){return Response.json(await listProjects());}
