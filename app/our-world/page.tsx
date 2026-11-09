"use client";

import { useEffect, useState } from "react";
import styles from "./world.module.css";
import { chapters } from "./memories";
import SiteNavigation from "../components/SiteNavigation";

const notes = [
  "Timilai dekhepachi sabai kura perfect hudaina. Tara ordinary din pani timisanga share garna man lagcha.",
  "You know those tiny things you do without thinking? The way you smile, the way you listen? Those are the things I keep falling for.",
  "Timi sanga thulo plan nai chaincha bhanne chaina. Euta walk, ali guff, ani timro haat samatna paye pugcha.",
  "If something good happens, I want to tell you. If the day goes badly, I still want to tell you. I love having you in the little details of my life.",
  "Timro photo herda smile aaucha. Ani kahile kahi photo bhanda badi, tyo bela timisanga bhayeko feeling yaad aaucha.",
  "I don't just want beautiful photos with you. I want the ordinary minutes before and after them, too.",
];
const letters = [
  { title: "you miss me", symbol: "♡", text: "Malai pani timisanga basera guff garna man lagcha. Nothing important, necessarily. Just the little things that happened today. Until our next walk, keep this here: I’m looking forward to seeing you, hearing your voice, and being next to you again." },
  { title: "the day feels heavy", symbol: "☁", text: "Enzey, aaja strong dekhinu pardaina. You don’t have to turn a difficult day into a good story for me. Tell me the messy version, or sit quietly for a while. I want to listen properly, without rushing you to feel better." },
  { title: "you need a smile", symbol: "☀", text: "Euta sano confession: timro photo herera smile garepachi, ma feri ekchoti herchu. Apparently once is not enough. You probably think it’s just another picture. Meanwhile, I’m here thinking, ‘How did I get this lucky?’" },
];
const adventures = ["A slow walk with no destination", "Coffee and a very long conversation", "A photo booth picture for our wallets", "Watch the sunset together"];

export default function OurWorld() {
  const [activeChapter, setActiveChapter] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting);
      if (visible.length) setActiveChapter(visible[0].target.id);
    }, { rootMargin: "-90px 0px -45% 0px", threshold: 0 });
    document.querySelectorAll("[data-memory-chapter]").forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const [note, setNote] = useState(-1);
  const [selected, setSelected] = useState<number | null>(null);
  const [wishes, setWishes] = useState<number[]>([]);
  return (
    <main className={styles.world}>
      <SiteNavigation page="world" activeChapter={activeChapter} />
      <header className={styles.hero}>
        <div className={styles.intro}><p className={styles.label}>FOR ENZEY, WITH ALL MY HEART</p><h1>Enzey, it’s you.<br /><em>In all the little ways.</em></h1><p>Timisanga huda, kata pugne bhanda pani sangai hidnu ramailo lagcha. These are a few pieces of us I wanted to keep somewhere you could always find them.</p><a className={styles.button} href="#memories">Find your favourite memory <span>♡</span></a><span className={styles.sideNote}>A little corner of the internet. A whole lot of you.</span></div>
        <div className={styles.collage}><span className={styles.handNote}>my favourite place is next to you ↴</span><figure className={styles.heroPhoto}><img src="/images/memories/memory-04.jpg" alt="A moment together on a tree-lined path" fetchPriority="high" /><figcaption>my favourite kind of company ♡</figcaption><span className={styles.stamp}>always<br /><b>us</b></span></figure><figure className={styles.smallPhoto}><img src="/images/memories/memory-03.jpg" alt="Looking at each other, a little moment together" /><figcaption>you + me ♡</figcaption></figure><span className={styles.collageHeart} aria-hidden="true">♡</span></div>
      </header>
      <div className={styles.ribbon}><span>♡</span> TIMI SANGA, SANA KURA PANI YAADGAR HUNCHA. <span>♡</span></div>
      <section className={styles.section} id="memories"><div className={styles.sectionTop}><div><p className={styles.label}>01 / THE SCRAPBOOK</p><h2>Every chapter, a little closer.</h2></div><p>Different pages. The same favourite person.</p></div>
        {chapters.map((chapter, chapterIndex) => <section className={styles.memoryChapter} key={chapter.id} id={chapter.id} data-memory-chapter>
          <header className={styles.chapterHeading}><span>CHAPTER 0{chapterIndex + 1}</span><h3>{chapter.title}</h3><p>{chapter.subtitle}</p></header>
          <div className={styles.photos}>{chapter.memories.map((memory, index) => <figure key={memory.id}><div className={styles.photoTop}><span>MEMORY / 0{index + 1}</span>{memory.date && <span>{memory.date}</span>}</div><img src={`/images/memories/memory-${memory.id}.jpg`} alt={memory.caption} loading="lazy" /><figcaption>{memory.caption} <span>♡</span></figcaption><p className={styles.photoPlace}>{memory.place}</p></figure>)}</div>
        </section>)}
      </section>
      <section className={styles.personalLetter} aria-labelledby="just-you-title">
        <p className={styles.label}>SOMETHING I WANTED YOU TO KNOW</p>
        <h2 id="just-you-title">I like the person you are<br /><em>when you’re just being you.</em></h2>
        <div><p>The you who laughs before finishing a story. The you in an ordinary photo. The you who has a lot to say, and the you who needs a quiet minute.</p><p>Timile malai impress garna kei extra garnu pardaina. I want to keep learning the little things about you: what made you smile today, what’s on your mind, what you’re looking forward to.</p><p>I made this because sometimes “I’m thinking of you” deserves a little more space than a text message.</p><span>And today, Enzey, I’m thinking of you. ♡</span></div>
      </section>
      <section className={styles.jarSection}><div><p className={styles.label}>02 / A POCKETFUL OF GOOD THINGS</p><h2>Things I think,<br />but should say more.</h2><p>Sabai kura thulo awaj ma bhanna aaudaina.<br />So I wrote a few of them down for you.</p></div><div className={styles.noteCard}><span className={styles.noteHeart} aria-hidden="true">♡</span><p aria-live="polite">{note < 0 ? "I have a little confession…" : notes[note]}</p><button className={styles.button} onClick={() => setNote((note + 1) % notes.length)}>{note < 0 ? "Tell me ♡" : "Another little confession"} ↗</button><small>{note < 0 ? "A tiny surprise. No occasion needed." : `${note + 1} of ${notes.length} little reminders`}</small></div></section>
      <section className={styles.section} id="letters" data-memory-chapter><p className={styles.label}>03 / SEALED WITH A LITTLE LOVE</p><h2>Open when...</h2><p className={styles.subtitle}>For the days I wish I could hand you a letter in person.</p><div className={styles.letters}>{letters.map((letter, index) => <div className={styles.envelope} data-open={selected === index} key={letter.title}><span className={styles.seal} aria-hidden="true">{letter.symbol}</span><h3>{letter.title}</h3><button aria-expanded={selected === index} aria-controls={`letter-${index}`} onClick={() => setSelected(selected === index ? null : index)}>{selected === index ? "Fold it back ↑" : "A letter for you ↗"}</button><p id={`letter-${index}`} hidden={selected !== index}>{letter.text}</p></div>)}</div></section>
      <section className={styles.adventures} id="next-chapter" data-memory-chapter><div><p className={styles.label}>04 / OUR NEXT CHAPTER</p><h2>More of this.<br />More with you.</h2><p>No grand plans needed. Just more time together.<br />Pick something you’d like us to do next.</p></div><div className={styles.wishlist}>{adventures.map((wish, index) => <button key={wish} aria-pressed={wishes.includes(index)} onClick={() => setWishes(wishes.includes(index) ? wishes.filter(item => item !== index) : [...wishes, index])}><span>{wishes.includes(index) ? "♥" : "○"}</span>{wish}<span>↗</span></button>)}<small>Your picks are just for this visit. We can make the plans together.</small></div></section>
      <footer className={styles.footer}><p className={styles.label}>A LOVE NOTE, WITHOUT AN ENDING</p><h2>I’d like more days<br /><em>with you in them.</em></h2><p>More walks that take longer than planned. More photos where one of us isn’t ready. More conversations we don’t want to end. Timi sanga, ajhai dherai sana moments banaunu cha.</p><span>With love, for Enzey ♡</span><a href="/">Back to the original page ↗</a></footer>
    </main>
  );
}
