export async function getPlatformEnv(): Promise<any | null> {
  if (process.env.VERCEL) return null;
  return (await import('cloudflare:workers')).env;
}
