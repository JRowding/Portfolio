import { useCallback, useEffect, useState } from "react";

const projects = [
  { id:"01", code:"FRZ", name:"Freezer Stock", strap:"Scan food in. Scan food out.", description:"A calm kitchen helper for tracking what is hiding in your freezer—and turning it into dinner.", url:"https://freezerst.netlify.app", type:"UTILITY", color:"#c7ff38", ink:"#11110f" },
  { id:"02", code:"18+", name:"Cards Under No Tolerance", strap:"Taste goes to die.", description:"A private adult party card game. No accounts, no audience—just a room code and questionable judgement.", url:"https://playcunt.onrender.com", type:"PARTY GAME", color:"#f4efdf", ink:"#11110f" },
  { id:"03", code:"♠", name:"Ring of Fire", strap:"Draw the card. Regret your choices.", description:"A local pass-and-play drinking game that turns one phone and one deck into a whole evening.", url:"https://ringoffiredg.onrender.com", type:"PARTY GAME", color:"#ff675c", ink:"#11110f" },
  { id:"04", code:"92", name:"GroundStride", strap:"Every kilometre. Every ground.", description:"Log real exercise and travel virtually from Telford to all 92 English league stadiums.", url:"https://groundstride-92.onrender.com", type:"FOOTBALL / FITNESS", color:"#24533d", ink:"#f4efdf" },
  { id:"05", code:"FPL", name:"Assistant Manager", strap:"Move before the crowd.", description:"A live FPL decision room for transfers, captaincy, starting XI and risk—grounded in your squad.", url:"https://fpl-assistant-manager.onrender.com", type:"FOOTBALL / TOOL", color:"#6c47ff", ink:"#ffffff" },
  { id:"06", code:"TF", name:"TF Sessions", strap:"Music without borders.", description:"A growing collection of original music across every genre. Press play, find your session, and come back for the next drop.", url:"https://tfsessions.onrender.com/", type:"MUSIC / AUDIO", color:"#00d9e8", ink:"#071416" },
  { id:"07", code:"UFO", name:"UFO Video Hub", strap:"Signal locked. Videos ready.", description:"A personal YouTube dashboard for UFO & Alien and Gaming videos, built to keep both rabbit holes in one place.", url:"https://ufovideohub.onrender.com/", type:"VIDEO / DASHBOARD", color:"#58d6ff", ink:"#07151d" },
  { id:"08", code:"GG", name:"Gaming Video Hub", strap:"Press start. Stay awhile.", description:"A personal YouTube dashboard for gaming videos, built to keep the next watch, guide, and deep dive in one place.", url:"https://gamingvideohub.onrender.com/", type:"VIDEO / GAMING", color:"#b88cff", ink:"#150d28" },
  { id:"09", code:"MS", name:"MatchSignal", strap:"Recent form. Clear signals.", description:"A football prediction dashboard built around direct head-to-head history, current form, and goal likelihoods.", url:"https://matchsignal.onrender.com/", type:"FOOTBALL / PREDICTIONS", color:"#b8ff4e", ink:"#102000" },
  { id:"10", code:"TB", name:"Throwball", strap:"Three darts. One football score.", description:"A darts-meets-football simulator where every three-dart combination maps into a match result and builds your Premier League table.", url:"https://throwball.onrender.com/", type:"FOOTBALL / DARTS", color:"#ffb347", ink:"#17110a" },
  { id:"11", code:"NL", name:"Needle Lounge", strap:"Ideas in. Ink out.", description:"A tattoo studio website and enquiry hub for exploring work, sharing ideas, uploading references and starting a booking conversation.", url:"https://needlelounge.onrender.com/", type:"TATTOO / BUSINESS", color:"#f3d5c8", ink:"#241916" },
  { id:"12", code:"WB", name:"WatchBox", strap:"Pick a box. See what happens.", description:"A compact browser game built for quick play, simple choices and that dangerous little urge to have one more go.", url:"https://watchboxgame.netlify.app/", type:"GAME / WEB", color:"#ffd84d", ink:"#18140a" },
  { id:"13", code:"26", name:"WCSB26", strap:"World Cup. One scoreboard.", description:"A football companion build for the 2026 World Cup, keeping the tournament experience together in one dedicated place.", url:"https://wcsb26.netlify.app/", type:"FOOTBALL / 2026", color:"#4de0b5", ink:"#071a15" },
  { id:"14", code:"AQ", name:"AccaQuest", strap:"Build the acca. Keep it virtual.", description:"A private football accumulator simulator using live fixtures, markets and odds to build and track virtual accas without real-money gambling.", url:"https://accaquest.onrender.com/", type:"FOOTBALL / SIMULATOR", color:"#ff6b4a", ink:"#1a0d08" },
];

function Loader({ finish }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const started = performance.now();
    const duration = 2800;
    let frame = 0;
    const tick = (now) => {
      const next = Math.min(100, Math.floor(((now - started) / duration) * 100));
      setCount(next);
      if (next < 100) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    const timer = window.setTimeout(finish, duration + 250);
    const key = (event) => event.key === "Escape" && finish();
    document.addEventListener("keydown", key);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      document.removeEventListener("keydown", key);
    };
  }, [finish]);

  return (
    <div className="loader" role="status" aria-label="Loading project collection">
      <div className="loader-corner tl"><i /> SIGNAL <b>LOCKED</b><br />INDEX <b>{projects.length}/{projects.length}</b></div>
      <div className="loader-corner tr">JR_PORTFOLIO.OS<br />SESSION <b>2026</b></div>
      <div className="loader-corner bl">RUN <b>{count < 30 ? "BOOT" : count < 70 ? "SYNC" : "READY"}</b><br />LOAD <b>{String(count).padStart(3,"0")}%</b></div>
      <div className="loader-corner br">PROJECT INDEX<br />BUILD <b>001</b></div>
      <div className="loader-center">
        <div className="loader-stack" aria-hidden="true">
          {projects.map((project, index) => (
            <div className="loader-card" key={project.id} style={{ "--i":index, "--c":project.color }}>
              <span>{project.id}</span>
            </div>
          ))}
        </div>
        <p>DEALING {projects.length} BUILDS</p>
      </div>
      <div className="loader-progress"><div style={{ width:`${count}%` }} /></div>
      <button onClick={finish}>SKIP INTRO ↗</button>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const finishLoading = useCallback(() => setLoading(false), []);

  useEffect(() => {
    const move = (event) => {
      document.documentElement.style.setProperty("--x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive:true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const tilt = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    event.currentTarget.style.setProperty("--rx", `${y * -7}deg`);
    event.currentTarget.style.setProperty("--ry", `${x * 9}deg`);
    event.currentTarget.style.setProperty("--mx", `${(x + .5) * 100}%`);
    event.currentTarget.style.setProperty("--my", `${(y + .5) * 100}%`);
  };

  const resetTilt = (event) => {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <main className={loading ? "is-loading" : "is-ready"}>
      {loading && <Loader finish={finishLoading} />}
      <div className="ambient" aria-hidden="true" />
      <header className="compact-header">
        <div className="mini-brand"><i /> JR PORTFOLIO <span>/ {projects.length} BUILDS</span></div>
        <p>HOVER TO INSPECT · CLICK TO LAUNCH</p>
      </header>
      <section className="deck" aria-label="Project collection">
        {projects.map((project) => (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="build-card"
            key={project.id}
            style={{ "--card":project.color, "--card-ink":project.ink }}
            onPointerMove={tilt}
            onPointerLeave={resetTilt}
          >
            <div className="card-head"><span>{project.id}</span><span>{project.type}</span></div>
            <div className="card-symbol" aria-hidden="true">{project.code}</div>
            <div className="card-body"><p>{project.strap}</p><h2>{project.name}</h2><div className="card-description">{project.description}</div></div>
            <div className="card-foot"><span>OPEN BUILD</span><b>↗</b></div>
          </a>
        ))}
      </section>
      <footer className="compact-footer">
        <p><i /> ALL LINKS LIVE</p>
        <p className="wake"><span>◴</span> RENDER BUILDS MAY TAKE A MOMENT TO WAKE</p>
        <p>MADE ON THE INTERNET · 2026</p>
      </footer>
    </main>
  );
}
