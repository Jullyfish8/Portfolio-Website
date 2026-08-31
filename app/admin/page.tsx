import { chatGPTSignOutPath, requireChatGPTUser } from '../chatgpt-auth';

export const dynamic = 'force-dynamic';

export default async function AdminPage(){
  const user=await requireChatGPTUser('/admin');
  return <main className="admin-shell">
    <header className="admin-header"><div><a href="/" className="admin-mark">J<span>•</span></a><p>PORTFOLIO CONTROL ROOM</p></div><div><span>{user.displayName}</span><a href={chatGPTSignOutPath('/')}>Sign out</a></div></header>
    <section className="admin-welcome"><div><p>PRIVATE WORKSPACE / OWNER ONLY</p><h1>Good to see you,<br/><em>Julfendi.</em></h1></div><button type="button">＋ New project</button></section>
    <section className="admin-grid"><aside><button className="active">Projects <span>4</span></button><button>Media library <span>12</span></button><button>Résumé</button><button>Site settings</button><a href="/">← View public site</a></aside><div className="admin-panel"><div className="admin-panel-head"><div><h2>Your projects</h2><p>Draft, preview and publish when everything feels right.</p></div><div className="admin-tabs"><button className="active">All</button><button>Published</button><button>Drafts</button><button>Archived</button></div></div><div className="admin-project featured"><div className="admin-thumb purple">01</div><div><span>PUBLISHED · FEATURED</span><h3>A museum visit that begins before the doors open</h3><p>UI/UX Design · Updated 2 days ago</p></div><button>•••</button></div><div className="admin-project"><div className="admin-thumb blue">02</div><div><span>PUBLISHED</span><h3>The quiet signals behind student belonging</h3><p>Research · Updated 3 weeks ago</p></div><button>•••</button></div><div className="admin-project"><div className="admin-thumb pink">03</div><div><span>DRAFT · NOT PUBLIC</span><h3>A design studio that teaches through doing</h3><p>Instructional Design · Updated today</p></div><button>Continue editing →</button></div><div className="admin-project"><div className="admin-thumb green">04</div><div><span>PUBLISHED</span><h3>Designing trust into an unfamiliar service</h3><p>Research + UI/UX · Updated 1 month ago</p></div><button>•••</button></div></div></section>
  </main>
}
