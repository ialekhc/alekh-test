"use client";

import { useEffect, useMemo, useState } from "react";

// PERSONALIZE: Change her name here once and it updates the visible headings.
const HER_NAME = "Enzey";

// PERSONALIZE: Replace these paths or captions whenever you want to update the gallery.
const memories = [
  { image: "/images/memories/memory-01.jpg", caption: "Partners in crime, looking suspiciously innocent 😂❤️" },
  { image: "/images/memories/memory-02.jpg", caption: "Timro yo smile mero favourite ho ❤️" },
  { image: "/images/memories/memory-03.jpg", caption: "Jata timi, tetai ma 🥹" },
  { image: "/images/memories/memory-04.jpg", caption: "Hami dui jana + random moments = best combination 😂❤️" },
  { image: "/images/memories/memory-05.jpg", caption: "Pretty girl, pretty memory 🌷" },
  { image: "/images/memories/memory-06.jpg", caption: "Yo din yaad cha? 🥹" },
  { image: "/images/memories/memory-07.jpg", caption: "Our smiles say everything ❤️" },
  { image: "/images/memories/memory-08.jpg", caption: "My favorite person, in my favorite frame." },
  { image: "/images/memories/memory-09.jpg", caption: "Ma timilai herchu, timi camera lai 😭❤️" },
  { image: "/images/memories/memory-10.jpg", caption: "Chaos, hugs, and us 😂" },
  { image: "/images/memories/memory-11.jpg", caption: "Yo moment feri repeat garnu cha. ❤️" },
];

// PERSONALIZE: Edit these little reasons whenever you want.
const reasons = [
  ["01", "Timro smile ❤️", "It makes even an ordinary day feel lighter."],
  ["02", "Timro care garne bani", "The little things you notice mean more than you know."],
  ["03", "Timro cute ris 😭", "Scary? Ali ali. Still cute? Unfortunately, yes."],
  ["04", "Timro voice", "Instant comfort, even on the messiest days."],
  ["05", "Timro presence", "Timro presence le nai mero din better banaidincha."],
  ["06", "Honestly...", "Timi timi bhayera nai. ❤️"],
];

const floatingHearts = ["♡", "♥", "♡", "·", "♥", "✦", "♡", "♥", "·", "♡"];

export default function Home() {
  const [answer, setAnswer] = useState<"little" | "very" | null>(null);
  const [heartBurst, setHeartBurst] = useState(0);
  const burstPieces = useMemo(() => Array.from({ length: 22 }, (_, index) => index), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.13 },
    );
    const items = document.querySelectorAll(".reveal");
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const scrollToApology = () => document.querySelector("#sorry")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      <a className="skip-link" href="#sorry">Skip to my apology</a>
      <div className="floating-hearts" aria-hidden="true">
        {floatingHearts.map((heart, index) => <span key={index} className={`float-heart heart-${index + 1}`}>{heart}</span>)}
      </div>

      <nav aria-label="Main navigation">
        <a className="brand" href="#home"><span>♥</span> for {HER_NAME}</a>
        <div>
          <a href="#sorry">Sorry</a>
          <a href="#memories">Memories</a>
          <a href="#last-thing">Last thing</a>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero-orbit" aria-hidden="true"><span>♥</span></div>
        <p className="eyebrow">Euta sano, heartfelt message</p>
        <h1>Hey {HER_NAME} <span>❤️</span></h1>
        <p className="hero-copy">
          Yo website banaunu ko reason timilai impress garnu matra haina...
          <strong>timilai properly sorry bhannu ho. 🥺</strong>
        </p>
        <button className="primary-button" onClick={scrollToApology}>
          Ekchin mero kura suna na 🥺
        </button>
        <span className="scroll-note">I promise, no excuses ↓</span>
      </header>

      <section className="section apology-section" id="sorry">
        <div className="section-heading reveal">
          <p className="eyebrow">From my heart</p>
          <h2>Ma genuinely <em>sorry</em> chu.</h2>
          <p>No clever lines. No excuses. Just what I should have said properly.</p>
        </div>

        {/* PERSONALIZE: Change the apology paragraphs below to match your situation. */}
        <article className="letter reveal">
          <span className="letter-pin" aria-hidden="true">♥</span>
          <p className="salutation">{HER_NAME},</p>
          <p>Malai thaha cha maile timro feelings hurt gare.<br />Ani tesko lagi ma genuinely sorry chu.</p>
          <p>Timilai dukha dine mero intention kahile pani thiyena, tara intention jasto bhaye pani timilai hurt bhayo, ani tyo kura ko responsibility mero ho.</p>
          <p>Timro face ma smile dekhda malai jati khusi lagcha, timro sadness ko reason ma nai bhaye bhanera sochda sachikai naramro lagcha.</p>
          <p>Ma excuse dina khojeko haina. Ma bas timilai yo bujhauna khojdai chu ki timi mero lagi genuinely important chau.</p>
          <p>Kahile kahi ma stupid hunchu, kahile kahi ma kura properly bujhdina, ani kahile kahi mero words le timilai hurt garna sakcha.</p>
          <blockquote>Tara euta kura chai sure cha...<br /><strong>Ma timilai intentionally hurt garna kahile pani chahanna.</strong></blockquote>
          <p>Sorry bhanera matra sabai instantly thik hudaina bhanne malai thaha cha.</p>
          <p>Tei bhayera ma words bhanda pani mero actions le better huna try garnechu.</p>
          <p>Timi deserve garchau ki timilai respect garos, bujhos, listen garos, ani timro feelings lai lightly nalios.</p>
          <p className="letter-close">Maile timilai hurt gareko ma<br /><strong>sachikai sorry chu, {HER_NAME}. ❤️</strong></p>
        </article>
      </section>

      <section className="section memory-section" id="memories">
        <div className="section-heading reveal">
          <p className="eyebrow">Little pieces of us</p>
          <h2>Hamro moments <span>❤️</span></h2>
          <p>Kehi memories jun ma feri-feri farkera herna chahanchu.</p>
        </div>
        <div className="memory-grid">
          {memories.map((memory, index) => (
            <figure className="memory-card reveal" key={memory.caption} style={{ transitionDelay: `${index * 70}ms` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={memory.image}
                alt={`A favorite memory together: ${memory.caption}`}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{memory.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section reasons-section" id="reasons">
        <div className="section-heading reveal">
          <p className="eyebrow">Just a few reasons</p>
          <h2>Timi kina special chau? <span>🌷</span></h2>
        </div>
        <div className="reasons-grid">
          {reasons.map(([number, title, copy], index) => (
            <article className="reason-card reveal" key={title} style={{ transitionDelay: `${index * 55}ms` }}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section check-in-section">
        <div className="check-in reveal">
          <span className="tiny-sticker">honest answer only</span>
          <p className="eyebrow">A very important survey</p>
          <h2>Ajhai risako chau? 🥺</h2>
          <div className="answer-buttons">
            <button className="soft-button" onClick={() => setAnswer("little")}>Ali ali 😒</button>
            <button className="soft-button" onClick={() => setAnswer("very")}>Dherai 😭</button>
          </div>
          <div className="answer-box" aria-live="polite">
            {answer === "little" && <p>Okayyy... progress cha 😂❤️</p>}
            {answer === "very" && <p>Fair enough 😭<br />Ma deserve garchu.<br />Tara ek chance chai deu na please 🥺❤️</p>}
          </div>
          {answer && (
            <button className="primary-button make-up-button" onClick={() => setHeartBurst((value) => value + 1)}>
              Can I make it up to you? 🥺
            </button>
          )}
          {heartBurst > 0 && (
            <div className="thank-you" key={heartBurst} aria-live="polite">
              <div className="heart-burst" aria-hidden="true">
                {burstPieces.map((piece) => <i key={piece} style={{ "--i": piece } as React.CSSProperties}>♥</i>)}
              </div>
              <strong>Thank you mero kura yaha samma padhdeko ma. ❤️</strong>
              <p>Ma pressure dina khojeko haina.<br />Timi ready bhayepachi bas ekchoti kura garna paaye pugcha.</p>
            </div>
          )}
        </div>
      </section>

      <footer className="section final-section" id="last-thing">
        <div className="final-card reveal">
          <div className="wax-heart" aria-hidden="true">♥</div>
          <p className="eyebrow">One honest ending</p>
          <h2>Last thing... ❤️</h2>
          <div className="final-copy">
            <p>Yo website le maile gareko mistake erase gardaina.</p>
            <p>Tara ma simply &apos;sorry&apos; bhanera chhodna pani chahina.</p>
            <p>Timi mero lagi important chau,<br />ani timro feelings pani important chan.</p>
            <p>Ma perfect chaina,<br />tara timro lagi better huna chai genuinely try garna chahanchu.</p>
            <span>So...</span>
            <strong>I am really sorry, {HER_NAME}. ❤️</strong>
            <p>Forgive me when your heart is ready.</p>
            <p>No pressure.<br />No force.</p>
            <p>Bas...<br /><b>ris ali kam gara na 😭❤️</b></p>
          </div>
        </div>
        <p className="made-with">Made with ❤️ for you, regret, and a little bit of coding.</p>
      </footer>
    </main>
  );
}
