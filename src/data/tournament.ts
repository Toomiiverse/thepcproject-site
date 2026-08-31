/**
 * The tournament the Gaming Lounge page is currently advertising.
 *
 * ── To announce one ──────────────────────────────────────────────────
 * Fill in the object below and push. The page picks it up on the next
 * build, which happens automatically.
 *
 * ── When one finishes ────────────────────────────────────────────────
 * Set `currentTournament = null`. The page then says the next one is to
 * be announced, which is true and reads better than last month's poster
 * left up on the wall.
 *
 * Nothing here works out the date for itself on purpose. The site is
 * built once and served as files, so a "show it if it is this month"
 * rule would keep showing an old tournament until somebody happened to
 * push something else — which is exactly the day you would not want it
 * lying. One field, changed deliberately.
 */
export interface Prize {
  /** "1st", "2nd", "Best dressed" — whatever the placing is called. */
  place: string;
  reward: string;
}

export interface Tournament {
  /** "October 2026" — the month it belongs to, as it should read. */
  month: string;
  /** The game or format. "Rocket League 2v2". */
  title: string;
  /** "Saturday 18 October, 6pm" */
  when: string;
  /** "Double elimination, 16 teams" */
  format: string;
  /** "$10 per player" or "Free entry". */
  entry: string;
  /** A sentence for anyone who has not been before. */
  blurb?: string;
  prizes: Prize[];
  /** Where to sign up, if it is not just walking in. */
  signUpUrl?: string;
}

export const currentTournament: Tournament | null = {
  month: "October 2026",
  title: "Rocket League 2v2",
  when: "Saturday 18 October, 6pm",
  format: "Double elimination, 16 teams",
  entry: "$10 per player",
  blurb:
    "Turn up with a partner or find one on the night. Rigs, peripherals and seats are provided — bring nothing but yourself.",
  prizes: [
    { place: "1st", reward: "$200 store credit each, plus the trophy for the month" },
    { place: "2nd", reward: "$75 store credit each" },
    { place: "3rd", reward: "$25 store credit each" },
  ],
};
