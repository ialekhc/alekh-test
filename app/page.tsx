"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { dateConfig } from "./date-config";

type Scene = "opening" | "letter" | "question" | "yes" | "date";

const hearts = ["♡", "♥", "✦", "♡", "·", "♥", "✧", "♡", "✦", "♥", "·", "♡"];
const runawayNo = ["No 🙈", "Catch me first 😂", "Too slow, pretty 😌", "Not this button 🤭", "Still no? Suspicious 🤨", "Just press YES already 💘", "I can do this all day 🏃‍♀️"];
const runawaySpots = [
  { left: "72%", top: "78%" }, { left: "25%", top: "80%" },
  { left: "73%", top: "64%" }, { left: "27%", top: "61%" },
  { left: "53%", top: "83%" }, { left: "78%", top: "82%" },
  { left: "22%", top: "70%" },
];

function Ambient({ celebration = false }: { celebration?: boolean }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className={`ambient ${celebration ? "celebration" : ""}`} aria-hidden="true">
      {hearts.map((heart, index) => (
        <motion.span
          key={`${heart}-${index}`}
          className={`particle p${index + 1}`}
          animate={reduceMotion ? undefined : { y: [0, -16, 0], rotate: [0, index % 2 ? 8 : -8, 0] }}
          transition={{ duration: 4 + (index % 4), repeat: Infinity, delay: index * 0.18, ease: "easeInOut" }}
        >
          {heart}
        </motion.span>
      ))}
    </div>
  );
}

function SceneShell({ children, sceneKey }: { children: React.ReactNode; sceneKey: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section
      key={sceneKey}
      className="scene"
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.99 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const [scene, setScene] = useState<Scene>("opening");
  const [noDodges, setNoDodges] = useState(0);
  const reduceMotion = useReducedMotion();
  const confetti = useMemo(() => Array.from({ length: 30 }, (_, index) => index), []);

  return (
    <main>
      <Ambient celebration={scene === "yes" || scene === "date"} />
      <div className="grain" aria-hidden="true" />
      <AnimatePresence mode="wait">
        {scene === "opening" && (
          <SceneShell sceneKey="opening">
            <motion.div className="silly-alert" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.1 }}>
              ⚠️ Cuteness ahead. Proceed dramatically.
            </motion.div>
            <div className="opening-mark"><span>♥</span></div>
            <p className="eyebrow">A suspiciously cute love letter</p>
            <h1>Hey {dateConfig.herName} <span className="heart">♥</span></h1>
            <p className="lead">I made something just for you... because texting “hey” felt criminally under-romantic.</p>
            <p className="soft-copy">Warning: may contain excessive affection, terrible jokes, and one very important question.</p>
            <button className="primary wiggle" onClick={() => setScene("letter")}>Fine, show me <span>💌</span></button>
            <p className="signature">with love (and zero chill), {dateConfig.fromName}</p>
          </SceneShell>
        )}

        {scene === "letter" && (
          <SceneShell sceneKey="letter">
            <motion.figure className="story-image letter-image" initial={{ opacity: 0, y: 18, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: -1 }} transition={{ duration: .7 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/love-letter.jpg" alt="A blush love letter beside a red rose in warm fairy lights" />
              <figcaption>Special delivery for my favorite person 💌</figcaption>
            </motion.figure>
            <div className="letter-card">
              <div className="tape" aria-hidden="true" />
              <span className="mini-heart">♥</span>
              <p className="letter-kicker">For you, always</p>
              {[
                "You know, some of my favorite moments are the simple ones I get to share with you — even when you steal the blanket and deny everything.",
                "Your smile makes ordinary days feel special, your presence makes everything lighter, and your ability to live rent-free in my head is honestly getting ridiculous.",
                "I like you more than naps, snacks, and being right. Please understand how serious this is.",
              ].map((text, index) => (
                <motion.p
                  key={text}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.32, duration: 0.55 }}
                >{text}</motion.p>
              ))}
              <motion.blockquote initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: .7 }}>
                “There are millions of places we could go and thousands of things we could do… but honestly, none of that matters much to me. Because if I’m spending that moment with you, I already know it’s going to be special. So I have just one little question for my favorite person… 🥹❤️”
              </motion.blockquote>
            </div>
            <button className="primary wiggle" onClick={() => setScene("question")}>Spill it already <span>🥺❤️</span></button>
          </SceneShell>
        )}

        {scene === "question" && (
          <SceneShell sceneKey="question">
            <div className="dramatic-stage" aria-hidden="true"><i /><i /><i /><span>♥</span></div>
            <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>The moment of truth</motion.p>
            <motion.p className="so" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 }}>Okay. Deep breath...</motion.p>
            <motion.h2 initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.05, duration: .85, ease: [0.22, 1, 0.36, 1] }}>
              Will you go on a<br /><em>date with me?</em> <span>🌹</span>
            </motion.h2>
            <motion.p className="soft-copy question-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.65 }}>
              Just you, me, good food, lots of smiles, and one beautiful memory waiting to happen.
            </motion.p>
            <motion.div className="only-answer" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.05 }}>
              <span className="destiny-label">Two buttons. One of them has commitment issues. ✨</span>
              <button className="yes-button solo" onClick={() => setScene("yes")}>YES, A THOUSAND TIMES YES! <span>♥</span></button>
              <small>{noDodges === 0 ? "Choose wisely, my favorite person 🥹" : `No-button escape count: ${noDodges} · it is getting tired 😭`}</small>
              <motion.button
                type="button"
                className="runaway-no"
                aria-label="Playful no button that runs away"
                animate={runawaySpots[noDodges % runawaySpots.length]}
                transition={{ type: "spring", stiffness: 430, damping: 25 }}
                onPointerEnter={() => setNoDodges((count) => count + 1)}
                onPointerDown={(event) => { event.preventDefault(); setNoDodges((count) => count + 1); }}
                onClick={(event) => { event.preventDefault(); setNoDodges((count) => count + 1); }}
              >{runawayNo[noDodges % runawayNo.length]}</motion.button>
            </motion.div>
          </SceneShell>
        )}

        {scene === "yes" && (
          <SceneShell sceneKey="yes">
            <div className="confetti" aria-hidden="true">
              {confetti.map((item) => <i key={item} style={{ "--i": item } as React.CSSProperties}>♥</i>)}
            </div>
            <div className="celebration-heart">♥</div>
            <p className="eyebrow">Screenshotting this for evidence</p>
            <h2 className="yay">YAYYYYY! <span>❤️🥹</span></h2>
            <p className="lead">Excellent choice. Impeccable taste. Ten out of ten.</p>
            <p className="soft-copy">You just made me the happiest little idiot alive. I promise I&apos;ll make our date worth every smile.</p>
            <div className="tiny-divider"><span>✦</span><i /><span>♥</span><i /><span>✦</span></div>
            <p className="reveal-copy">Your prize: me, but dressed slightly better. ✨</p>
            <button className="primary wiggle" onClick={() => setScene("date")}>Show me the evidence <span>💕</span></button>
          </SceneShell>
        )}

        {scene === "date" && (
          <SceneShell sceneKey="date">
            <p className="eyebrow">It&apos;s a date</p>
            <h2>Our Date <span className="heart">♥</span></h2>
            <div className="official-sticker">OFFICIALLY<br />CUTE</div>
            <div className="date-card">
              <div className="date-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/date-night.jpg" alt="A cozy candlelit dinner table for two overlooking city lights" />
                <span>Picture us here ✨</span>
              </div>
              <div className="date-stamp"><span>save</span><strong>the</strong><span>date</span></div>
              <div className="date-details">
                <div><span>Date</span><strong>{dateConfig.date}</strong></div>
                <div><span>Time</span><strong>{dateConfig.time}</strong></div>
                <div><span>Place</span><strong>{dateConfig.place}</strong></div>
                <div><span>Our plan</span><strong>{dateConfig.plan}</strong></div>
              </div>
              <div className="dress-code"><span>Dress code</span><p>Come exactly as you are — your smile is enough. ❤️</p></div>
              <p className="terms">Terms &amp; conditions: laughing at my jokes is optional but strongly encouraged. Dessert sharing remains under negotiation.</p>
            </div>
            <p className="date-note">No pressure. No complicated plans.<br />Just us, being cute and mildly embarrassing in public.</p>
            <Memories />
            <FinalMessage />
          </SceneShell>
        )}

      </AnimatePresence>
    </main>
  );
}

function Memories() {
  return (
    <section className="memories">
      <p className="eyebrow">Us, in little moments</p>
      <h2>A Few Reasons<br /><em>You Make Me Smile</em> <span className="heart">♥</span></h2>
      <div className="memory-grid">
        {dateConfig.memories.map((memory, index) => (
          <motion.figure key={memory.caption} whileHover={{ y: -5, rotate: index % 2 ? 0.5 : -0.5 }}>
            {memory.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={memory.image} alt={memory.caption} />
            ) : (
              <div className={`photo-placeholder ${memory.color}`} aria-label="Add your photo here">
                <span>{["♡", "✦", "♥", "☼", "❀", "♡"][index]}</span>
                <small>your photo here</small>
              </div>
            )}
            <figcaption>{memory.caption}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

function FinalMessage() {
  return (
    <footer>
      <div className="footer-heart">♥</div>
      <p>I don&apos;t know exactly what the future holds. Probably snacks. Hopefully us.</p>
      <p>But I do know that the moments I spend with you are the ones I always want more of.</p>
      <h3>So here&apos;s to one more date,<br />one more laugh,<br /><em>one more beautiful memory with you.</em> <span>❤️</span></h3>
      <div className="made-with">Made with love, butterflies &amp; questionable coding decisions</div>
    </footer>
  );
}
