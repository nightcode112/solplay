/* global React */

/* =========================================================
   Topbar ticker — runs above nav, always visible, live data
   ========================================================= */
function Topbar() {
  const items = [
    { l: 'SOL', v: '$184.20', dir: 'up',   d: '+2.4%' },
    { l: '$PLAY', v: '$0.0184', dir: 'up', d: '+18.6%' },
    { l: 'BURNED 24H', v: '482,194' },
    { l: 'VOL 24H', v: '8,402 SOL' },
    { l: 'PLAYERS ONLINE', v: '1,284' },
    { l: 'GAMES TODAY', v: '94,201' },
    { l: 'BOUGHT BACK', v: '2,114.6 SOL', dir: 'up' },
    { l: 'BLOCK', v: '#284,019,442' },
    { l: 'MAINNET', v: 'OK' },
  ];
  const block = (
    <>
      {items.map((it, i) => (
        <span className="it" key={i}>
          <span className="l">{it.l}</span>
          <span className={`v ${it.dir === 'up' ? 'up' : ''} ${it.dir === 'down' ? 'down' : ''}`}>
            {it.v}{it.d ? <span style={{ marginLeft: 6 }}>{it.d}</span> : null}
          </span>
          <span className="sep">/</span>
        </span>
      ))}
    </>
  );
  return (
    <div className="topbar" aria-hidden="true">
      <div className="topbar-track">{block}{block}</div>
    </div>
  );
}

/* =========================================================
   Nav
   ========================================================= */
function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#">
          <span className="mark"><BrandMark /></span>
          <span>SOLPLAY</span>
        </a>
        <div className="nav-links">
          <a href="#floor">The Floor</a>
          <a href="#deposits">Deposits</a>
          <a href="#loop">The Loop</a>
          <a href="#wallets">Wallets</a>
          <a href="#groups">For Groups</a>
          <a href="#">Whitepaper</a>
        </div>
        <a className="nav-cta" href="#">
          <MTelegram size={14} /> Open in Telegram
        </a>
      </div>
    </nav>
  );
}

/* =========================================================
   Hero — type-driven, no card grid
   ========================================================= */
function Hero({ variant }) {
  const headlines = {
    casino: (
      <>
        <span className="ln">Casino games.</span>
        <span className="ln">Built on Solana.</span>
        <span className="ln ital">Played in <em className="gradient-text">Telegram</em>.</span>
      </>
    ),
    flip: (
      <>
        <span className="ln">Bet. Burn.</span>
        <span className="ln ital">Repeat.</span>
        <span className="ln" style={{ fontSize: '0.55em', marginTop: '0.3em', color: 'var(--ink-dim)' }}>
          A Solana-native casino, played entirely in Telegram.
        </span>
      </>
    ),
    short: (
      <>
        <span className="ln ital">House always</span>
        <span className="ln">— burns.</span>
      </>
    ),
  };

  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-mesh">
        <div className="blob b1" />
        <div className="blob b2" />
      </div>
      <div className="wrap">
        <div className="hero-meta">
          <span>VOL. I · ISSUE 04 · {new Date().toUTCString().slice(5, 16).toUpperCase()}</span>
          <span>SOLANA MAINNET · TELEGRAM NATIVE</span>
        </div>

        <div className="hero-inner">
          <div>
            <h1>
              {headlines[variant] || headlines.casino}
            </h1>

            <p className="hero-sub">
              Deposit <b>SOL</b> or <b>$PLAY</b>. Beat the house or duel another player in real-time PvP. Every <b>$PLAY</b> loss is burned forever. Every <b>SOL</b> loss buys back more.
            </p>

            <div className="hero-ctas">
              <a className="btn btn-primary" href="#">
                <MTelegram size={15} /> Play on Telegram
              </a>
              <a className="btn btn-ghost" href="#floor">
                Read the Floor &nbsp;<MArrowRight />
              </a>
            </div>
          </div>

          <aside className="hero-aside">
            <div className="row">
              <div className="l">Native token</div>
              <div className="v"><span className="sym">◇</span>$PLAY</div>
              <div className="delta">▲ +18.6% · 24h</div>
            </div>
            <div className="row">
              <div className="l">Bet currency</div>
              <div className="v"><span className="sym">◎</span>SOL</div>
              <div className="delta" style={{ color: 'var(--ink-mute)' }}>184.20 · USD</div>
            </div>
            <div className="row">
              <div className="l">PvP house cut</div>
              <div className="v">5.00<span className="sym" style={{ marginLeft: 4 }}>%</span></div>
              <div className="delta" style={{ color: 'var(--ink-mute)' }}>burned · or · bought back</div>
            </div>
            <div className="row">
              <div className="l">Total burn pressure</div>
              <div className="v" style={{ color: 'var(--burn)' }}>∞</div>
              <div className="delta" style={{ color: 'var(--burn)' }}>482,194 · last 24h</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Topbar, Nav, Hero });
