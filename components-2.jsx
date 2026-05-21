/* global React */

/* =========================================================
   The Floor — games as a real table
   ========================================================= */
const GAMES = [
  {
    n: 'I', mark: <MDice />, name: 'Dice Roll', ital: false,
    desc: 'Pick a number, set your bet. Beat the house roll and double up. Provably fair on-chain randomness.',
    mode: 'vs House', min: '0.05 SOL', mult: '2.00×', live: 348,
  },
  {
    n: 'II', mark: <MCard />, name: 'Blackjack', ital: false,
    desc: 'Classic 21. Hit, stand, double down. Beat the dealer and collect up to 2.5× your bet.',
    mode: 'vs House', min: '0.1 SOL', mult: '2.50×', live: 212,
  },
  {
    n: 'III', mark: <MSlot />, name: 'Slots', ital: false,
    desc: 'Spin the reels in Telegram. Hit the jackpot for up to 50× multipliers. Instant payouts.',
    mode: 'vs House', min: '0.02 SOL', mult: '50.00×', live: 619,
  },
  {
    n: 'IV', mark: <MSwords />, name: 'PvP Duel', ital: true,
    desc: 'Challenge another player 1-on-1. Winner takes 95% of the pot. House takes 5% — burned or bought back.',
    mode: 'PvP', min: '0.1 SOL', mult: '1.90×', live: 84,
  },
  {
    n: 'V', mark: <MCoin />, name: 'Coinflip', ital: false,
    desc: 'Heads or tails. 50/50. The purest PvP game on the platform. Instant resolution, no edge cases.',
    mode: 'PvP', min: '0.01 SOL', mult: '1.90×', live: 156,
  },
  {
    n: 'VI', mark: <MStar />, name: 'Roulette', ital: true,
    desc: 'European-rules roulette wheel. Tournament mode and group leaderboards arriving with the next release.',
    mode: 'Soon', min: '—', mult: '36×', live: null,
  },
];

function FloorRow({ g }) {
  return (
    <div className="floor-row">
      <div className="rank">— {g.n}</div>
      <div className="mark">{g.mark}</div>
      <div className="name">
        {g.ital ? <span className="ital">{g.name}</span> : g.name}
        <div className="desc" style={{ marginTop: 6 }}>{g.desc}</div>
      </div>
      <div className="meta-cells" style={{ display: 'contents' }}>
        <div>
          <div className="col-l">Mode</div>
          <div className="col-v" style={{ fontSize: 16, color: g.mode === 'PvP' ? 'var(--accent-2)' : g.mode === 'Soon' ? 'var(--gold)' : 'var(--ink)' }}>{g.mode}</div>
        </div>
        <div>
          <div className="col-l">Min bet</div>
          <div className="col-v" style={{ fontFamily: 'var(--mono)', fontSize: 14 }}>{g.min}</div>
        </div>
        <div>
          <div className="col-l">Max payout</div>
          <div className="col-v accent">{g.mult}</div>
        </div>
        <div>
          <div className="col-l">Status</div>
          {g.live !== null ? (
            <span className="live"><span className="d" />{g.live} live</span>
          ) : (
            <span className="live soon"><span className="d" />Soon</span>
          )}
        </div>
      </div>
      <a className="play" href="#">Play <span className="arr"><MArrowRight /></span></a>
    </div>
  );
}

function Floor() {
  return (
    <section className="section" id="floor" data-screen-label="02 Floor">
      <div className="wrap">
        <div className="section-head">
          <div className="num">SECTION <span>/ 01</span><br/>The Floor</div>
          <div>
            <h2>Six games. <em>One bot.</em> All on-chain.</h2>
            <p className="deck">Play solo against the house or queue into PvP duels. Every game runs directly inside Telegram — no app download, no wallet connect, no browser extension.</p>
          </div>
        </div>

        <div className="floor">
          <div className="floor-thead">
            <div>Rank</div>
            <div>Mark</div>
            <div>Game / Description</div>
            <div>Mode</div>
            <div>Min</div>
            <div>Max ×</div>
            <div>Status</div>
            <div style={{ textAlign: 'right' }}>Action</div>
          </div>
          {GAMES.map((g, i) => <FloorRow key={i} g={g} />)}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Two Ways — editorial split, no big symbols
   ========================================================= */
function TwoWays() {
  return (
    <section className="section" id="deposits" data-screen-label="03 Deposits">
      <div className="wrap">
        <div className="section-head">
          <div className="num">SECTION <span>/ 02</span><br/>Deposits</div>
          <div>
            <h2>Two assets.<br/><em>One economy.</em></h2>
            <p className="deck">Deposit native SOL or the $PLAY SPL token from any Solana wallet. Every game accepts both — but they behave very differently when you lose.</p>
          </div>
        </div>

        <div className="tw">
          <div className="tw-col">
            <div className="tw-label">◎ &nbsp; A. Bet in SOL</div>
            <h3 className="tw-h">Bet what <em>everyone</em><br/>already holds.</h3>
            <p className="tw-body">
              Native Solana. Fast, feeless, and familiar. SOL winnings are paid out instantly from the hot wallet to your in-bot balance. SOL losses fuel the $PLAY buyback engine — every L on the table puts upward pressure on the token.
            </p>
            <div className="tw-rules">
              <div className="tw-rule">
                <span className="when">On Loss</span>
                <span className="what">SOL is routed to the hot wallet, which uses it to market-buy $PLAY.</span>
                <span className="out buyback">Buyback</span>
              </div>
              <div className="tw-rule">
                <span className="when">On Win</span>
                <span className="what">SOL is paid out from the hot wallet to your balance, instantly.</span>
                <span className="out pay">Hot wallet pays</span>
              </div>
              <div className="tw-rule">
                <span className="when">Withdraw</span>
                <span className="what">Any time, to any Solana wallet. No lock-up, no minimum.</span>
                <span className="out pay">Direct</span>
              </div>
            </div>
          </div>

          <div className="tw-col">
            <div className="tw-label">◇ &nbsp; B. Bet in $PLAY</div>
            <h3 className="tw-h">Bet what we <em>burn</em><br/>when you lose.</h3>
            <p className="tw-body">
              The SolPlay SPL token. Bet $PLAY and it enters a closed deflationary loop. Wins are paid from the treasury reserve. Losses are sent to the burn address and removed from supply forever — no router, no buyback, just gone.
            </p>
            <div className="tw-rules">
              <div className="tw-rule">
                <span className="when">On Loss</span>
                <span className="what">$PLAY is sent to the burn address and permanently removed from supply.</span>
                <span className="out burn">Burned</span>
              </div>
              <div className="tw-rule">
                <span className="when">On Win</span>
                <span className="what">$PLAY is paid from the treasury wallet to your balance, instantly.</span>
                <span className="out pay">Treasury pays</span>
              </div>
              <div className="tw-rule">
                <span className="when">Withdraw</span>
                <span className="what">Any time, to any Solana wallet that holds the $PLAY token account.</span>
                <span className="out pay">Direct</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Floor, FloorRow, TwoWays });
