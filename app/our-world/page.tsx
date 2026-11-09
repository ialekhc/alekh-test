"use client";

import { useState } from "react";
import styles from "./world.module.css";

const notes = [
  "Timro presence le ordinary din pani special banaidincha.",
  "Some of my favourite moments are the ones where we're doing absolutely nothing together.",
  "Timi hasda, mero din ali ramro huncha. Every single time.",
  "More walks, more random photos, more little moments with you. That's the wish.",
];
const letters = [
  { title: "you miss me", symbol: "♡", text: "Ekchin aakha banda gara. Imagine us on another little walk, talking about everything and nothing. I'm looking forward to our next one too." },
  { title: "the day feels heavy", symbol: "☁", text: "Aaja sabai kura solve garnu pardaina. Take a breath, drink some water, and be a little gentle with yourself. You deserve that." },
  { title: "you need a smile", symbol: "☀", text: "Consider this your tiny reminder: somewhere out there is someone smiling at their phone because of a photo of you. Yes, it's me." },
];
const adventures = ["A slow walk with no destination", "Coffee and a very long conversation", "A photo booth picture for our wallets", "Watch the sunset together"];

export default function OurWorld() {
  const [note, setNote] = useState(-1);
  const [selected, setSelected] = useState<number | null>(null);
  const [wishes, setWishes] = useState<number[]>([]);
  return (
    <main className={styles.world}>
      <nav className={styles.nav} aria-label="Our world navigation">
        <a href="/">← The original little page</a><span>ENZEY & ME · A LITTLE COLLECTION</span><a href="#letters">Open a letter ↗</a>
      </nav>
      <header className={styles.hero}>
        <div className={styles.intro}><p className={styles.label}>JUST BECAUSE IT’S YOU</p><h1>A little world.<br />A lot of <em>us.</em></h1><p>No special occasion. Just a place for our favourite moments, small reminders, and everything still waiting to happen.</p><a className={styles.button} href="#memories">Come on in <span>↗</span></a><span className={styles.sideNote}>Made for you, Enzey. Always adding to it.</span></div>
        <figure className={styles.heroPhoto}><img src="/images/memories/memory-04.jpg" alt="A moment together on a tree-lined path" fetchPriority="high" /><figcaption>my favourite kind of company ♡</figcaption><span className={styles.stamp}>YOU<br />& ME</span></figure>
      </header>
      <div className={styles.ribbon}>THE BIG THINGS ARE LOVELY. THE LITTLE THINGS ARE OURS. <span>✳</span> TIMI, MA, ANI HAMRA SANA MOMENTS.</div>
      <section className={styles.section} id="memories"><div className={styles.sectionTop}><div><p className={styles.label}>01 / THE SCRAPBOOK</p><h2>Wish we could bottle these.</h2></div><p>A few frames I keep coming back to.</p></div><div className={styles.photos}>{[
        ["01", "Us, being us."], ["03", "My favourite person in the frame."], ["09", "The little moments stay."],
      ].map(([id, caption]) => <figure key={id}><img src={`/images/memories/memory-${id}.jpg`} alt={caption} loading="lazy" /><figcaption>{caption} <span>♡</span></figcaption></figure>)}</div></section>
      <section className={styles.jarSection}><div><p className={styles.label}>02 / A POCKETFUL OF GOOD THINGS</p><h2>A small reminder,<br />just for today.</h2><p>Kehi kura haru feri-feri bhanna man lagcha.<br />Pick one. There’s a little love in every note.</p></div><div className={styles.noteCard}><span aria-hidden="true">✳</span><p aria-live="polite">{note < 0 ? "There’s something here for you." : notes[note]}</p><button className={styles.button} onClick={() => setNote((note + 1) % notes.length)}>{note < 0 ? "Pick a little note" : "One more little note"} ↗</button><small>{note < 0 ? "A tiny surprise. No occasion needed." : `${note + 1} of ${notes.length} little reminders`}</small></div></section>
      <section className={styles.section} id="letters"><p className={styles.label}>03 / KEEP THESE CLOSE</p><h2>Open when...</h2><p className={styles.subtitle}>A few words for whatever kind of day finds you.</p><div className={styles.letters}>{letters.map((letter, index) => <div className={styles.envelope} key={letter.title}><span aria-hidden="true">{letter.symbol}</span><h3>{letter.title}</h3><button aria-expanded={selected === index} aria-controls={`letter-${index}`} onClick={() => setSelected(selected === index ? null : index)}>{selected === index ? "Fold it back ↑" : "A letter for you ↗"}</button><p id={`letter-${index}`} hidden={selected !== index}>{letter.text}</p></div>)}</div></section>
      <section className={styles.adventures}><div><p className={styles.label}>04 / THE PAGES WE HAVEN’T FILLED</p><h2>More of this.<br />More with you.</h2><p>A little wishlist for our next chapters.<br />Tap the ones you’d love to do.</p></div><div className={styles.wishlist}>{adventures.map((wish, index) => <button key={wish} aria-pressed={wishes.includes(index)} onClick={() => setWishes(wishes.includes(index) ? wishes.filter(item => item !== index) : [...wishes, index])}><span>{wishes.includes(index) ? "♥" : "○"}</span>{wish}<span>↗</span></button>)}<small>Your picks are just for this visit. We can make the plans together.</small></div></section>
      <footer className={styles.footer}><p className={styles.label}>TO BE CONTINUED</p><h2>My favourite part?<br /><em>There’s more to come.</em></h2><p>Here’s to the ordinary days that become our favourite memories.</p><span>With love, for Enzey ♡</span><a href="/">Back to the original page ↗</a></footer>
    </main>
  );
}
