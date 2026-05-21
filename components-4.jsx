/* global React */

/* =========================================================
   Telegram group section
   ========================================================= */
function TgMock() {
  return (
    <div className="tg-mock">
      <div className="tg-mock-head">
        <div className="tg-mock-avatar">SP</div>
        <div className="col">
          <div className="tg-mock-name">SolPlay Bot</div>
          <div className="tg-mock-status">bot · online</div>
        </div>
      </div>
      <div className="tg-mock-body">
        <div className="tg-bubble">
          <div className="ttl">SolPlay Casino · /start</div>
          Welcome to the group. Choose a game to begin — your balance is shared across every room.
          <div className="tg-keyboard">
            <div className="key">Dice</div>
            <div className="key">Blackjack</div>
            <div className="key">PvP Duel</div>
            <div className="key">Slots</div>
          </div>
        </div>
        <div className="tg-bubble" style={{ alignSelf: 'flex-end', background: '#2B5278', color: '#fff' }}>
          /balance
        </div>
        <div className="tg-bubble">
          <div className="ttl">Your balance</div>
          <div className="tg-balance">
            <div className="row1">◎  2.40 SOL</div>
            <div className="row1">◇  1,500 $PLAY</div>
            <div className="row2" style={{ marginTop: 6 }}>burned this session ··· 320 $PLAY</div>
            <div className="row3" style={{ marginTop: 2 }}>net session ··· +0.18 SOL</div>
          </div>
          <div className="tg-keyboard" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="key">Deposit</div>
            <div className="key">Withdraw</div>
            <div className="key">Top 10</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TgSection() {
  return (
    <section className="section" id="groups" data-screen-label="06 Groups">
      <div className="wrap">
        <div className="section-head">
          <div className="num">SECTION <span>/ 05</span><br/>For Groups</div>
          <div>
            <h2>Add the bot<br/>to <em>your</em> group.</h2>
            <p className="deck">Any private Telegram group can install <span className="mono" style={{ color: 'var(--ink)' }}>@SolPlayBot</span>. Your community plays, burns $PLAY, and builds a group-only leaderboard — without anyone leaving the chat.</p>
          </div>
        </div>

        <div className="tg-section">
          <div>
            <div className="tg-features">
              <div className="tg-feat">
                <div className="n">— 01</div>
                <div>
                  <h4 className="h">One-command setup.</h4>
                  <p className="b">Invite the bot, type <span className="mono" style={{ color: 'var(--ink)' }}>/start</span>, done. No configuration needed. Games go live immediately for every group member; each user gets a private DM with their deposit address.</p>
                </div>
              </div>
              <div className="tg-feat">
                <div className="n">— 02</div>
                <div>
                  <h4 className="h">Group-only leaderboards.</h4>
                  <p className="b">Track the top players in your group across weekly cycles. Top 3 share a $PLAY prize pool funded automatically by the house cut from your group's PvP matches.</p>
                </div>
              </div>
              <div className="tg-feat">
                <div className="n">— 03</div>
                <div>
                  <h4 className="h">Private &amp; permissioned.</h4>
                  <p className="b">Only available in groups you control. Admins can pause new matches, set bet ceilings, or remove the bot entirely. The bot never DMs members unprompted.</p>
                </div>
              </div>
              <div className="tg-feat">
                <div className="n">— 04</div>
                <div>
                  <h4 className="h">Burns roll up.</h4>
                  <p className="b">Every $PLAY burned inside your group counts toward a public group-burn-leaderboard. Top burning groups get featured rewards and rolling airdrops.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 32 }}>
              <a className="btn btn-primary" href="#">
                <MTelegram size={15} /> Add Bot to Group
              </a>
            </div>
          </div>

          <TgMock />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   How it Works — editorial steps
   ========================================================= */
function HowItWorks() {
  const steps = [
    { n: '01', h: 'Open Telegram', p: 'Search for @SolPlayBot or click the link on this page. Start a private chat — or add it to a group you admin.' },
    { n: '02', h: 'Deposit',       p: 'Send SOL or $PLAY to your unique in-bot deposit address. Credited instantly on confirmation.' },
    { n: '03', h: 'Pick a game',   p: 'Choose dice, blackjack, slots, or challenge a friend to a PvP duel. Every game runs inside Telegram.' },
    { n: '04', h: 'Win, withdraw', p: 'Winnings land instantly in your bot balance. Withdraw to any Solana wallet at any time. Zero lock-up.' },
  ];
  return (
    <section className="section" id="how" data-screen-label="07 How">
      <div className="wrap">
        <div className="section-head">
          <div className="num">SECTION <span>/ 06</span><br/>How it works</div>
          <div>
            <h2>From zero<br/>to <em>betting</em><br/>in 90 seconds.</h2>
            <p className="deck">No wallet connect dance. No browser extension. No app store. Just Telegram, a deposit, and a game.</p>
          </div>
        </div>

        <div className="steps">
          {steps.map(s => (
            <div className="step" key={s.n}>
              <div className="num"><span className="slash">/</span>{s.n}</div>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CTA + Footer
   ========================================================= */
function CtaBanner() {
  return (
    <section className="cta" data-screen-label="08 CTA">
      <div className="cta-mesh" />
      <div className="wrap cta-inner">
        <div className="kicker" style={{ marginBottom: 28 }}>— READY TO PLAY?</div>
        <h2 className="display">
          Every bet burns.<br/>
          Every loss<br/>
          buys back.<br/>
          <em className="gradient-text">$PLAY forever.</em>
        </h2>
        <p className="deck">Join the fastest-burning Solana casino on Telegram. No app, no connect, no lock-up. Open the bot and play.</p>
        <div className="actions">
          <a className="btn btn-primary" href="#">
            <MTelegram size={15} /> Open @SolPlayBot
          </a>
          <a className="btn btn-ghost" href="#">
            Buy $PLAY &nbsp;<MArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-brand">
            <BrandMark size={22} />
            <span>SOLPLAY</span>
          </div>
          <div className="footer-links">
            <a href="#">Telegram</a>
            <a href="#">Twitter</a>
            <a href="#">Whitepaper</a>
            <a href="#">Contract</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
        <div className="footer-meta">
          <div>© 2026 SOLPLAY · BUILT ON SOLANA</div>
          <div>V1.4.2 · BLOCK #284,019,442 · MAINNET</div>
          <div>18+ · GAMBLE RESPONSIBLY</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { TgMock, TgSection, HowItWorks, CtaBanner, Footer });
