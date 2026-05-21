/* global React */

/* =========================================================
   The Loop — tokenomics, editorial w/ mono diagrams
   ========================================================= */
function LoopRow({ id, scope, headline, diagram }) {
  return (
    <div className="loop">
      <div className="loop-side">
        <span className="id">— {id}</span>
        <span className="scope">{scope}</span>
      </div>
      <div className="loop-main">
        <h3 className="loop-h">{headline}</h3>
        <div className="loop-diagram">{diagram}</div>
      </div>
    </div>
  );
}

function Loop() {
  return (
    <section className="section" id="loop" data-screen-label="04 Loop">
      <div className="wrap">
        <div className="section-head">
          <div className="num">SECTION <span>/ 03</span><br/>The Loop</div>
          <div>
            <h2>Every bet<br/><em>serves $PLAY.</em></h2>
            <p className="deck">There are four economic paths through the system. Every one of them either reduces $PLAY supply or increases its market demand. Wins and losses both feed the loop.</p>
          </div>
        </div>

        <div>
          <LoopRow
            id="I"
            scope={<>House Games · <span style={{ color: 'var(--ink)' }}>$PLAY bets</span></>}
            headline={<>Bet $PLAY and lose, and the $PLAY is <span className="burn">burned</span>.<br/><em>Forever.</em></>}
            diagram={
              <>
                <span className="lbl">└─ </span><span className="in">PLAYER BET</span>   <span className="lbl">→</span>  <span className="in">$PLAY (in)</span>   <span className="lbl">→</span>  <span className="ko">LOSS</span>     <span className="lbl">→</span>  <span className="ko">BURN ADDRESS</span>{'\n'}
                <span className="lbl">└─ </span><span className="in">PLAYER BET</span>   <span className="lbl">→</span>  <span className="in">$PLAY (in)</span>   <span className="lbl">→</span>  <span className="out">WIN</span>      <span className="lbl">→</span>  <span className="out">TREASURY PAYS</span>
              </>
            }
          />

          <LoopRow
            id="II"
            scope={<>House Games · <span style={{ color: 'var(--ink)' }}>SOL bets</span></>}
            headline={<>Bet SOL and lose, and the SOL <span className="acc">buys back $PLAY</span> on the open market.</>}
            diagram={
              <>
                <span className="lbl">└─ </span><span className="in">PLAYER BET</span>   <span className="lbl">→</span>  <span className="in">SOL (in)</span>     <span className="lbl">→</span>  <span className="ko">LOSS</span>     <span className="lbl">→</span>  <span className="out">BUYBACK $PLAY</span>{'\n'}
                <span className="lbl">└─ </span><span className="in">PLAYER BET</span>   <span className="lbl">→</span>  <span className="in">SOL (in)</span>     <span className="lbl">→</span>  <span className="out">WIN</span>      <span className="lbl">→</span>  <span className="out">HOT WALLET PAYS</span>
              </>
            }
          />

          <LoopRow
            id="III"
            scope={<>PvP Games · <span style={{ color: 'var(--ink)' }}>$PLAY bets</span></>}
            headline={<>Duel in $PLAY. <em>Winner takes 95%.</em><br/>The 5% house cut is <span className="burn">burned</span>.</>}
            diagram={
              <>
                <span className="lbl">└─ </span><span className="in">TOTAL POT</span>    <span className="lbl">→</span>  <span className="in">95%</span>           <span className="lbl">→</span>  <span className="out">WINNER WALLET</span>{'\n'}
                <span className="lbl">└─ </span><span className="in">TOTAL POT</span>    <span className="lbl">→</span>  <span className="in">5% HOUSE</span>      <span className="lbl">→</span>  <span className="ko">BURN ADDRESS</span>
              </>
            }
          />

          <LoopRow
            id="IV"
            scope={<>PvP Games · <span style={{ color: 'var(--ink)' }}>SOL bets</span></>}
            headline={<>Duel in SOL. <em>Winner takes 95%.</em><br/>The 5% house cut <span className="acc">buys back $PLAY</span>.</>}
            diagram={
              <>
                <span className="lbl">└─ </span><span className="in">TOTAL POT</span>    <span className="lbl">→</span>  <span className="in">95%</span>           <span className="lbl">→</span>  <span className="out">WINNER WALLET</span>{'\n'}
                <span className="lbl">└─ </span><span className="in">TOTAL POT</span>    <span className="lbl">→</span>  <span className="in">5% HOUSE</span>      <span className="lbl">→</span>  <span className="out">BUYBACK $PLAY</span>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Wallets — terminal blocks
   ========================================================= */
function Wallets() {
  return (
    <section className="section" id="wallets" data-screen-label="05 Wallets">
      <div className="wrap">
        <div className="section-head">
          <div className="num">SECTION <span>/ 04</span><br/>Infrastructure</div>
          <div>
            <h2>Three wallets.<br/><em>Zero ambiguity.</em></h2>
            <p className="deck">A clear separation of funds — treasury, liquidity, and burns — keeps the system transparent and fully auditable on-chain. Every wallet is read-only public; every transaction is verifiable on Solscan.</p>
          </div>
        </div>

        <div className="wallets">
          <div className="term">
            <div className="term-head"><span className="dot live" /><span>treasury_wallet</span><span className="ttl">SoLpY…X4nL</span></div>
            <div className="term-body">
              <span className="ln"><span className="p">$</span> <span className="k">cat</span> <span className="v">role</span></span>
              <span className="ln"><span className="v">Holds $PLAY reserves.</span></span>
              <span className="ln"><span className="v">Pays out $PLAY wins from house games.</span></span>
              <span className="ln" style={{ marginTop: 12 }}><span className="p">$</span> <span className="k">balance</span></span>
              <span className="ln"><span className="b">◇ 18,402,194</span> <span className="k">$PLAY</span></span>
              <span className="ln"><span className="b">≈ $338,600</span> <span className="k">USD</span></span>
              <span className="ln" style={{ marginTop: 12 }}><span className="p">$</span> <span className="k">last_tx</span></span>
              <span className="ln"><span className="arrow">→</span> <span className="v">PAYOUT</span> <span className="b">+820 $PLAY</span> <span className="k">· 4s ago</span></span>
              <span className="ln hash">SoLpYtrSy7e1KvTzqB2nXf…X4nLp9mAa3</span>
              <div className="pulse-line">live · solscan verified</div>
            </div>
          </div>

          <div className="term">
            <div className="term-head"><span className="dot live" /><span>hot_wallet</span><span className="ttl">SoLpY…9fAa</span></div>
            <div className="term-body">
              <span className="ln"><span className="p">$</span> <span className="k">cat</span> <span className="v">role</span></span>
              <span className="ln"><span className="v">Holds SOL liquidity for payouts.</span></span>
              <span className="ln"><span className="v">Sources every $PLAY market buyback.</span></span>
              <span className="ln" style={{ marginTop: 12 }}><span className="p">$</span> <span className="k">balance</span></span>
              <span className="ln"><span className="b">◎ 2,148.61</span> <span className="k">SOL</span></span>
              <span className="ln"><span className="b">≈ $395,540</span> <span className="k">USD</span></span>
              <span className="ln" style={{ marginTop: 12 }}><span className="p">$</span> <span className="k">last_tx</span></span>
              <span className="ln"><span className="arrow">→</span> <span className="v">BUYBACK</span> <span className="b">+1.2 SOL</span> <span className="k">· 2s ago</span></span>
              <span className="ln hash">SoLpYh0tW1k2pQrBx9aFcM…9fAaQ4nLb</span>
              <div className="pulse-line">live · solscan verified</div>
            </div>
          </div>

          <div className="term">
            <div className="term-head"><span className="dot" style={{ background: 'var(--burn)' }} /><span>burn_address</span><span className="ttl" style={{ color: 'var(--burn)' }}>1nc1n…1111</span></div>
            <div className="term-body">
              <span className="ln"><span className="p">$</span> <span className="k">cat</span> <span className="v">role</span></span>
              <span className="ln"><span className="v">Dead-end wallet. No private key.</span></span>
              <span className="ln"><span className="ko">Tokens sent here are permanently removed.</span></span>
              <span className="ln" style={{ marginTop: 12 }}><span className="p">$</span> <span className="k">total_burned</span></span>
              <span className="ln"><span className="ko" style={{ fontWeight: 600 }}>◇ 42,108,917 $PLAY</span></span>
              <span className="ln"><span className="ko" style={{ fontWeight: 600 }}>≈ $774,800 USD · forever</span></span>
              <span className="ln" style={{ marginTop: 12 }}><span className="p">$</span> <span className="k">last_tx</span></span>
              <span className="ln"><span className="arrow">→</span> <span className="ko">BURN</span> <span className="ko" style={{ fontWeight: 600 }}>+1,402 $PLAY</span> <span className="k">· 1s ago</span></span>
              <span className="ln hash">1nc1nerator1111111111111111111111111</span>
              <div className="pulse-line" style={{ '--accent': 'var(--burn)' }}>live · solscan verified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Loop, LoopRow, Wallets });
