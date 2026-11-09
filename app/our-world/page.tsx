"use client";

import { useState } from "react";
import styles from "./world.module.css";
import { memories } from "./memories";

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
        <a href="/">← Our first little page</a><span className={styles.wordmark}>E <i>♡</i> us</span><a href="#letters">Love letters ↗</a>
      </nav>
      <header className={styles.hero}>
        <div className={styles.intro}><p className={styles.label}>FOR ENZEY, WITH ALL MY HEART</p><h1>Every little thing,<br /><em>better with you.</em></h1><p>Timi, ma, ani hamro sano sansar. A place to keep the moments I never want to forget, and a little love for the days in between.</p><a className={styles.button} href="#memories">Wander through our story <span>♡</span></a><span className={styles.sideNote}>No occasion. No reason. Just you.</span></div>
        <div className={styles.collage}><span className={styles.handNote}>my favourite place is next to you ↴</span><figure className={styles.heroPhoto}><img src="/images/memories/memory-04.jpg" alt="A moment together on a tree-lined path" fetchPriority="high" /><figcaption>my favourite kind of company ♡</figcaption><span className={styles.stamp}>always<br /><b>us</b></span></figure><figure className={styles.smallPhoto}><img src="/images/memories/memory-03.jpg" alt="Looking at each other, a little moment together" /><figcaption>you + me ♡</figcaption></figure><span className={styles.collageHeart} aria-hidden="true">♡</span></div>
      </header>
      <div className={styles.ribbon}><span>♡</span> EVERY PHOTO, A FEELING. EVERY MEMORY, YOU. <span>♡</span></div>
      <section className={styles.section} id="memories"><div className={styles.sectionTop}><div><p className={styles.label}>01 / THE SCRAPBOOK</p><h2>Wish we could bottle these.</h2></div><p>A few frames I keep coming back to.</p></div><div className={styles.photos}>{memories.map((memory, index) => <figure key={memory.id}><div className={styles.photoTop}><span>MEMORY / 0{index + 1}</span>{memory.date ? <span>{memory.date}</span> : <span>Date to be added</span>}</div><img src={`/images/memories/memory-${memory.id}.jpg`} alt={memory.caption} loading="lazy" /><figcaption>{memory.caption} <span>♡</span></figcaption><p className={styles.photoPlace}>{memory.place}</p></figure>)}</div></section>
      <section className={styles.jarSection}><div><p className={styles.label}>02 / A POCKETFUL OF GOOD THINGS</p><h2>A small reminder,<br />just for today.</h2><p>Kehi kura haru feri-feri bhanna man lagcha.<br />Pick one. There’s a little love in every note.</p></div><div className={styles.noteCard}><span className={styles.noteHeart} aria-hidden="true">♡</span><p aria-live="polite">{note < 0 ? "There’s something here for you." : notes[note]}</p><button className={styles.button} onClick={() => setNote((note + 1) % notes.length)}>{note < 0 ? "Pick a little note" : "One more little note"} ↗</button><small>{note < 0 ? "A tiny surprise. No occasion needed." : `${note + 1} of ${notes.length} little reminders`}</small></div></section>
      <section className={styles.section} id="letters"><p className={styles.label}>03 / SEALED WITH A LITTLE LOVE</p><h2>Open when...</h2><p className={styles.subtitle}>A few words for whatever kind of day finds you.</p><div className={styles.letters}>{letters.map((letter, index) => <div className={styles.envelope} data-open={selected === index} key={letter.title}><span className={styles.seal} aria-hidden="true">{letter.symbol}</span><h3>{letter.title}</h3><button aria-expanded={selected === index} aria-controls={`letter-${index}`} onClick={() => setSelected(selected === index ? null : index)}>{selected === index ? "Fold it back ↑" : "A letter for you ↗"}</button><p id={`letter-${index}`} hidden={selected !== index}>{letter.text}</p></div>)}</div></section>
      <section className={styles.adventures}><div><p className={styles.label}>04 / OUR NEXT CHAPTER</p><h2>More of this.<br />More with you.</h2><p>A little wishlist for our next chapters.<br />Tap the ones you’d love to do.</p></div><div className={styles.wishlist}>{adventures.map((wish, index) => <button key={wish} aria-pressed={wishes.includes(index)} onClick={() => setWishes(wishes.includes(index) ? wishes.filter(item => item !== index) : [...wishes, index])}><span>{wishes.includes(index) ? "♥" : "○"}</span>{wish}<span>↗</span></button>)}<small>Your picks are just for this visit. We can make the plans together.</small></div></section>
      <footer className={styles.footer}><p className={styles.label}>A LOVE NOTE, WITHOUT AN ENDING</p><h2>Of all the little things,<br /><em>you’re my favourite.</em></h2><p>Here’s to the ordinary days that become our favourite memories.</p><span>With love, for Enzey ♡</span><a href="/">Back to the original page ↗</a></footer>
    </main>
  );
}
