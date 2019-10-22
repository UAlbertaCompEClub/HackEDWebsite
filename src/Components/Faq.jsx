import React, { Component } from "react";

import { Grid, Accordion } from "semantic-ui-react";
import {
  EVENT_NAME,
  EVENT_LOCATION,
  EVENT_LOCATION_ADDRESS
} from "../constants";

const generalPanels = [
  {
    key: "what-happens-at-a-hackathon",
    title: "What happens at a hackathon?",
    content: [
      "For 24 hours, participants work together in teams of 1 to 5 people to build a project.",
      "Teams can work on hardware or software projects. There is no limit on creativity. This hackathon",
      "acts as a sort of incubator to your mini projects as it provides a focused time to work on your idea",
      "with mentors and workshops to help you along."
    ].join(" ")
  },
  {
    key: "where-is-the-hackathon",
    title: "Where is " + EVENT_NAME + "hosted??",
    content: [
      `${EVENT_NAME} will be held at ${EVENT_LOCATION} (${EVENT_LOCATION_ADDRESS}).`
    ].join(" ")
  },
  {
    key: "know-programing",
    title: "Do I need to know programming?",
    content: [
      "Not at all! The hackathon’s purpose is to create a welcoming and supportive environment to learn.",
      "This hackathon is specifically made for beginner hackers who have participated in no more than one prior hackathon. The hackathon has plenty of mentors and",
      "resources to help you work on your hack. It’s the best place to try something new."
    ].join(" ")
  },
  {
    key: "organizes-hacked",
    title: "Who organizes  " + EVENT_NAME + " ?",
    content: [
      EVENT_NAME +
        " is an event by the Computer Engineering Club of the University of Alberta!",
      "This will be the fourth time running this event and the ninth hackathon organized overall."
    ].join(" ")
  },
  {
    key: "do-i-have-to-present",
    title:
      EVENT_NAME + " is a competition but do I have to compete and present?",
    content: [
      "After hacking ends, judges will ask you to demo your work. However it is not mandatory,",
      "You can opt out before presentations begin on Sunday. That being said, presenting is highly",
      "recommended as part of the hackathon experience. Still, the most important part of this hackathon",
      "is that you come out of it having tried something new."
    ].join(" ")
  }
];

const logisticsPanels = [
  {
    key: "do-i-have-to-be-compe",
    title:
      "Do I have to be in Computer Engineering/Computer Science to participate in this hackathon?",
    content:
      "Not at all! Any student interested in participating, regardless of skill, faculty or school is welcome to join."
  },
  {
    key: "hows-wifi",
    title: "How’s the wifi situation?",
    content: [
      "The wifi situation is very good. We recommend you download your tools before hand just to avoid any",
      "potential network slowdowns."
    ].join(" ")
  },
  {
    key: "what-should-i-bring",
    title: "What should I bring?",
    content: [
      "Make sure to bring your laptop, charger and any other required tech you’ll need for your hack.",
      "You will find it helpful to bring along key items you would bring to a sleepover: pillows, blanket,",
      "toothbrush/toothpaste, deodorant, earphones, etc."
    ].join(" ")
  },
  {
    key: "what-shouldnt-i-bring",
    title: "What shouldn’t I bring?",
    content: [
      "Please do not bring any drugs or alcohol. If you are not sure about bringing a certain item,",
      "please send us a message ahead of time."
    ].join(" ")
  },
  {
    key: "will-there-be-food",
    title: "Will there be food?",
    content: [
      "Of course! We will provide snacks and drinks (coffee is key!) throughout the event. Dinner will be",
      "provided saturday evening, as well as breakfast and lunch on Sunday. Please let us know if you have",
      "dietary restrictions - we’ll ensure you’re covered."
    ].join(" ")
  },
  {
    key: "will-there-be-prizes",
    title: "Will there be prizes?",
    content: [
      "Yes! There will be various prizes given out from the event, including trivia prizes, prizes for winning hacks, and possibly even prizes given out by sponsors. " +
        "Just keep in mind that the prizes for winning hacks are based on teams of 4. 😉"
    ].join(" ")
  },
  {
    key: "can-i-work-remotely",
    title: "Can I work remotely?",
    content: [
      "Each team is allowed to have one remote participant contingent that the team has another team member physically present at the event."
    ].join(" ")
  },
  {
    key: "whats-the-best-group",
    title: "What’s the best group size?",
    content: [
      "You can have a max group size of 5, but we recommend 4 hackers, as the prizes are based on a team of 4."
    ].join(" ")
  }
];

const applicationPanels = [
  {
    key: "where-do-i-apply",
    title: "Where do I apply?",
    content:
      "You can use the section down below or follow this link (Coming Soon) to purchase tickets."
  },
  {
    key: "how-much-is-the-event",
    title: "How much is the event?",
    content: "The price of HackEd Beta is currently being determined."
  },
  {
    key: "when-is-the-deadline",
    title: "When is the application deadline?",
    content: "TBD"
  },
  {
    key: "who-can-apply",
    title: "Who can apply?",
    content: `To make this specifically a beginner targeted event,
        we allow any student who is in highschool or in their first or second year of university, 
        and has participated in no more than one previous hackathon. Rarely, exceptions can be made if students
        are in their third year of study so long as they have not attended more than one previous hackathon.
        Contact hacked@compeclub.com for any questions regarding this.`
  },
  {
    key: "are-there-any-fees",
    title: "How much is the event?",
    content:
      "The event price is provided in the Eventbrite section below. This price is heavily subsidized thanks to our sponsors"
  },
  {
    key: "reimburse-travel",
    title: "Will I be reimbursed travel expenses?",
    content:
      "Unfortunately, " +
      EVENT_NAME +
      " will not be reimbursing travel expenses this year."
  }
];

const hackingPanels = [
  {
    key: "i-dont-have-a-team",
    title: "But I don’t have a team!",
    content: [
      "There will be opportunities for willing participants to look for, make or join a team before and at the",
      "hackathon through the Slack and after opening ceremonies. If you want to hack as a team, be sure to be",
      "proactive during these opportunities! Alternatively, if you have a team and want to find an additional",
      "member, these are also opportunities for your team."
    ].join(" ")
  },
  {
    key: "i-dont-have-any-ideas",
    title: "But I don’t have any ideas!",
    content: [
      "Don’t let this detract you from participating! There is a lot of time and inspiration at the event!",
      "A good recommendation for coming up with ideas is to think about annoyances in your everyday life",
      "that you could potentially solve. Talk to your friends and family to help you!"
    ].join(" ")
  },
  {
    key: "any-available-resources",
    title: "Any available resources?",
    content: [
      "We are still determining what hardware resources we can get. Feel free to bring your own hardware",
      "resources such as monitors, Arduino boards, etc. We hope you can get all the tools necessary to",
      "complete your hack!"
    ].join(" ")
  },
  {
    key: "judging-work",
    title: "How will judging work?",
    content: [
      "Judging will be done by hand picked Judges from industry. The criteria will be released closer",
      "to event."
    ].join(" ")
  }
];

const helpPanels = [
  {
    key: "can-i-volunteer",
    title: "Can I volunteer instead?",
    content: [
      <span key="volunteer-text">
        'Of course! All help is throughly appreciated. Reach out to us at at
        hacked@compeclub.com or fill out{" "}
      </span>,
      <a
        key="volunteer-link"
        className="whiteLink"
        href="https://docs.google.com/forms/d/e/1FAIpQLSe07E5OUYiw41SzKsHdtTOeY6YdTFQCxB6MA58Us58X4-JEJA/viewform?usp=sf_link"
      >
        this form.
      </a>
    ]
  },
  {
    key: "how-can-i-sponsor-this",
    title: "How can I sponsor this?",
    content: [
      "If you and your company are interested in getting your APIs in hackers hand’s, face-to-face",
      "mentorship with students and general outreach with swag, prizes and/or traditional sponsorship,",
      "please reach out to us at hacked@compeclub.com and we can work out how " +
        EVENT_NAME +
        " can benefit you!"
    ].join(" ")
  },
  {
    key: "ive-got-another-question",
    title: "I’ve got another question...",
    content: [
      "Please reach out to us at hacked@compeclub.com! We’re always willing to answer your needs :)",
      "We hope to help you be the best hacker you can be."
    ].join(" ")
  }
];

class Faq extends Component {
  render() {
    return (
      <Grid
        id="FAQ"
        style={{
          margin: 0,
          paddingBottom: 40
        }}
        className="bg-primary"
        columns={3}
        stackable
        relaxed="very"
        centered
      >
        <Grid.Row>
          <Grid.Column>
            <h1 style={{ textAlign: "center", color: "#FFFFFF" }}>FAQ</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h2 style={{ textAlign: "center", color: "#FFFFFF" }}>General</h2>
            <Accordion
              style={{ color: "#f2f2f2" }}
              panels={generalPanels}
              exclusive={false}
              inverted
              fluid
            />

            <h2 style={{ textAlign: "center", color: "#FFFFFF" }}>Logistics</h2>
            <Accordion
              style={{ color: "#f2f2f2" }}
              panels={logisticsPanels}
              exclusive={false}
              inverted
              fluid
            />
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column>
            <h2 style={{ textAlign: "center", color: "#FFFFFF" }}>
              Application
            </h2>
            <Accordion
              style={{ color: "#f2f2f2" }}
              panels={applicationPanels}
              exclusive={false}
              inverted
              fluid
            />

            <h2 style={{ textAlign: "center", color: "#FFFFFF" }}>Hacking</h2>
            <Accordion
              style={{ color: "#f2f2f2" }}
              panels={hackingPanels}
              exclusive={false}
              inverted
              fluid
            />

            <h2 style={{ textAlign: "center", color: "#FFFFFF" }}>Help!</h2>
            <Accordion
              style={{ color: "#f2f2f2" }}
              panels={helpPanels}
              exclusive={false}
              inverted
              fluid
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Faq;
