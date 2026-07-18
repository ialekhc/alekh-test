# vinext-starter

A clean full-stack starter running on
[vinext](https://github.com/cloudflare/vinext), with optional Cloudflare D1 and
Drizzle support.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
Build a deeply cute, romantic, heart-touching, and emotionally memorable single-page website that I can send to my girlfriend to ask her out on a date.

The website should feel personal, soft, magical, and intimate — not like a generic Valentine template.

The most important priority is MOBILE-FIRST RESPONSIVE DESIGN because she will most likely open it on her phone.

Tech stack:

* Next.js or React
* TypeScript
* Tailwind CSS
* Framer Motion for smooth animations
* No backend required
* Easy to deploy on Vercel

Overall visual style:

* Cute, romantic, dreamy, and elegant
* Soft pink, blush, rose, cream, peach, and warm white palette
* Subtle gradients
* Floating hearts, sparkles, glowing particles, and soft background animations
* Beautiful handwritten-style font for romantic headings, paired with a clean readable font for body text
* Rounded cards
* Glassmorphism where appropriate
* Soft shadows and glow effects
* Gentle transitions
* Avoid anything overly flashy, childish, or cluttered

The emotional experience should feel like:
"Someone made this with love, just for me."

MOBILE RESPONSIVENESS REQUIREMENTS:

* Design mobile-first
* Perfectly responsive from 320px width and above
* No horizontal scrolling
* No overflowing elements
* Large touch-friendly buttons
* Comfortable spacing for small screens
* Text should scale naturally between mobile, tablet, and desktop
* Buttons should never overlap
* Animated elements must remain inside the viewport
* The moving "No" button must never escape off-screen
* Maintain beautiful proportions on iPhone and Android screen sizes
* Use responsive typography with clamp() or Tailwind responsive classes
* Respect safe areas on modern mobile devices
* Keep animations smooth and lightweight on mobile
* Respect prefers-reduced-motion for accessibility

Create the website as an emotional story that unfolds step by step.

SECTION 1 — OPENING SCREEN

Create a full-screen romantic opening screen.

Show a small animated heart icon first.

Then slowly reveal:

"Hey [Her Name] ❤️"

Below it:

"I made something just for you..."

Then:

"Because sometimes, words feel more special when they come from the heart."

Add a beautiful button:

"Open my heart 💌"

When clicked, smoothly transition to the next section.

Use soft floating hearts and subtle sparkles in the background.

SECTION 2 — HEARTFELT MESSAGE

Show a beautiful card containing a personal message:

"You know, some of my favorite moments are the simple ones I get to share with you.

Your smile makes ordinary days feel special, your presence makes everything feel lighter, and somehow, being around you always feels like exactly where I want to be.

So today, I have one little question for you..."

Animate each paragraph gently as it appears.

Add a button:

"What's the question? 🥺❤️"

SECTION 3 — THE BIG QUESTION

Create a visually beautiful romantic reveal.

Display:

"So..."

Then, in large elegant typography:

"Will you go on a date with me? 🌹❤️"

Below it, add:

"Just you, me, good food, lots of smiles, and a little memory we'll keep forever."

Add two buttons:

"YES, I'd love to! ❤️"

and

"No 🙈"

The YES button should feel warm, glowing, and inviting.

For the No button:

* Make it move playfully when hovered, touched, or clicked
* Keep it strictly inside its parent container
* It must always remain visible on mobile screens
* After each attempt, change the text playfully

Examples:
"Are you sure? 🥺"
"Really? 😭"
"My heart just broke a little 💔"
"Think again, beautiful 😂"
"Wrong answer detected 😌"
"One more chance? ❤️"

After several attempts, stop moving the button and make it clickable so the interaction remains respectful and user-friendly.

If she finally clicks No, show a sweet response like:

"That's okay ❤️ Your smile still means the world to me."

Do not shame or pressure her.

SECTION 4 — YES CELEBRATION

When she clicks YES, create a magical transition.

Trigger:

* Soft heart confetti
* Floating hearts
* Sparkles
* Gentle celebratory animation

Display:

"YAYYYYY! ❤️🥹"

Then:

"You just made me the happiest person."

Then:

"I promise I'll make our date worth every smile."

Add:

"Now let me show you the plan... ✨"

Include a button:

"See our date 💕"

SECTION 5 — DATE PLAN

Create a beautiful romantic date card.

Use editable values from a single config file.

Display:

"Our Date ❤️"

Date:
[Insert Date]

Time:
[Insert Time]

Place:
[Insert Location]

Plan:
[Insert Date Plan]

Dress Code:
"Come exactly as you are — your smile is enough. ❤️"

Add a small romantic note:

"No pressure. No complicated plans.
Just us, spending time together and making another beautiful memory."

SECTION 6 — OUR LITTLE MEMORIES

Create an optional section called:

"A Few Reasons You Make Me Smile ❤️"

Add 3–6 responsive photo cards with placeholder images.

Each image can have a short caption such as:

"One of my favorite smiles."
"A moment I never want to forget."
"Proof that life is better with you."
"My favorite person."
"More memories waiting to happen..."

Use a responsive grid:

* 1 column on small mobile screens
* 2 columns on tablets
* 3 columns on desktop

Add smooth hover effects on desktop and tap-friendly interactions on mobile.

Make it very easy for me to replace these placeholder images later.

SECTION 7 — FINAL MESSAGE

End the website with a heart-touching message:

"I don't know exactly what the future holds.

But I do know that the moments I spend with you are the ones I always want more of.

So here's to one more date,
one more laugh,
one more beautiful memory with you. ❤️"

Then display:

"Can't wait to see you, [Her Name]."

"With love,
[My Name] ❤️"

Add a final subtle animated heart.

PERSONALIZATION

Create a single config object or config.ts file containing:

const dateConfig = {
herName: "[Her Name]",
myName: "[My Name]",
date: "[Date]",
time: "[Time]",
location: "[Location]",
plan: "[Dinner / Coffee / Movie / Surprise]",
romanticMessage: "[Optional custom personal message]",
};

All personalized text should use values from this config where possible.

COMPONENT STRUCTURE

Use clean reusable components such as:

* OpeningScreen
* HeartfeltMessage
* DateQuestion
* YesCelebration
* DatePlan
* MemoriesGallery
* FinalMessage
* FloatingHearts
* HeartConfetti

UI/UX REQUIREMENTS

* Smooth scrolling
* Section transitions
* Beautiful loading experience
* Mobile-first navigation flow
* No unnecessary navbar
* Focus on storytelling
* Avoid long walls of text
* Use spacing and typography to create emotional pauses
* Subtle animations only
* Maintain excellent readability
* Proper contrast
* Accessible buttons
* Semantic HTML
* Keyboard accessibility
* Touch-friendly controls
* Optimized images
* Fast loading
* Good Lighthouse performance

Add an optional soft romantic background music feature.

The music must:

* NOT autoplay automatically
* Have a small elegant play/pause button
* Default to muted/stopped
* Work properly on mobile browsers

Add a small label like:

"Play our little song 🎵"

Keep the music file as a placeholder that I can replace.

SEO / METADATA

Set:
Title: "A Little Question For You ❤️"

Description:
"Something made with love, just for you."

Use a heart emoji favicon if appropriate.

FINAL DELIVERABLE

Generate the complete working project.

After generating it:

1. Show the full project structure.
2. Create all necessary files.
3. Ensure there are no TypeScript errors.
4. Ensure the layout works correctly on mobile, tablet, and desktop.
5. Explain exactly how to run it locally.
6. Show exactly where I should change her name, my name, date, time, location, and plan.
7. Explain how to add our own photos.
8. Explain how to add our own background music.
9. Explain how to deploy it to Vercel.
10. Test the UI logic conceptually for screens around:

* 320px
* 375px
* 390px
* 430px
* 768px
* 1024px
* 1440px

The final website should feel like a small romantic digital journey.

It should make her smile first, feel emotional second, and then make the date question feel genuinely special.

Prioritize emotional storytelling, cute romantic details, polished UI/UX, and flawless mobile responsiveness above everything else.

```

This starter does not use `wrangler.jsonc`.

## Included Shape

- edit site code under `app/`
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings
- `vite.config.ts` simulates declared bindings for local development
- `db/schema.ts` starts intentionally empty
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Workspace Auth Headers

OpenAI workspace sites can read the current user's email from
`oai-authenticated-user-email`.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build the starter and verify its rendered loading skeleton
- `npm run db:generate`: generate Drizzle migrations after schema changes

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)
