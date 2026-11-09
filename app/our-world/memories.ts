// Add the real month/year for each photo here, e.g. "March 2025".
// Leave a date empty until it is known; the page never invents memory dates.
export const memories = [
  { id: "01", caption: "Us, being us.", date: "", place: "A little adventure together" },
  { id: "03", caption: "My favourite person in the frame.", date: "", place: "Right where I want to be" },
  { id: "09", caption: "The little moments stay.", date: "", place: "Another favourite with you" },
];

// Chapters group memories by theme; they do not imply unconfirmed dates.
export const chapters = [
  {
    id: "little-escapes", title: "Our little escapes", subtitle: "A little further from everything. A little closer to you.",
    memories: [memories[0],
      { id: "04", caption: "Just us and the long way home.", date: "", place: "A walk worth keeping" },
      { id: "06", caption: "Some days deserve a page of their own.", date: "", place: "Out in the world, together" }],
  },
  {
    id: "everyday-us", title: "Everyday us", subtitle: "The unplanned photos. The familiar smiles. My favourite kind of days.",
    memories: [memories[1], memories[2],
      { id: "07", caption: "Nothing fancy. Everything I love.", date: "", place: "Little things, big feelings" }],
  },
];
