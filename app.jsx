/* global React, ReactDOM */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "neon",
  "headline": "casino",
  "mesh": 0.55,
  "topbar": true
}/*EDITMODE-END*/;

const PALETTES = {
  neon:     { accent: '#14F195', accent2: '#9945FF', label: 'Neon Solana' },
  emerald:  { accent: '#14F195', accent2: '#14F195', label: 'Emerald' },
  violet:   { accent: '#C28BFF', accent2: '#FF3DC8', label: 'Violet Riot' },
  telegram: { accent: '#229ED9', accent2: '#14F195', label: 'TG Sky' },
  ember:    { accent: '#FF6B35', accent2: '#FFCF52', label: 'Burn Ember' },
  paper:    { accent: '#E8E2D0', accent2: '#9945FF', label: 'Paper' },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const p = PALETTES[t.palette] || PALETTES.neon;
    document.documentElement.style.setProperty('--accent',   p.accent);
    document.documentElement.style.setProperty('--accent-2', p.accent2);
    document.documentElement.style.setProperty('--mesh-opacity', String(t.mesh));
  }, [t.palette, t.mesh]);

  return (
    <>
      {t.topbar && <Topbar />}
      <Nav />
      <Hero variant={t.headline} />
      <Floor />
      <TwoWays />
      <Loop />
      <Wallets />
      <TgSection />
      <HowItWorks />
      <CtaBanner />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette">
          <TweakRadio
            label="Accent pair"
            value={t.palette}
            onChange={(v) => setTweak('palette', v)}
            options={Object.keys(PALETTES).map(k => ({ value: k, label: PALETTES[k].label }))}
          />
        </TweakSection>
        <TweakSection label="Hero">
          <TweakRadio
            label="Headline"
            value={t.headline}
            onChange={(v) => setTweak('headline', v)}
            options={[
              { value: 'casino', label: 'Casino' },
              { value: 'flip',   label: 'Flip' },
              { value: 'short',  label: 'Short' },
            ]}
          />
          <TweakSlider
            label="Mesh glow"
            value={t.mesh} min={0} max={1.2} step={0.05}
            onChange={(v) => setTweak('mesh', v)}
          />
          <TweakToggle
            label="Top ticker"
            value={t.topbar}
            onChange={(v) => setTweak('topbar', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
