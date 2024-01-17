import React, { Component } from "react";


import { Grid, Accordion } from "semantic-ui-react";
import {
  EVENT_NAME, 
  EVENT_LOCATION, 
  EVENT_LOCATION_ADDRESS,
  LINK_VOLUNTEER
} from "../constants";

const generalPanels = [
  {
    key: "what-happens-at-a-hackathon",
    title: "What happens at a hackathon?",
    content: [
      "For 24 hours, participants work together in teams of 1 to 5 people to build a project.",
      "Teams can work on hardware or software projects. There is no limit on creativity. This hackathon",
      "acts as a sort of incubator to your mini projects as it provides a focused time to work on your idea",
      "with mentors and workshops to help you along.",
      "",

      "For the project, absolutely no code can be written before or after the 24 hour window, but feel free to plan or research before hand!",
      "At the end of the event, each team will present their work and will be judged for prizes."
    ].join(" ")
  },
  {
    key: "where-is-the-hackathon",
    title: "Where is " + EVENT_NAME + " hosted?",
    content: [
      `${EVENT_NAME} will be held at ${EVENT_LOCATION} (${EVENT_LOCATION_ADDRESS}).`
    ].join(" ")
  },
  {
    key: "know-programing",
    title: "Do I need to know programming?",
    content: [
      "Not at all! The hackathon’s purpose is to create a welcoming and supportive environment to learn.",
      "The hackathon has plenty of mentors and resources to help you work on your hack. It’s the best place",
      " to try something new."
    ].join(" ")
  },
  {
    key: "organizes-hacked",
    title: "Who organizes  " + EVENT_NAME + " ?",
    content: [
      EVENT_NAME +
      " is an event by the Computer Engineering Club of the University of Alberta.",
    ].join(" ")
  },
  {
    key: "do-i-have-to-present",
    title:
      EVENT_NAME + " is a competition but do I have to compete and present?",
    content: [
      "After hacking ends, judges will ask you to demo your work. However it is not mandatory,",
      "you can opt out before presentations begin on Sunday. That being said, presenting is highly",
      "recommended as part of the hackathon experience. Still, the most important part of this hackathon",
      "is that you come out of it having tried something new."
    ].join(" ")
  }
];

const logisticsPanels = [
  {
    key: 'do-i-have-to-be-compe',
    title: 'Do I have to be in Computer Engineering/Computer Science to participate in this hackathon?',
    content: 'Not at all! Any student interested in participating, regardless of skill, faculty or school is welcome to join.'
  },
  {
    key: 'hows-wifi',
    title: 'How’s the wifi situation?',
    content: [
      'The wifi situation is very good. We recommend you download your tools before hand just to avoid any',
      'potential network slowdowns.'
    ].join(' '),
  },
  {
    key: 'what-should-i-bring',
    title: 'What should I bring?',
    content: [
      'Make sure to bring your laptop, charger and any other required tech you’ll need for your hack.',
      'You will find it helpful to bring along key items you would bring to a sleepover: pillows, blanket,',
      'toothbrush/toothpaste, deodorant, earphones, etc.'
    ].join(' '),
  },
  {
    key: 'what-shouldnt-i-bring',
    title: 'What shouldn’t I bring?',
    content: [
      'Please do not bring any drugs or alcohol. If you are not sure about bringing a certain item,',
      'please send us a message ahead of time.'
    ].join(' '),
  },
  {
    key: 'how-should-i-prepare',
    title: 'How should I prepare?',
    content: [
      'Make sure that you have a Discord account ready for the day of the event and get a team and project',
      'idea together if you can. If not, we will have time for team building on the day of the event.'
    ].join(' '),
  },
  {
    key: 'what-will-be-in-the-swag-box',
    title: 'What will be in the swag box?',
    content: [
      'We\'re planning to provide t-shirts, snacks, stickers, and maybe more swag depending on the number',
      ' of participants'
    ].join(' '),
  },
  {
    key: 'will-there-be-food',
    title: 'Will there be food?',
    content: [
      'Of course! We will provide snacks and drinks (coffee is key!) throughout the event. Dinner will be',
      'provided Saturday evening, as well as breakfast on Sunday. Please let us know if you have',
      'dietary restrictions - we’ll ensure you’re covered.'
    ].join(' '),
  },
  {
    key: 'can-i-work-remotely',
    title: 'Can I work remotely?',
    content: [
      'Absolutely! The event is fully hybrid, and can be joined through our discord. All you need is a computer you can work from and an internet connection!'
    ].join(' '),
  },
  {
    key: 'whats-the-best-group',
    title: 'What’s the best group size?',
    content: [
      'You can have an absolute max group size of 5 hackers (different from previous years!)'
    ].join(' '),
  },
];

const applicationPanels = [
  {
    key: 'where-do-i-apply',
    title: 'Where do I apply?',
    content: 'Sign ups will open in December'
  },
  {
    key: 'when-is-the-deadline',
    title: 'When is the sign up deadline?',
    content: 'Sign ups are now closed!',
  },
  {
    key: 'who-can-apply',
    title: 'Who can apply?',
    content: 'Any student (from any school), new grads of up to 1 year, and graduate students. Participants must be at least 18 years old.',
  },
  {
    key: 'are-there-any-fees',
    title: 'Is this free?',
    content: "Yeah!",
  }
  // {
  //   key: 'reimburse-travel',
  //   title: 'Will I be reimbursed travel expenses?',
  //   content: "Unfortunately, " + EVENT_NAME + " will not be reimbursing travel expenses this year.",
  // }
];

const hackingPanels = [
  {
    key: "i-dont-have-a-team",
    title: "But I don’t have a team!",
    content: [
      "There will be opportunities for willing participants to look for, make or join a team before and at the",
      "hackathon through the Discord and after opening ceremonies. If you want to hack as a team, be sure to be",
      "proactive during these opportunities! Alternatively, if you have a team and want to find an additional",
      "member, these are also opportunities for your team."
    ].join(" ")
  },
  {
    key: "i-dont-have-any-ideas",
    title: "But I don’t have any ideas!",
    content: [
      "Don’t let this deter you from participating! There is a lot of time and inspiration at the event!",
      "A good recommendation for coming up with ideas is to think about annoyances in your everyday life",
      "that you could potentially solve. Talk to your friends and family to help you!"
    ].join(" ")
  },
  // {
  //   key: "any-available-resources",
  //   title: "Any available resources?",
  //   content: [
  //     "We are still determining what hardware resources we can get. Feel free to bring your own hardware",
  //     "resources such as monitors, Arduino boards, etc. We hope you can get all the tools necessary to",
  //     "complete your hack!"
  //   ].join(" ")
  // },
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
        Of course! All help is throughly appreciated. Reach out to us at at
        hacked@compeclub.com for more information. 
        
        {/* {" "} */}
      </span>
      // ,<u>
      //   <a
      //     key="volunteer-link"
      //     className="text-light"
      //     href={LINK_VOLUNTEER}
      //   >
      //     this form.
      // </a>
      // </u>
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
            <h1 style={{ textAlign: "center", color: "#FFFFFF", paddingTop: '20px', fontFamily: 'Open Sans'}}>FAQ</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h2 style={{ textAlign: "center", color: "#FFFFFF", paddingTop: '20px', fontFamily: 'Open Sans'}}>General</h2>
            <Accordion
              style={{ color: "#f2f2f2",fontFamily: 'Open Sans' }}
              panels={generalPanels}
              exclusive={false}
              inverted
              fluid
            />

            <h2 style={{ textAlign: "center", color: "#FFFFFF", paddingTop: '20px',fontFamily: 'Open Sans'}}>Logistics</h2>
            <Accordion
              style={{ color: "#f2f2f2",fontFamily: 'Open Sans' }}
              panels={logisticsPanels}
              exclusive={false}
              inverted
              fluid
            />
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column>
            <h2 style={{ textAlign: "center", color: "#FFFFFF", paddingTop: '20px',fontFamily: 'Open Sans'}}>
              Sign up
            </h2>
            <Accordion
              style={{ color: "#f2f2f2",fontFamily: 'Open Sans' }}
              panels={applicationPanels}
              exclusive={false}
              inverted
              fluid
            />

            <h2 style={{ textAlign: "center", color: "#FFFFFF", paddingTop: '20px',fontFamily: 'Open Sans'}}>Hacking</h2>
            <Accordion
              style={{ color: "#f2f2f2",fontFamily: 'Open Sans' }}
              panels={hackingPanels}
              exclusive={false}
              inverted
              fluid
            />

            <h2 style={{ textAlign: "center", color: "#FFFFFF", paddingTop: '20px',fontFamily: 'Open Sans'}}>Help!</h2>
            <Accordion
              style={{ color: "#f2f2f2",fontFamily: 'Open Sans' }}
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
