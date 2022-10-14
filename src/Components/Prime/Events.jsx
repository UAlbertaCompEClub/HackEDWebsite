import { EVENT_START_TIME, EVENT_END_TIME } from "../../constants";

export const primeEventItems = [
  {
    fullDate: "January 14, 2022 (Friday)",
  },
  {
    title: "Team Mingling",
    date: "Saturday 6:00pm - 7:50pm",
    icon: "handshake",
    description:
      "Meet other people who need a team, and have a quick chat before you commit!",
  },
  {
    fullDate: EVENT_START_TIME.format("MMMM Do, YYYY (dddd)"),
  },
  {
    title: "Opening Ceremonies",
    date: "Saturday 12:00pm",
    icon: "star",
  },
  {
    title: "Hacking Begins",
    date: "Saturday 1:00pm",
    icon: "hourglass start",
  },
  {
    title: "Workshop: Intro to Git",
    date: "Saturday 1:00pm - 1:50pm",
    icon: "pencil alternate",
    description: "Highly recommended for anyone who doesn't know git.",
  },
  {
    title: "Workshop: Intuit React Workshop",
    date: "Saturday 2:00pm - 2:50pm",
    icon: "pencil alternate",
    description:
      "Learn the basics of React, one of the most popular frontend frameworks. Intuit is known for their world class web apps, and they're here to show you the ropes!",
  },
  {
    title: "Sponsor Booth Event",
    date: "Saturday 3:00pm - 4:50pm",
    icon: "suitcase",
    description:
      'Meet and mingle with our sponsors, and chat about career and software stuff! Hosted in virtual "Wonder.me" room.',
  },
  {
    title: "Workshop: Servus Credit Union Business Requirements",
    date: "Saturday 6:00pm - 6:50pm",
    icon: "pencil alternate",
    description:
      "Learn the five steps to kickstart any project, and some career skills while you're there, from the experts at Servus Credit Union.",
  },
  {
    title: "Workshop: ISAIC Julia",
    date: "Saturday 7:00pm - 7:50pm",
    icon: "pencil alternate",
    description:
      "Julia is a high level language with a lot of speed under the hood, and machine learning engineers love it. Learn from the ML experts at ISAIC how to use this powerful language.",
  },

  {
    fullDate: EVENT_END_TIME.format("MMMM Do, YYYY (dddd)"),
  },
  {
    title: "Workshop: Tech Interview Prep Workshop!",
    date: "Sunday 8:00am - 8:50am",
    icon: "pencil alternate",
    description:
      "Technical interviews can seem intimidating, but they don't have to be! Learn the skills you need to ace your interview with style from industry experts.",
  },
  {
    title: "Bob Ross MS Paint Night",
    date: "Sunday 10:00am - 10:50am",
    icon: "paint brush",
    description:
      "Bring out your inner artist as we all work together to draw one big picture!",
  },
  {
    title: "Submissions Due on DevPost",
    date: "Sunday 11:00am",
    icon: "exclamation triangle",
    description: "Hacking hasn't ended yet!",
  },
  {
    title: "Hacking Ends",
    date: "Sunday 1:00pm",
    icon: "hourglass end",
  },
  {
    title: "Judging Begins",
    date: "Sunday 1:00pm",
    icon: "winner",
  },
  {
    title: "Judging Ends",
    date: "Sunday 6:30pm",
    icon: "winner",
  },
  {
    title: "Closing Ceremony",
    date: "Sunday 7:00pm",
    icon: "star",
  },
];
