import { env } from 'cloudflare:workers';
export async function GET(){const object=await env.FILES.get('latest-resume.pdf');if(!object)return new Response('Résumé has not been uploaded yet',{status:404});const headers=new Headers();object.writeHttpMetadata(headers);headers.set('etag',object.httpEtag);headers.set('cache-control','no-cache');return new Response(object.body,{headers});}
