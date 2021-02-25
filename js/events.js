var HTMLEventSubheading = '<h2 class="col-md-12" style="text-align: center;">%data%</h2><br/>';

// HTML for events on index.html
var HTMLIndexEventStart = '<div class="col-md-4 event-container"><div class="event-border-container"><div class="event-offset-border"></div></div><div class="event"><a href="%data%" target="_blank">';
var HTMLIndexEventPhoto = '<div class="event-photo" style="background-image:url(%data%);"></div>';

// HTML for upcoming events
var HTMLUpcomingEventTitle = '<h2 class="eventp-title">%data%</h2>';
var HTMLUpcomingEventStart = '<div class="col-md-4 eventp-upcoming-container"><div class="eventp-border-container"><div class="eventp-offset-border-upcoming"></div></div><div class="eventp-upcoming"><a href="%data%" target="_blank">';
var HTMLUpcomingEventPhoto = '<div class="event-photo-upcoming" style="background-image:url(%data%);"></div>';
var HTMLEventDescriptionContainer = '<div class="eventp-description-container">';

// HTML for all events on event page
var HTMLEventTime = '<h6 class="eventp-time">%data%</h6>';
var HTMLEventDescription = '<h6 class="eventp-description">%data%</h6><br>';
var HTMLClosingDiv = '</div>';
var HTMLClosingLink = '</a>';

var mostRecentEvents = [];

var events = {
  upcomingevents: [
    ],
  pastevents: [
    {
      title: 'Step into STEM Engineering Workshop',
      date: 'February 6 2021',
      time: '2:00pm-5:00pm',
      location: '',
      description: 'Attendees can join our Intro to Clustering for Image Analysis hosted by UW Data Science Club on Feb 7th @ 2-5PM EST using the zoom link in our bio!! 😁',
      link: '',
      image: addEventImagePath("SiSEngineeringWorkshop.png")
    },
    {
      title: 'Step into STEM Science Workshop',
      date: 'January 30 2021',
      time: '2:00pm-5:00pm',
      location: 'Zoom',
      description: `WiSTEM is excited to introduce an amazing guest speaker for the Stem Into STEM Science workshop Dr. Nardine Nakhla, from UW school of Pharmacy!! 👩‍🔬🧫⠀Attendees can join our gel electrophoresis simulation event.`,
      link: '',
      image: addEventImagePath("StepintoSTEM-Science.png")
    },
    {
      title: 'Resume Critique',
      date: 'January 19 2021',
      time: '6:00pm-7:00pm',
      location: '',
      description: 'In this Resume & Roast style workshop, you will get the chance to learn the do’s and don’ts of resume writing, network and share some laughs. The IBM recruitment team will poke fun at resumes while providing some valuable feedback to help get you into tip top shape!',
      link: 'https://www.facebook.com/events/229819568642983/',
      image: addEventImagePath("ibmworkshop.png")
    },
    {
      title: 'End of Term - Among Us',
      date: 'December 8 2020',
      time: '8:00pm-9:00pm',
      location: '',
      description: 'Join us for a game of Among Us to destress from a busy term! Our Among Us Discord server will be available on Dec. 7th on our Facebook. To win 1 of 3 gift cards, make sure to register for an account and keep an eye out for updates!',
      link: 'https://www.facebook.com/events/423002768892115',
      image: addEventImagePath("eot_among_us.png")
    },
    {
      title: 'IBM x WiSTEM: Artificial Intelligence 101',
      date: 'November 25 2020',
      time: '6:00pm-7:30pm',
      location: '',
      description: 'Come out to lear all the basics of AI and even build your own neural network. IBM\'s Data and Analytics team will be discussing the A to Z’s of AI, along with answering YOUR AI-related questions!',
      link: 'https://www.facebook.com/events/219327676251605',
      image: addEventImagePath("artificial_intelligence_101.png")
    },
    {
    title: 'Code Your First Game Technical Workshop',
    date: 'November 10 2020',
    time: '7:00pm-8:30pm',
    location: '',
    description: 'Interested in coding? Ever wanted to create your own game? Come to our Technical Workshop where you’ll learn how to create your own game with Python. No programming experience necessary!',
    link: 'https://bit.ly/2TRSEkn',
    image: addEventImagePath("technical_workshop.png")
  },
  {
    title: 'WiSTEM x Intuit: Networking & Careers Panel Workshop',
    date: 'October 29 2020',
    time: '5:30pm-7:00pm',
    location: '',
    description: 'WiSTEM is collaborating with Intuit Canada to provide you a 3-part networking workshop! Join us on October 29th from 5:30-7PM EST, to learn how to network, write cold emails, reach out to employers, and foster new connections!',
    link: 'https://www.facebook.com/UWWiSTEM/posts/1440389426161544',
    image: addEventImagePath("intuit_event.png")
  },
  {
    title: 'WiSTEM x WiCS: Co-op Bootcamp',
    date: 'October 19 2020',
    time: '5:30pm',
    location: '',
    description: 'WiSTEM has teamed up with WiCS to bring you this awesome workshop which will consist of resume critiques, mock interviews, and the chance to engage in helpful discussions from experienced panelists. Register now!',
    link: 'https://bit.ly/2GZlb4t',
    image: addEventImagePath("co-op_bootcamp.png")
  },
  {
    title: 'STEM Trivia Night',
    date: 'October 8 2020',
    time: '8:00pm-9:00pm',
    location: '',
    description: 'Join us for a fun-filled night where you can de-stress, meet new people, and have a chance to win prizes. Sign up now!',
    link: 'https://bit.ly/3imaQfY',
    image: addEventImagePath("trivia_night_f20.png")
  },
    {
      title: 'WiSTEM x Amex: Career Success in the Digital Age',
      date: 'September 30 2020',
      time: '12:00pm-1:00pm',
      location: '',
      description: 'This panel event will feature professionals from Amex Canada’s Women in Technology network who will dive in to building a successful career in this new virtual world! Registration closes Monday, September 29, 3pm.',
      link: 'https://www.facebook.com/events/616636495881584/',
      image: addEventImagePath("amex_event.png")
    },
    {
    title: 'Mentorship',
    date: 'Fall 2020',
    time: '',
    location: '',
    description:
      'WiSTEM\'s mentorship program focuses on connecting first-year students with upper-years to get helpful uni advice, connection tips and more, guiding students to successfully manage this virtual term!',
    link: 'http://uwwistem.com/mentorship',
    image: addEventImagePath("mentorship.png")
  },
    {
      title: 'Yext Info Session',
      date: 'September 21 2020',
      time: '7:00pm-8:00pm',
      location: '',
      description:
        'Learn more about Yext - a New York-based tech company focused on helping organizations to grow and deliver official answers everywhere people search.',
      link: 'https://www.facebook.com/UWWiSTEM/posts/1409212739279213',
      image: addEventImagePath("yext_info_session.png")
    },
    {
      title: 'Mock Interview',
      date: 'Starting from May 29',
      time: '',
      location: '',
      description:
        'WiSTEM is hosing mock interviews starting from May 29! Check out the registration form here: https://forms.gle/1cwdgzQRPYkf4FbT9',
      link: 'https://forms.gle/1cwdgzQRPYkf4FbT9',
      image: addEventImagePath("mock_interview.jpeg")
    },
    {
      title: 'Coding Workshop',
      date: 'July 14 2020',
      time: '7:00pm - 9:00pm',
      location: '',
      description:
        'Join WiSTEM’s Coding Workshop on July 14th! We’ll showing showing you the tips and tricks on how to build a website using HTML + CSS!',
      link: 'https://www.facebook.com/events/917064908791146/',
      image: addEventImagePath("web-workshop.png")
    },
    {
      title: 'Trivia Night',
      date: 'June 17 2020',
      time: '8:30pm - 10:00pm',
      location: '',
      description:
        'Put your thinking caps on and be prepared to answer fun questions about general STEM facts for a chance to win a Skip the Dishes gift card!',
      link: 'https://www.facebook.com/events/1258794867660345/',
      image: addEventImagePath("trivia_night.jpeg")
    },
    {
      title: 'Instagram Takeover',
      date: 'April 2020',
      time: '',
      location: '',
      description:
        'Checkout our Instagram account @uwwistem! Gain insight regarding STEM occupations and dive deep into the STEM industry!',
      link: 'https://www.instagram.com/uwwistem/',
      image: addEventImagePath("ins-takeover.jpg")
    },
    {
      title: 'CANCELLED - WiSTEM x Konrad: Design Thinking Workshop',
      date: 'March 26 2020',
      time: '5:30pm – 6:30pm',
      location: 'TBD',
      description: 'Cancelled due to Covid-19',
      link: 'https://www.facebook.com/events/194682061836398/',
      image: addEventImagePath("konrad.png")
    },
    {
      title: 'WiCS x WiSTEM Coffee Chats',
      date: 'March 4 2020',
      time: '7:30pm – 8:30pm',
      location: 'E2 - 1732',
      description:
        'Join WiCS and WiSTEM for a casual time to network, drink some coffee and eat some good snacks while developing connections with women in STEM and CS! ',
      link: 'https://www.facebook.com/events/1600304690134428/',
      image: addEventImagePath("coffeehouse.png")
    },
    {
      title: "Valentine's Day Booth",
      date: 'Feburary 12 - 13 2020',
      time: '10:00am - 2:00pm',
      location: 'SLC Marketplace',
      description: 'Come Check out WiSTEM’s Valentine’s Booth and make your own personalized Valentine craft! ',
      link: 'https://www.facebook.com/events/2738615686233905/',
      image: addEventImagePath("val_wistem.png")
    },
    {
      title: 'Virtual Resume Critique',
      date: 'By Feb 1 2020',
      time: '',
      location: '',
      description: "Power-up your resume with WiSTEM's Virtual Resume Critique!",
      link: '',
      image: addEventImagePath("resume_critique.png")
    },
    {
      title: 'Shrink Plastic Workshop',
      date: 'March 20 2019',
      time: '6:30pm - 8:30pm',
      location: 'STC 0010',
      description:
        'Come express your creativity and de-stress at University of Waterloo WiSTEM x Crafts 4 Charity workshop on making shrink plastic key chains! ',
      link: 'https://www.facebook.com/events/2291184721149140/?notif_t=event_aggregate&notif_id=1553083191107568',
      image: addEventImagePath("shrink_plastic.png")
    },
    {
      title: 'Introduction to Python Workshop',
      date: 'Nov 28 2019',
      time: '5:30pm - 7:00pm',
      location: 'PHY 145',
      description: 'Come and learn a new programming language and enjoy FREE bubble tea!',
      link: '',
      image: addEventImagePath("pyws.png")
    },
    {
      title: 'Bake Sale',
      date: 'Nov 15 2019',
      time: '',
      location: 'SLC',
      description: 'Meet us on Friday @SLC for Bake Sale! Everything under $2!',
      link: '',
      image: addEventImagePath("bake.png")
    },
    {
      title: 'Virtual Resume Critique',
      date: 'By Nov 15 2019',
      time: '',
      location: '',
      description: "Tune up your resume with WiSTEM's Virtual Resume Critique!",
      link: '',
      image: addEventImagePath("vrc.png")
    },
    {
      title: 'Intro To Programming: Python',
      date: 'July 3 2018',
      time: '5:30pm - 7:30pm',
      location: 'STC0010',
      description:
        'Come on out for a night of pizza and learning something new for $2! Please book your spot using the Eventbrite General Admission ticket so that you can get your pizza.',
      link: 'http://www.uwwistem.ca',
      image: addEventImagePath("python-intro.png")
    },
    {
      title: 'Movie Night - The Incredibles',
      date: 'June 14 2018',
      time: '7:00pm - 9:30pm',
      location: 'MC Comfy',
      description:
        "Come watch the Incredibles in the Math building's comfy room (MC 3rd floor)! $2 entry at the door which includes unlimited popcorn & drinks*!",
      link: 'https://www.facebook.com/events/434677386943811/',
      image: addEventImagePath("movie-night.png")
    },
    {
      title: 'B.O.T Bonfire',
      date: 'May 29 2018',
      time: '7:00pm -10:00pm',
      location: 'Laurel Creek, UW',
      description:
        'WiSTEM is hosting our annual Beginning of Term bonfire! Celebrate the spring term with marshmallow roasting and hanging with friends!',
      link: 'https://www.facebook.com/events/166742827501241/',
      image: addEventImagePath("bot-bonfire.png")
    },
    {
      title: 'Intro to Programming: Python',
      date: 'Mar 29 2018',
      time: '7pm - 8:30pm',
      location: 'STC 0050',
      description:
        'WiSTEM is hosting ANOTHER INTRO TO PROGRAMMING WORKSHOP! Please get a FREE ticket through Eventbrite and to learn how to program in Python!',
      link: 'https://www.facebook.com/events/357516918083429/',
      image: addEventImagePath("intro-to-python.png")
    },
    {
      title: 'Open Mic Night',
      date: 'Mar 20 2018',
      time: '5:30pm - 9pm',
      location: 'The Bombshelter Pub',
      description:
        'Come to out to our open mic night with WiSTEM and PhysClub to share your talents with us, or to see your talented peers!',
      link: 'https://www.facebook.com/events/166791930780006/',
      image: addEventImagePath("open-mic-night.png")
    },
    {
      title: 'Dance Class with AfroFusion',
      date: 'Mar 1 2018',
      time: '6:30pm - 8pm',
      location: 'PAC Studio 2',
      description:
        'Join Women in STEM and AfroFusion Dance Club for an open level dance class. Relax, let loose, and groove with us!',
      link: 'https://www.facebook.com/events/1057866051032574/',
      image: addEventImagePath("afrofusion-dance.png")
    },
    {
      title: 'Wet Lab Techniques',
      date: 'Feb 26 2018',
      time: '7pm - 8:30pm',
      location: 'ESC 319',
      description:
        'Join WiSTEM and Velocity Science to experience hands-on wet lab techniques and equipment in the Velocity Science lab space!',
      link: 'https://www.facebook.com/events/151235939018404/',
      image: addEventImagePath("velocity-wetlab.png")
    },
    {
      title: 'Intro to Programming Workshop',
      date: 'Nov 13 2017',
      time: '7pm - 8:30pm',
      location: 'STC 0050',
      description:
        'WiSTEM is hosting ANOTHER INTRO TO PROGRAMMING WORKSHOP! 💻💻💻 NO EXPERIENCE NECESSARY. Make sure to get a ticket because spaces are limited.',
      link: 'https://www.facebook.com/events/153018705443474/',
      image: addEventImagePath("introtoprogrammingf17.jpg")
    },
    {
      title: 'Flawless: A Bomber Wednesday',
      date: 'Nov 15 2017',
      time: '9pm - 2am',
      location: 'The Bombshelter Pub',
      description:
        "Get ready for a LIT night full of your favourite female artists like Beyonce, Rihanna, and Taylor Swift. It's gonna be a boss ass night.",
      link: 'https://www.facebook.com/events/184031778837347/',
      image: addEventImagePath("bomber.png")
    },
    {
      title: 'STEMania',
      date: 'Oct 20 2017',
      time: '7pm - 8:30pm',
      location: 'MC 2065',
      description:
        "WiSTEM presents a STEM-themed Kahoot trivia night. Come for the free food, stay to compete for a prize and to prove you're the smartest person in the room",
      link: 'https://www.facebook.com/events/1180109578800080/',
      image: addEventImagePath("stemania.jpg")
    },
    {
      title: 'Synthetic Biology Panel',
      date: 'Sep 19 2017',
      time: '7pm - 8:30pm',
      location: 'STC 0050',
      description:
        'WiSTEM and UW iGEM are hosting a workshop to educate students on the emerging field of synthetic biology, and promoting inclusivity in science.',
      link: 'https://www.facebook.com/events/1442927809087495/',
      image: addEventImagePath("synbiopanel.jpg")
    },
    {
      title: 'Fight Like A Girl',
      date: 'July 12 2017',
      time: '6pm - 7pm',
      location: 'SLC Basement',
      description:
        'A continuation of our self-defense classes, WiSTEM presents this all-inclusive class to build protection skills.',
      link: 'https://www.facebook.com/events/1854937938090602/',
      image: addEventImagePath("fightlikeagirl-overlay.jpg")
    },
    {
      title: 'Spring Dance @ The Bomber',
      date: 'June 28 2017',
      time: '8pm - 2am',
      location: 'The Bomber',
      description:
        "It's a Bomber Wednesday! Ask someone to #springdancewithme and jam to throwbacks with UW WiSTEM, UW Youth Horizon, and Phys Club.",
      link: 'https://www.facebook.com/events/1134961726608926/',
      image: addEventImagePath("springdance.jpg")
    },
    {
      title: 'Beat the Heat',
      date: 'JUne 6 2017',
      time: '10am - 4pm',
      location: 'SLC',
      description:
        "WiSTEM is fundraising for Shine A Light, an organization that provides resources to refugee girls in camps who don't have an access to education.",
      link: 'https://www.facebook.com/events/1975874069365726/',
      image: addEventImagePath("beattheheat.jpg")
    },
    {
      title: 'Introduction to Programming Workshop',
      date: 'March 21 2017',
      time: '5:30pm - 7pm',
      location: 'QNC 2502',
      description:
        'Take a &lt;br&gt; and learn how to build your own website using CSS, HTML, and Git to develop fundamental technical skills.',
      link: 'https://www.facebook.com/events/388749218174389/',
      image: addEventImagePath("programworkshop.jpg")
    },
    {
      title: "Beginner's Hip Hop Class",
      date: 'March 14 2017',
      time: '7pm - 10pm',
      location: 'QNC 2502',
      description:
        "UW FemiNINE and WiSTEM together again to bring you a beginner's hip hop class to relax and have fun!",
      link: 'https://www.facebook.com/events/1461920890549672/',
      image: addEventImagePath("hiphopclass.png")
    },
    {
      title: 'Paint Your Pinky',
      date: 'February 14 2017',
      time: '10am - 4:30pm',
      location: 'MC, DC and STC',
      description:
        'Join WiSTEM and paint your pinky to bring awareness to Women in STEM by sparking discussions across campus about the inequalities in STEM.',
      link: 'https://www.facebook.com/events/1356679277722548/',
      image: addEventImagePath("paintyourpinky.jpg")
    },
    {
      title: 'The F-Word',
      date: 'Nov 30 2016',
      time: '6pm - 7pm',
      location: 'STC 0020',
      description:
        'WiSTEM is hosting a nonjudgmental discussion where we help males understand what feminism really is and why it is important.',
      link: 'https://www.facebook.com/events/1851300768416283/',
      image: addEventImagePath("fword.png")
    },
    {
      title: 'Lets Talk: Women in STEM',
      date: 'Nov 9 2016',
      time: '5:30pm - 7:30pm',
      location: 'STC 0020',
      description:
        "WiSTEM cordially invites you to join us at our Let's Talk event where we stream some inspiring and cool videos, have some food, and mingle with new friends!",
      link: 'https://www.facebook.com/events/1788746171364035/',
      image: addEventImagePath("letstalk.png")
    },
    {
      title: 'Introduction to Synthetic Biology and Gender Equity',
      date: 'Nov 19 &amp; 20 2015',
      time: '10:30AM – 11:20AM, 4:30PM – 5:20PM',
      location: 'B1 377',
      description:
        'This first workshop is intended to introduce you to the intersection of synthetic biology and gender equality/equity.',
      link: 'https://www.facebook.com/events/1657961857780510',
      image: addEventImagePath("synbio101.png")
    },
    {
      title: 'Synthetic Biology and Gender Equality 101',
      date: 'Oct 29 & 30 2015',
      time: '10:30AM – 11:20AM, 4:30PM – 5:20PM',
      location: 'B1 377',
      description:
        'This first workshop is intended to introduce you to the intersection of synthetic biology and gender equality/equity.',
      link: 'https://www.facebook.com/events/482175695319703/',
      image: addEventImagePath("synbio101.png")
    },
    {
      title: 'Wisdom from WISTEM EOT',
      date: 'Mar 25 2015',
      time: '5:30PM – 7:30PM',
      location: 'M3 3103',
      description:
        'Come out and mingle with professionals from the STEM (Science, Technology, Engineering and Mathematics) fields and gain insight on what the future holds!',
      link: 'https://www.facebook.com/events/1597170790519976/',
      image: addEventImagePath("wisdom.png")
    },
    {
      title: 'WISE National Conference UW Pre-Conference',
      date: 'Mar 6 2014',
      time: '5:30PM – 6:30PM',
      location: 'QNC 1501',
      description:
        "This pre-conference event is welcome to those who have already bought their tickets for the WISE conference and those who haven't but want to attend WISE.",
      link: 'https://www.facebook.com/events/232052803664920/',
      image: addEventImagePath("wise.png")
    },
    {
      title: "Women's Self-Defense Workshop",
      date: 'Nov 17 2013',
      time: '7PM – 9PM',
      location: 'CIF Studio',
      description:
        'This is a 2 hour workshop run by UW Karate Club instructors that teaches women basic self defense and escape tactics in situations of sexual harassment.',
      link: 'https://www.facebook.com/events/1437194003167343/',
      image: addEventImagePath("defense.png")
    },
    {
      title: 'YOU++; | WiSTEM X UW Meet',
      date: 'Nov 16 2013',
      time: '10AM – 2PM',
      location: 'QNC 1502',
      description:
        'In collaboration with UW Meet, WiSTEM cordially invites you to YOU++; a conference dedicated to upgrade both your technical and soft skills.',
      link: 'https://www.facebook.com/events/318144204991293/',
      image: addEventImagePath("you.png")
    },
    {
      title: 'End-Of-Term Dessert Celebration',
      date: 'Aug 1 2013',
      time: '11PM',
      location: 'SLC 2134',
      description:
        "It's your chance to chat with us, talk about WiSTEM's future, and enjoy some sweet treats. Please bring your favourite dessert item",
      link: 'https://www.facebook.com/events/559369607462582/',
      image: addEventImagePath("dessert.png")
    }
  ],
  display: function () {
    populateEventsOnIndex();
    initializeSubheadings();

    events.upcomingevents.forEach(function (event) {
      $('#upcomingevents').append(
        event.link +
        event.image +
        HTMLClosingLink +
        HTMLEventDescriptionContainer +
        event.title +
        event.time +
        event.description +
        HTMLClosingDiv +
        HTMLClosingDiv
      );
    });
    events.pastevents.forEach(function (event) {
      $('#pastevents').append(
        event.link +
        event.image +
        HTMLClosingLink +
        HTMLEventDescriptionContainer +
        event.title +
        event.time +
        event.description +
        HTMLClosingDiv +
        HTMLClosingDiv
      );
    });
  }
};

events.display();

function addEventImagePath(fileName) {
  return "img/events/" + fileName;
}

function initializeSubheadings(){
  if (events.upcomingevents.length > 0){
    $('#upcomingevents').append(HTMLEventSubheading.replace('%data%', 'Upcoming Events'));
  }
  if (events.pastevents.length > 0){
    $('#pastevents').append(HTMLEventSubheading.replace('%data%', 'Past Events'));
  }
}

function replaceEventsWithHTML() {
  events.pastevents.forEach(function (event) {
    event.title = HTMLUpcomingEventTitle.replace('%data%', event.title);
    event.description = HTMLEventDescription.replace('%data%', event.description);
    event.time = HTMLEventTime.replace('%data%', event.date + ' @ ' + event.time);
    event.image = HTMLUpcomingEventPhoto.replace('%data%', event.image);
    event.link = HTMLUpcomingEventStart.replace('%data%', event.link);
  });
  events.upcomingevents.forEach(function (event) {
    event.title = HTMLUpcomingEventTitle.replace('%data%', event.title);
    event.description = HTMLEventDescription.replace('%data%', event.description);
    event.time = HTMLEventTime.replace('%data%', event.date + ' @ ' + event.time);
    event.image = HTMLUpcomingEventPhoto.replace('%data%', event.image);
    event.link = HTMLUpcomingEventStart.replace('%data%', event.link);
  });
}

function replaceIndexEventsWithHTML() {
  mostRecentEvents.forEach(function (event) {
    event.image = HTMLIndexEventPhoto.replace('%data%', event.image);
    event.link = HTMLIndexEventStart.replace('%data%', event.link);
    $('#mostrecentevents').append(event.link + event.image + HTMLClosingLink+ HTMLClosingDiv);
  });
}

function populateEventsOnIndex() {
  var i = 0;
  while (i < 3 && i < events.upcomingevents.length) {
    let temp = {
      title: events.upcomingevents[i].title,
      date: events.upcomingevents[i].date,
      description: events.upcomingevents[i].description,
      link: events.upcomingevents[i].link,
      time: events.upcomingevents[i].time,
      image: events.upcomingevents[i].image,
      location: events.upcomingevents[i].location
    };
    mostRecentEvents.push(temp);
    i++;
  }
  if (mostRecentEvents.length != 3) {
    var p = 0;
    for (var j = i; j < 3; j++) {
      let temp = {
        title: events.pastevents[p].title,
        date: events.pastevents[p].date,
        description: events.pastevents[p].description,
        link: events.pastevents[p].link,
        time: events.pastevents[p].time,
        image: events.pastevents[p].image,
        location: events.pastevents[p].location
      };
      mostRecentEvents.push(temp);
      p++;
    }
  }
  replaceEventsWithHTML();
  replaceIndexEventsWithHTML();
}
