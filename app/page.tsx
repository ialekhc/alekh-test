"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { dateConfig } from "./date-config";

type Scene = "opening" | "letter" | "question" | "yes" | "date" | "no";

const noReplies = [
  "No 🙈",
  "Are you sure? 🥺",
  "Really? 😭",
  "My heart just broke a little 💔",
  "Think again, beautiful 😂",
  "One more chance? ❤️",
];

const noPositions = [
  { left: "73%", top: "31%" },
  { left: "71%", top: "70%" },
  { left: "28%", top: "72%" },
  { left: "76%", top: "48%" },
  { left: "48%", top: "76%" },
  { left: "72%", top: "66%" },
];

const hearts = ["♡", "♥", "✦", "♡", "·", "♥", "✧", "♡", "✦", "♥", "·", "♡"];

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
  const [noAttempts, setNoAttempts] = useState(0);
  const reduceMotion = useReducedMotion();
  const confetti = useMemo(() => Array.from({ length: 30 }, (_, index) => index), []);

  const dodgeNo = () => {
    if (noAttempts < noReplies.length - 1) setNoAttempts((value) => value + 1);
  };

  const chooseNo = () => {
    if (noAttempts < noReplies.length - 1) dodgeNo();
    else setScene("no");
  };

  return (
    <main>
      <Ambient celebration={scene === "yes" || scene === "date"} />
      <div className="grain" aria-hidden="true" />
      <AnimatePresence mode="wait">
        {scene === "opening" && (
          <SceneShell sceneKey="opening">
            <div className="opening-mark"><span>♥</span></div>
            <p className="eyebrow">A tiny love letter, made just for you</p>
            <h1>Hey {dateConfig.herName} <span className="heart">♥</span></h1>
            <p className="lead">I made something just for you...</p>
            <p className="soft-copy">Because sometimes, words feel more special when they come from the heart.</p>
            <button className="primary" onClick={() => setScene("letter")}>Open my heart <span>💌</span></button>
            <p className="signature">with love, {dateConfig.fromName}</p>
          </SceneShell>
        )}

        {scene === "letter" && (
          <SceneShell sceneKey="letter">
            <div className="letter-card">
              <div className="tape" aria-hidden="true" />
              <span className="mini-heart">♥</span>
              <p className="letter-kicker">For you, always</p>
              {[
                "You know, some of my favorite moments are the simple ones I get to share with you.",
                "Your smile makes ordinary days feel special, your presence makes everything feel lighter, and somehow, being around you always feels like exactly where I want to be.",
                "So today, I have one little question for you...",
              ].map((text, index) => (
                <motion.p
                  key={text}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.32, duration: 0.55 }}
                >{text}</motion.p>
              ))}
            </div>
            <button className="primary" onClick={() => setScene("question")}>What&apos;s the question? <span>🥺❤️</span></button>
          </SceneShell>
        )}

        {scene === "question" && (
          <SceneShell sceneKey="question">
            <p className="eyebrow">Okay, here goes...</p>
            <p className="so">So...</p>
            <h2>Will you go on a<br /><em>date with me?</em> <span>🌹</span></h2>
            <p className="soft-copy question-copy">Just you, me, good food, lots of smiles, and a little memory we&apos;ll keep forever.</p>
            <div className="choice-box" aria-label="Choose your answer">
              <button className="yes-button" onClick={() => setScene("yes")}>YES, I&apos;d love to! <span>♥</span></button>
              <motion.button
                className="no-button"
                style={noPositions[noAttempts]}
                animate={{ left: noPositions[noAttempts].left, top: noPositions[noAttempts].top }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                onPointerEnter={() => { if (noAttempts < noReplies.length - 1) dodgeNo(); }}
                onClick={chooseNo}
              >{noReplies[noAttempts]}</motion.button>
              <span className="choice-note">{noAttempts < noReplies.length - 1 ? "Psst... one of these feels extra right ✨" : "Okay, I promise — you can choose honestly ❤️"}</span>
            </div>
          </SceneShell>
        )}

        {scene === "yes" && (
          <SceneShell sceneKey="yes">
            <div className="confetti" aria-hidden="true">
              {confetti.map((item) => <i key={item} style={{ "--i": item } as React.CSSProperties}>♥</i>)}
            </div>
            <div className="celebration-heart">♥</div>
            <p className="eyebrow">Best. Answer. Ever.</p>
            <h2 className="yay">YAYYYYY! <span>❤️🥹</span></h2>
            <p className="lead">You just made me the happiest person.</p>
            <p className="soft-copy">I promise I&apos;ll make our date worth every smile.</p>
            <div className="tiny-divider"><span>✦</span><i /><span>♥</span><i /><span>✦</span></div>
            <p className="reveal-copy">Now let me show you the plan... ✨</p>
            <button className="primary" onClick={() => setScene("date")}>See our date <span>💕</span></button>
          </SceneShell>
        )}

        {scene === "date" && (
          <SceneShell sceneKey="date">
            <p className="eyebrow">It&apos;s a date</p>
            <h2>Our Date <span className="heart">♥</span></h2>
            <div className="date-card">
              <div className="date-stamp"><span>save</span><strong>the</strong><span>date</span></div>
              <div className="date-details">
                <div><span>Date</span><strong>{dateConfig.date}</strong></div>
                <div><span>Time</span><strong>{dateConfig.time}</strong></div>
                <div><span>Place</span><strong>{dateConfig.place}</strong></div>
                <div><span>Our plan</span><strong>{dateConfig.plan}</strong></div>
              </div>
              <div className="dress-code"><span>Dress code</span><p>Come exactly as you are — your smile is enough. ❤️</p></div>
            </div>
            <p className="date-note">No pressure. No complicated plans.<br />Just us, spending time together and making another beautiful memory.</p>
            <Memories />
            <FinalMessage />
          </SceneShell>
        )}

        {scene === "no" && (
          <SceneShell sceneKey="no">
            <div className="opening-mark gentle"><span>♡</span></div>
            <p className="eyebrow">Thank you for being honest</p>
            <h2>That&apos;s okay <span className="heart">♥</span></h2>
            <p className="lead">Your smile still means the world to me.</p>
            <p className="soft-copy">No pressure, no awkwardness — just a little love sent your way.</p>
            <button className="secondary" onClick={() => { setNoAttempts(0); setScene("opening"); }}>Read it again</button>
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
      <p>I don&apos;t know exactly what the future holds.</p>
      <p>But I do know that the moments I spend with you are the ones I always want more of.</p>
      <h3>So here&apos;s to one more date,<br />one more laugh,<br /><em>one more beautiful memory with you.</em> <span>❤️</span></h3>
      <div className="made-with">Made with a whole lot of love</div>
    </footer>
  );
}
