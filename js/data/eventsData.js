const eventsData = {
  upcomingevents: [
    { 
      title: "WiSTEM Summer Bingo – July Challenge",
      date: "All of July",
      time: "Due July 31st 11:59pm",
      location: "Online",
      description:
        "Get ready to make the most of your summer with our WiSTEM Bingo! 🌼 5 fun activities in a row, column, or diagonally gives you a chance to win a $50 gift card of your choice! Each extra line = another entry, so don’t hold back! 🛍️✨ Click to submit your form by July 31 @ 11:59 PM! 🌞💫",
      link: "https://forms.gle/MnF3CHkRCYjRSWWDA",
      image: addEventImagePath("bingo25.png"),

    },
  ],
  pastevents: [
    { 
      title: "General MCAT Information Session",
      date: "July 9",
      time: "6-7pm",
      location: "Online",
      description:
        "WiSTEM and The Princeton Review brings you an Info Session that’ll break it all! Learn what the MCAT is all about, how to prep effectively, and what resources are available to help you succeed.📚✨ Whether you’re just starting to explore or already knee-deep in prep, this session is for you! 💡",
      link: "https://www.instagram.com/p/DLXqAnYRZKj/",
      image: addEventImagePath("mcatInfoSession25.png"),

    },
    { 
      title: "Women in STEM Trivia Night",
      date: "June 19",
      time: "6:30-7:30pm",
      location: "DC 1351 or Online ",
      description:
        "Think you’ve got what it takes? 🤓🧠 Test your knowledge, connect with brilliant minds, and celebrate women making waves in science, technology, engineering, and mathematics. 🧠✨ Bring your A-game and win some cool prizes 🏆",
      link: "https://www.instagram.com/p/DLA2vjXyHmg/",
      image: addEventImagePath("triviaNight25.png"),

    },
    { 
      title: "Galentines Day Celebration",
      date: "Feb 13",
      time: "5-7pm",
      location: "DC 1301",
      description:
        "Galentine’s is the perfect occasion to treat yourself and create unforgettable memories with the amazing women around you! 💕Sip on mocktails, share laughs, snack on delicious treats and enjoy in style! It’s a Galentine’s celebration that you won’t want to miss!",
      link: "https://www.instagram.com/p/CzoaDUzg0_5/",
      image: addEventImagePath("galentines.png"),

    },   
    { 
      title: "General MCAT Session",
      date: "Feb 1",
      time: "6-7pm",
      location: "Online",
      description:
        "📣Calling all pre-meds and students interested in writing the MCAT! This event is for you☺️ We’ll be covering important content and answering all of your questions! The session is completely virtual so you can tune in from anywhere 🌎😉.",
      link: "https://www.instagram.com/p/CzoaDUzg0_5/",
      image: addEventImagePath("mcatreview.png"),

    },   
    { 
      title: "Brushes & Bites",
      date: "Nov 21",
      time: "5-7pm",
      location: "DC 1301",
      description:
        "Get ready to channel your artistic creativity and support a valuable cause at our Brushes and Bites event! All proceeds raised will be donated towards Women’s Crisis Services, chosen because of their direct reach and support for diverse communities in the surrounding regions.",
      link: "https://www.instagram.com/p/CzoaDUzg0_5/",
      image: addEventImagePath("brushesnbites.png"),

    },    
    { 
      title: "Moonlit Mixer",
      date: "Oct 30",
      time: "7-9pm",
      location: "MC 5501",
      description:
        "Get ready to ignite your spirit under the shimmering moonlight! Don’t miss out on the amazing Moonlight Mystery Mixer collaboration event hosted by UW WiSTEM, QTPOC KW, oSTEM, Women in Math, Women in Healthcare and FemPhys! ",
      link: "https://www.instagram.com/p/Cy1xQyZgwoh/",
      image: addEventImagePath("moonlit.png"),

    },
    { 
      title: "Careers & Chats",
      date: "Sept 26",
      time: "5:30pm-7:30pm",
      location: "PHYS 145",
      description:
        "From academia to industry, from interns to seasoned pros, our inspiring speakers will share their remarkable journeys in the world of Science, Technology, Engineering, and Mathematics.",
      link: "https://www.instagram.com/p/CxVmcW8ggxe/",
      image: addEventImagePath("chatevent.png"),

    }, 
    {
      title: "REST Easy: Introduction to API",
      date: "July 26th",
      time: "8:00pm",
      location: "Zoom",
      description:
        "learn more about Application Programming Interface (API) and Representational State Transfer (REST)",
      link: "https://www.instagram.com/p/Cu-N8GBAoSt/",
      image: addEventImagePath("restapi.png"),
    },
    {
      title: "Women's History Month Mixer",
      date: "March 27th",
      time: "7:00-8:30pm",
      location: "M3 Atrium",
      description:
        "As Women's History Month comes to a close there is no better way to end it than with a celebration! We at WiSTEM to bring you an all inclusive Women's History Month Mixer! Join us for a night filled with food, games, socializing, and so much more. There will also be FREE bubble tea, sandwiches, and snacks for those attending.",
      link: "https://www.instagram.com/p/CqF5McqgjnH/",
      image: addEventImagePath("womenHistoryMixer.png"),
    },
    {
      title: "Career Conversations with UW WiSTEM and Maple Leaf Foods",
      date: "March 8th",
      time: "5:00-6:30pm",
      location: "PHY 145",
      description:
        "Want to discover new career opportunities in STEM and gain insight into how women have navigated their career paths? Join us for a night of learning and fun with the Maple Leaf Foods team. Learn about various career paths available in business, engineering, research, HR, and leadership roles.",
      link: "https://ibb.co/WPdftvk",
      image: addEventImagePath("career-convos.png"),
    },
    {
      title: "Study with WiSTEM",
      date: "February 13th",
      time: "6:00-8:00pm",
      location: "MC 2034",
      description:
        "With midterms fast approaching, we at WiSTEM know how stressful life can get. You deserve a peaceful midterm season surrounded by people who understand the importance of a good study session, and we're here to give it to you. You deserve a peaceful midterm season surrounded by people who understand the importance of a good study session, and we're here to give it to you. ",
      link: "https://www.instagram.com/p/CoU0XHwO_YB/",
      image: addEventImagePath("study-with-wistem.png"),
    },
    {
      title: "Building your Personal Brand Online",
      date: "February 2nd",
      time: "4:30-5:30pm",
      location: "Google Meet",
      description:
        "Are you trying to build a strong online presence for yourself or your business? On February 2nd, join the Google x UW WiSTEM workshop from 4:00-5:30 PM EST for a run down of personal branding from the experts. We’ll show you how to use tools and platforms like LinkedIn to create an authentic and consistent brand that’s sure to stand out.",
      link: "https://www.instagram.com/p/CnxDxK0OXg9/",
      image: addEventImagePath("BYPBO-google.png"),
    },
    {
      title: "Pipetting & Titration Boot Camp",
      date: "November 23rd",
      time: "5:30-7:00pm",
      location: "C2 273",
      description:
        "Ever wonder what goes on in a chemistry lab? Feeling a little rusty with your lab techniques? Come join us for out Pipetting and Titration Bootcamp with Stacey Lavery to brush up on your lab skills and have some fun with chemistry (without any marking) You'll get a chance to try volumetric pipetting, micro pipetting and titrations!",
      link: "https://www.instagram.com/p/ClEtBrsua8S/?hl=en",
      image: addEventImagePath("pipette.png"),
    },
    {
      title: "Step Into STEM Annual Conference",
      date: "November 5th-13th",
      time: "",
      location: "Zoom",
      description:
        "Are you in high school and looking to pursue a career in STEM? Do you want to learn more about STEM opportunities? If so, attend out virtual Step Into STEM confernece from Nov 5-13th where you can learn more about the different careers and opportunities in STEM and gain new skills at our Hackathon!",
      link: "https://www.instagram.com/p/CjWwyG-gIl3/?hl=en",
      image: addEventImagePath("stepintostem22.png"),
    },
    {
      title: "Halloween Movie Night",
      date: "October 31st",
      time: "7:00pm",
      location: "STC 0040",
      description:
        "Are you ready for Halloween? Join WISTEM for a spooky night of watching Coraline with snacks!! Unwind after midterms and a busy Halloween weekend for a movie night happening on October 31st in STC 0040 at 7pm.",
      link: "https://www.instagram.com/p/CkHpl2Ruslv/?hl=en",
      image: addEventImagePath("hmn1.png"),
    },
    {
      title: "Admissions 101 with the Princeton Review",
      date: "October 18th",
      time: "6:00-7:00 pm",
      location: "STC 0040 OR Zoom",
      description:
        "Are you think about writing the MCAT, DAT, or the OAT? Stressed about how to ace it? No worries! WiSTEM is partnering with @theprincetonreview for an Admissions 101 event and Q&A.",
      link: "https://www.instagram.com/p/CjjIKW5AOXN/?hl=en",
      image: addEventImagePath("admissions101.png"),
    },
    {
      title: "Exec Team Takeover",
      date: "October 3rd-7th",
      time: "",
      location: "STC 0040 OR Zoom",
      description:
        "We are so excited to announce that our WISTEM execs will be doing a week of Instagram takeovers!! Tune in each day from Oct 3-7 to get to know some of our execs as the take you around a day in their life and have the chance to ask them questions about their program, coop, courses, or anything at all!",
      link: "https://www.instagram.com/p/CjOpl-PADr4/?hl=en",
      image: addEventImagePath("exectakeover22.png"),
    },
    {
      title: "UW WICS & WiSTEM x Google Women in Tech Panel & Q&A",
      date: "October 15th",
      time: "4:30pm",
      location: "DC 1302 OR Zoom",
      description:
        "Want to work in tech but feel intimidated about how to get there? WiSTEM, partnered with Google & @uwaterloowics, brings you a Women in Tech panel followed by a Q&A session, that is sure to empower you to achieve your career goals and help you break down barriers along the way!",
      link: "https://www.instagram.com/p/Ch-jJgPOkRS/?hl=en",
      image: addEventImagePath("googlewistem.png"),
    },
    {
      title: "Cupcakes & Conflict",
      date: "July 28th",
      time: "6:00pm-8:00pm",
      location: "Virtual & In-Person in Black & Gold Room",
      description:
        "GUESS WHAT!?!? You're invited to our first in person event of the term (with free food)! There's no better way to end the term than by decorating delicious cupcakes with the UW WiSTEM team and UW Cooking Club!",
      link: "https://www.instagram.com/p/CgVPlphAT6n/",
      image: addEventImagePath("cupcakesconflict.png"),
    },
    {
      title: "Intro to Python",
      date: "July 13th",
      time: "7:00pm-8:00pm",
      location: "Zoom",
      description:
        "Do you want to learn how to code but don’t know where to begin? Our termly technical workshop is BACK and ready to give you a strong intro to some Python basics! ",
      link: "https://www.instagram.com/p/CfoqbqBA848/",
      image: addEventImagePath("introtopython.png"),
    },
    {
      title: "Unfiltering Your Co-op Experiences",
      date: "June 28th",
      time: "7:00pm-8:00pm",
      location: "Zoom",
      description:
        "Do you have questions about coop? Are you nervouse about your first work term? Don't worry! WiSTEM is bringing back our coffeehouse series to talk about coop and help empower you and your peers with advice! Learn how to navigate through your coop term and how to stand up for yourself when it gets rough.",
      link: "https://www.instagram.com/p/CfFsAMZgxpC/",
      image: addEventImagePath("coffeehouse1.png"),
    },
    {
      title: "Networking with IBM",
      date: "June 9th",
      time: "7:00pm-8:00pm",
      location: "Zoom",
      description:
        "Are you looking to enhance your networking skills? What about tips to stnad out and thrive in STEM fields? Well, guess what?!? WiSTEM is collaborating with IBM to bring you an exciting networking opportunity!!!",
      link: "https://www.instagram.com/p/CeMsWTlA4-b/",
      image: addEventImagePath("networking_ibm.png"),
    },
    {
      title: "The Arts in Stem: Effective Personal Writing",
      date: "March 27th",
      time: "6:00pm-7:00pm",
      location: "Zoom",
      description:
        "Are you looking to improve your personal writing skills? Do you want to learn how to stand out on Graduate and professional school applications? If so, join us for our Effective Personal Writing Workshop to learn vital skills that will help differentiate you on various school/job applications!",
      link: "https://www.instagram.com/uwwistem/",
      image: addEventImagePath("artsstem.png"),
    },
    {
      title: "Exec Team Takeover",
      date: "February 4th to 17th",
      time: "",
      location: "Instagram",
      description:
        "We are very excited to announce that our very own executive team will be doing Instagram Takeovers during the month of February 📱! You will get the chance to see how we navigate busy midterm schedules, life on campus or a day in the life at our co-op 📚",
      link: "https://www.instagram.com/uwwistem/",
      image: addEventImagePath("exec-takeover.png"),
    },
    {
      title: "CoffeeHouse Series: Imposter Syndrome",
      date: "November 24th",
      time: "7:00pm-8:00pm",
      location: "Discord",
      description:
        "Share your personal stories and listen to others around you who’ve endured the same thoughts. We’re inviting graduate students & industry professionals who know more than anyone about overcoming obstacles and negative thoughts. Plus, you’ll get a chance to win a $25 gift card of YOUR CHOICE 💳! ",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdFGjYEJTna71xi0e8PfB1D1udNNzeneVvv8SQ-nar2ADjnVQ/viewform",
      image: addEventImagePath("coffeehouse-imposter.png"),
    },
    {
      title: "Behind a Mobile App Engagement",
      date: "October 20",
      time: "6:00pm-7:00pm",
      location: "Discord",
      description:
        "WiSTEM is excited to announce that along with Konrad and UW MCC we will be bringing you our Behind A Mobile App Engagement event where you will get the exciting opportunity to learn about the end-to-end process and delivery of a mobile app design through various interactive elements📱⁣",
      link: "",
      image: addEventImagePath("konradf21.png"),
    },
    {
      title: "Practical Microservices",
      date: "September 30",
      time: "4:00pm-5:30pm",
      location: "Discord",
      description:
        "During this workshop, you will have a chance to get your hands dirty and build your first Java microservice using Eclipse MicroProfile and Open Liberty, an open programming model and an open-source application server for microservices👩‍💻 as well as to dive deeper into various aspects of microservices!",
      link: "",
      image: addEventImagePath("practicalMicroservice.png"),
    },
    {
      title: "How to Rock Your Internship Hosted By Intuit",
      date: "September 16",
      time: "4:00pm",
      location: "Discord",
      description:
        "WiSTEM is partnering with Intuit to bring you a How to Rock Your Internship Workshop 💼!!⁣ In this event, you will learn how to hone your networking skills allowing you to build valuable connections 🤝 and win the chance to have one-on-one time with industry professionals 🎖⁣",
      link: "",
      image: addEventImagePath("internIntuit.png"),
    },
    {
      title: "Networking with accenture",
      date: "September 9",
      time: "5:00pm-6:30pm",
      location: "Discord",
      description:
        "WiSTEM is collaborating with Accenture to bring you an exciting networking event 🤝!! ⁣Attendees will receive information about Accenture and the opportunities in Tech at Accenture. Their Technology Analysts, Lola Yusuf-Aliyu and Natalie To will also provide a short networking workshop and a panel 👩‍💻",
      link: "",
      image: addEventImagePath("accentureNetwork.png"),
    },
    {
      title: "End of Term Event Games Night",
      date: "July 28",
      time: "6:00pm",
      location: "Discord",
      description:
        "Are you are looking for a fun way to de-stress from your busy semester? Do you want the chance to make some new friends while securing a prize🥇? ⁣We will be hosting a games night on our discord 🏆🧩. This will be a great opportunity to socialize, relax and win a 25$ gift card of your choice.",
      link: "https://discord.gg/bUEQQNqyZd",
      image: addEventImagePath("GNS21.png"),
    },
    {
      title: "Code Your First Website",
      date: "June 18",
      time: "7:00pm - 8:30pm",
      location: "Zoom",
      description:
        "WiSTEM is hosting a technical workshop where you will get the chance to learn the coding skills required to build a website from scratch using HTML/CSS ⌨️! <a href='https://docs.google.com/presentation/d/1xl73VWxnyw-irg15AXTOFewpLvvK1cpH6jBAylXMPsA/edit?usp=sharing' target='_blank' rel='noreferrer'>Click here to view the workshop slides!</a>",
      link: "https://docs.google.com/presentation/d/1xl73VWxnyw-irg15AXTOFewpLvvK1cpH6jBAylXMPsA/edit?usp=sharing",
      image: addEventImagePath("websiteWorkshop.png"),
    },
    {
      title: "Science & Research Talk Series",
      date: "May 29 2021 - May 30 2021",
      time: "5:00pm-7:00pm",
      location: "Zoom",
      description:
        "⁣Over the two-day event speakers will cover topics including working in translational research, the healthcare/business field, iGEM's 2020 synthetic biology project and much more.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdjkSVmOLIpzvUnFpd-yRLHqH2rV2wyd4LME54YWW2cEciCpg/viewform",
      image: addEventImagePath("scienceResearchSeries.jpg"),
    },
    {
      title: "Mock Interview Career Workshop",
      date: "May 18 2021",
      time: "12:00pm",
      location: "Zoom Link",
      description:
        "WiSTEM is teaming up with American Express Canada to bring you a Mock Interview Style Event! 🤝💻⁣ If you are looking to practice your interview techniques for the upcoming co-op term this is the perfect event for you! ",
      link: "",
      image: addEventImagePath("mockInterview.jpg"),
    },
    {
      title: "Games Night in Support of SCWST",
      date: "April 9 2021",
      time: "5:30pm-7:00pm",
      location: "",
      description:
        "This event will give each attendee the opportunity to play fun games, socialize and to give back to an amazing organization; The Society for Canadian Women in Science and Technology (SWCST) who have directed their efforts towards advocating for women in the STEM field.",
      link: "",
      image: addEventImagePath("EOT_GamesNight.jpg"),
    },
    {
      title: "Women in Science Career Panel Q&A",
      date: "March 30 2021",
      time: "5:30pm-7:30pm",
      location: "",
      description:
        "Learn all about science related topics through our Women in Science Career Panel event, brought to you by SciSoc x WiSTEM! This event will give you the opportunity to learn and ask questions to amazing student speakers who are currently in the science field 👩‍🔬",
      link: "",
      image: addEventImagePath("WIS_Career.jpg"),
    },
    {
      title: "Confidence Building and Yoga Workshop",
      date: "March 11 2021",
      time: "5:30pm-7:30pm",
      location: "",
      description:
        "In this event, you will be given tips and tricks to help boost your confidence. You will also have the opportunity to relieve some stress from this busy midterm season with a guided yoga session from Power Yoga Canada.",
      link: "",
      image: addEventImagePath("accentureYoga.png"),
    },
    {
      title: "Step into STEM Engineering Workshop",
      date: "February 6 2021",
      time: "2:00pm-5:00pm",
      location: "",
      description:
        "Attendees can join our Intro to Clustering for Image Analysis hosted by UW Data Science Club on Feb 7th @ 2-5PM EST using the zoom link in our bio!! 😁",
      link: "",
      image: addEventImagePath("SiSEngineeringWorkshop.png"),
    },
    {
      title: "Step into STEM Science Workshop",
      date: "January 30 2021",
      time: "2:00pm-5:00pm",
      location: "Zoom",
      description: `WiSTEM is excited to introduce an amazing guest speaker for the Stem Into STEM Science workshop Dr. Nardine Nakhla, from UW school of Pharmacy!! 👩‍🔬🧫⠀Attendees can join our gel electrophoresis simulation event.`,
      link: "",
      image: addEventImagePath("StepintoSTEM-Science.png"),
    },
    {
      title: "Resume Critique",
      date: "January 19 2021",
      time: "6:00pm-7:00pm",
      location: "",
      description:
        "In this Resume & Roast style workshop, you will get the chance to learn the do’s and don’ts of resume writing, network and share some laughs. The IBM recruitment team will poke fun at resumes while providing some valuable feedback to help get you into tip top shape!",
      link: "https://www.facebook.com/events/229819568642983/",
      image: addEventImagePath("ibmworkshop.png"),
    },
    {
      title: "End of Term - Among Us",
      date: "December 8 2020",
      time: "8:00pm-9:00pm",
      location: "",
      description:
        "Join us for a game of Among Us to destress from a busy term! Our Among Us Discord server will be available on Dec. 7th on our Facebook. To win 1 of 3 gift cards, make sure to register for an account and keep an eye out for updates!",
      link: "https://www.facebook.com/events/423002768892115",
      image: addEventImagePath("eot_among_us.png"),
    },
    {
      title: "IBM x WiSTEM: Artificial Intelligence 101",
      date: "November 25 2020",
      time: "6:00pm-7:30pm",
      location: "",
      description:
        "Come out to lear all the basics of AI and even build your own neural network. IBM's Data and Analytics team will be discussing the A to Z’s of AI, along with answering YOUR AI-related questions!",
      link: "https://www.facebook.com/events/219327676251605",
      image: addEventImagePath("artificial_intelligence_101.png"),
    },
    {
      title: "Code Your First Game Technical Workshop",
      date: "November 10 2020",
      time: "7:00pm-8:30pm",
      location: "",
      description:
        "Interested in coding? Ever wanted to create your own game? Come to our Technical Workshop where you’ll learn how to create your own game with Python. No programming experience necessary!",
      link: "https://bit.ly/2TRSEkn",
      image: addEventImagePath("technical_workshop.png"),
    },
    {
      title: "WiSTEM x Intuit: Networking & Careers Panel Workshop",
      date: "October 29 2020",
      time: "5:30pm-7:00pm",
      location: "",
      description:
        "WiSTEM is collaborating with Intuit Canada to provide you a 3-part networking workshop! Join us on October 29th from 5:30-7PM EST, to learn how to network, write cold emails, reach out to employers, and foster new connections!",
      link: "https://www.facebook.com/UWWiSTEM/posts/1440389426161544",
      image: addEventImagePath("intuit_event.png"),
    },
    {
      title: "WiSTEM x WiCS: Co-op Bootcamp",
      date: "October 19 2020",
      time: "5:30pm",
      location: "",
      description:
        "WiSTEM has teamed up with WiCS to bring you this awesome workshop which will consist of resume critiques, mock interviews, and the chance to engage in helpful discussions from experienced panelists. Register now!",
      link: "https://bit.ly/2GZlb4t",
      image: addEventImagePath("co-op_bootcamp.png"),
    },
    {
      title: "STEM Trivia Night",
      date: "October 8 2020",
      time: "8:00pm-9:00pm",
      location: "",
      description:
        "Join us for a fun-filled night where you can de-stress, meet new people, and have a chance to win prizes. Sign up now!",
      link: "https://bit.ly/3imaQfY",
      image: addEventImagePath("trivia_night_f20.png"),
    },
    {
      title: "WiSTEM x Amex: Career Success in the Digital Age",
      date: "September 30 2020",
      time: "12:00pm-1:00pm",
      location: "",
      description:
        "This panel event will feature professionals from Amex Canada’s Women in Technology network who will dive in to building a successful career in this new virtual world! Registration closes Monday, September 29, 3pm.",
      link: "https://www.facebook.com/events/616636495881584/",
      image: addEventImagePath("amex_event.png"),
    },
    {
      title: "Mentorship",
      date: "Fall 2020",
      time: "",
      location: "",
      description:
        "WiSTEM's mentorship program focuses on connecting first-year students with upper-years to get helpful uni advice, connection tips and more, guiding students to successfully manage this virtual term!",
      link: "http://uwwistem.com/mentorship",
      image: addEventImagePath("mentorship.png"),
    },
    {
      title: "Yext Info Session",
      date: "September 21 2020",
      time: "7:00pm-8:00pm",
      location: "",
      description:
        "Learn more about Yext - a New York-based tech company focused on helping organizations to grow and deliver official answers everywhere people search.",
      link: "https://www.facebook.com/UWWiSTEM/posts/1409212739279213",
      image: addEventImagePath("yext_info_session.png"),
    },
    {
      title: "Mock Interview",
      date: "Starting from May 29",
      time: "",
      location: "",
      description:
        "WiSTEM is hosing mock interviews starting from May 29! Check out the registration form here: https://forms.gle/1cwdgzQRPYkf4FbT9",
      link: "https://forms.gle/1cwdgzQRPYkf4FbT9",
      image: addEventImagePath("mock_interview.jpeg"),
    },
    {
      title: "Coding Workshop",
      date: "July 14 2020",
      time: "7:00pm - 9:00pm",
      location: "",
      description:
        "Join WiSTEM’s Coding Workshop on July 14th! We’ll showing showing you the tips and tricks on how to build a website using HTML + CSS!",
      link: "https://www.facebook.com/events/917064908791146/",
      image: addEventImagePath("web-workshop.png"),
    },
    {
      title: "Trivia Night",
      date: "June 17 2020",
      time: "8:30pm - 10:00pm",
      location: "",
      description:
        "Put your thinking caps on and be prepared to answer fun questions about general STEM facts for a chance to win a Skip the Dishes gift card!",
      link: "https://www.facebook.com/events/1258794867660345/",
      image: addEventImagePath("trivia_night.jpeg"),
    },
    {
      title: "Instagram Takeover",
      date: "April 2020",
      time: "",
      location: "",
      description:
        "Checkout our Instagram account @uwwistem! Gain insight regarding STEM occupations and dive deep into the STEM industry!",
      link: "https://www.instagram.com/uwwistem/",
      image: addEventImagePath("ins-takeover.jpg"),
    },
    {
      title: "CANCELLED - WiSTEM x Konrad: Design Thinking Workshop",
      date: "March 26 2020",
      time: "5:30pm – 6:30pm",
      location: "TBD",
      description: "Cancelled due to Covid-19",
      link: "https://www.facebook.com/events/194682061836398/",
      image: addEventImagePath("konrad.png"),
    },
    {
      title: "WiCS x WiSTEM Coffee Chats",
      date: "March 4 2020",
      time: "7:30pm – 8:30pm",
      location: "E2 - 1732",
      description:
        "Join WiCS and WiSTEM for a casual time to network, drink some coffee and eat some good snacks while developing connections with women in STEM and CS! ",
      link: "https://www.facebook.com/events/1600304690134428/",
      image: addEventImagePath("coffeehouse.png"),
    },
    {
      title: "Valentine's Day Booth",
      date: "Feburary 12 - 13 2020",
      time: "10:00am - 2:00pm",
      location: "SLC Marketplace",
      description:
        "Come Check out WiSTEM’s Valentine’s Booth and make your own personalized Valentine craft! ",
      link: "https://www.facebook.com/events/2738615686233905/",
      image: addEventImagePath("val_wistem.png"),
    },
    {
      title: "Virtual Resume Critique",
      date: "By Feb 1 2020",
      time: "",
      location: "",
      description:
        "Power-up your resume with WiSTEM's Virtual Resume Critique!",
      link: "",
      image: addEventImagePath("resume_critique.png"),
    },
    {
      title: "Shrink Plastic Workshop",
      date: "March 20 2019",
      time: "6:30pm - 8:30pm",
      location: "STC 0010",
      description:
        "Come express your creativity and de-stress at University of Waterloo WiSTEM x Crafts 4 Charity workshop on making shrink plastic key chains! ",
      link: "https://www.facebook.com/events/2291184721149140/?notif_t=event_aggregate&notif_id=1553083191107568",
      image: addEventImagePath("shrink_plastic.png"),
    },
    {
      title: "Introduction to Python Workshop",
      date: "Nov 28 2019",
      time: "5:30pm - 7:00pm",
      location: "PHY 145",
      description:
        "Come and learn a new programming language and enjoy FREE bubble tea!",
      link: "",
      image: addEventImagePath("pyws.png"),
    },
    {
      title: "Bake Sale",
      date: "Nov 15 2019",
      time: "",
      location: "SLC",
      description: "Meet us on Friday @SLC for Bake Sale! Everything under $2!",
      link: "",
      image: addEventImagePath("bake.png"),
    },
    {
      title: "Virtual Resume Critique",
      date: "By Nov 15 2019",
      time: "",
      location: "",
      description: "Tune up your resume with WiSTEM's Virtual Resume Critique!",
      link: "",
      image: addEventImagePath("vrc.png"),
    },
    {
      title: "Intro To Programming: Python",
      date: "July 3 2018",
      time: "5:30pm - 7:30pm",
      location: "STC0010",
      description:
        "Come on out for a night of pizza and learning something new for $2! Please book your spot using the Eventbrite General Admission ticket so that you can get your pizza.",
      link: "http://www.uwwistem.ca",
      image: addEventImagePath("python-intro.png"),
    },
    {
      title: "Movie Night - The Incredibles",
      date: "June 14 2018",
      time: "7:00pm - 9:30pm",
      location: "MC Comfy",
      description:
        "Come watch the Incredibles in the Math building's comfy room (MC 3rd floor)! $2 entry at the door which includes unlimited popcorn & drinks*!",
      link: "https://www.facebook.com/events/434677386943811/",
      image: addEventImagePath("movie-night.png"),
    },
    {
      title: "B.O.T Bonfire",
      date: "May 29 2018",
      time: "7:00pm -10:00pm",
      location: "Laurel Creek, UW",
      description:
        "WiSTEM is hosting our annual Beginning of Term bonfire! Celebrate the spring term with marshmallow roasting and hanging with friends!",
      link: "https://www.facebook.com/events/166742827501241/",
      image: addEventImagePath("bot-bonfire.png"),
    },
    {
      title: "Intro to Programming: Python",
      date: "Mar 29 2018",
      time: "7pm - 8:30pm",
      location: "STC 0050",
      description:
        "WiSTEM is hosting ANOTHER INTRO TO PROGRAMMING WORKSHOP! Please get a FREE ticket through Eventbrite and to learn how to program in Python!",
      link: "https://www.facebook.com/events/357516918083429/",
      image: addEventImagePath("intro-to-python.png"),
    },
    {
      title: "Open Mic Night",
      date: "Mar 20 2018",
      time: "5:30pm - 9pm",
      location: "The Bombshelter Pub",
      description:
        "Come to out to our open mic night with WiSTEM and PhysClub to share your talents with us, or to see your talented peers!",
      link: "https://www.facebook.com/events/166791930780006/",
      image: addEventImagePath("open-mic-night.png"),
    },
    {
      title: "Dance Class with AfroFusion",
      date: "Mar 1 2018",
      time: "6:30pm - 8pm",
      location: "PAC Studio 2",
      description:
        "Join Women in STEM and AfroFusion Dance Club for an open level dance class. Relax, let loose, and groove with us!",
      link: "https://www.facebook.com/events/1057866051032574/",
      image: addEventImagePath("afrofusion-dance.png"),
    },
    {
      title: "Wet Lab Techniques",
      date: "Feb 26 2018",
      time: "7pm - 8:30pm",
      location: "ESC 319",
      description:
        "Join WiSTEM and Velocity Science to experience hands-on wet lab techniques and equipment in the Velocity Science lab space!",
      link: "https://www.facebook.com/events/151235939018404/",
      image: addEventImagePath("velocity-wetlab.png"),
    },
    {
      title: "Intro to Programming Workshop",
      date: "Nov 13 2017",
      time: "7pm - 8:30pm",
      location: "STC 0050",
      description:
        "WiSTEM is hosting ANOTHER INTRO TO PROGRAMMING WORKSHOP! 💻💻💻 NO EXPERIENCE NECESSARY. Make sure to get a ticket because spaces are limited.",
      link: "https://www.facebook.com/events/153018705443474/",
      image: addEventImagePath("introtoprogrammingf17.jpg"),
    },
    {
      title: "Flawless: A Bomber Wednesday",
      date: "Nov 15 2017",
      time: "9pm - 2am",
      location: "The Bombshelter Pub",
      description:
        "Get ready for a LIT night full of your favourite female artists like Beyonce, Rihanna, and Taylor Swift. It's gonna be a boss ass night.",
      link: "https://www.facebook.com/events/184031778837347/",
      image: addEventImagePath("bomber.png"),
    },
    {
      title: "STEMania",
      date: "Oct 20 2017",
      time: "7pm - 8:30pm",
      location: "MC 2065",
      description:
        "WiSTEM presents a STEM-themed Kahoot trivia night. Come for the free food, stay to compete for a prize and to prove you're the smartest person in the room",
      link: "https://www.facebook.com/events/1180109578800080/",
      image: addEventImagePath("stemania.jpg"),
    },
    {
      title: "Synthetic Biology Panel",
      date: "Sep 19 2017",
      time: "7pm - 8:30pm",
      location: "STC 0050",
      description:
        "WiSTEM and UW iGEM are hosting a workshop to educate students on the emerging field of synthetic biology, and promoting inclusivity in science.",
      link: "https://www.facebook.com/events/1442927809087495/",
      image: addEventImagePath("synbiopanel.jpg"),
    },
    {
      title: "Fight Like A Girl",
      date: "July 12 2017",
      time: "6pm - 7pm",
      location: "SLC Basement",
      description:
        "A continuation of our self-defense classes, WiSTEM presents this all-inclusive class to build protection skills.",
      link: "https://www.facebook.com/events/1854937938090602/",
      image: addEventImagePath("fightlikeagirl-overlay.jpg"),
    },
    {
      title: "Spring Dance @ The Bomber",
      date: "June 28 2017",
      time: "8pm - 2am",
      location: "The Bomber",
      description:
        "It's a Bomber Wednesday! Ask someone to #springdancewithme and jam to throwbacks with UW WiSTEM, UW Youth Horizon, and Phys Club.",
      link: "https://www.facebook.com/events/1134961726608926/",
      image: addEventImagePath("springdance.jpg"),
    },
    {
      title: "Beat the Heat",
      date: "JUne 6 2017",
      time: "10am - 4pm",
      location: "SLC",
      description:
        "WiSTEM is fundraising for Shine A Light, an organization that provides resources to refugee girls in camps who don't have an access to education.",
      link: "https://www.facebook.com/events/1975874069365726/",
      image: addEventImagePath("beattheheat.jpg"),
    },
    {
      title: "Introduction to Programming Workshop",
      date: "March 21 2017",
      time: "5:30pm - 7pm",
      location: "QNC 2502",
      description:
        "Take a &lt;br&gt; and learn how to build your own website using CSS, HTML, and Git to develop fundamental technical skills.",
      link: "https://www.facebook.com/events/388749218174389/",
      image: addEventImagePath("programworkshop.jpg"),
    },
    {
      title: "Beginner's Hip Hop Class",
      date: "March 14 2017",
      time: "7pm - 10pm",
      location: "QNC 2502",
      description:
        "UW FemiNINE and WiSTEM together again to bring you a beginner's hip hop class to relax and have fun!",
      link: "https://www.facebook.com/events/1461920890549672/",
      image: addEventImagePath("hiphopclass.png"),
    },
    {
      title: "Paint Your Pinky",
      date: "February 14 2017",
      time: "10am - 4:30pm",
      location: "MC, DC and STC",
      description:
        "Join WiSTEM and paint your pinky to bring awareness to Women in STEM by sparking discussions across campus about the inequalities in STEM.",
      link: "https://www.facebook.com/events/1356679277722548/",
      image: addEventImagePath("paintyourpinky.jpg"),
    },
    {
      title: "The F-Word",
      date: "Nov 30 2016",
      time: "6pm - 7pm",
      location: "STC 0020",
      description:
        "WiSTEM is hosting a nonjudgmental discussion where we help males understand what feminism really is and why it is important.",
      link: "https://www.facebook.com/events/1851300768416283/",
      image: addEventImagePath("fword.png"),
    },
    {
      title: "Lets Talk: Women in STEM",
      date: "Nov 9 2016",
      time: "5:30pm - 7:30pm",
      location: "STC 0020",
      description:
        "WiSTEM cordially invites you to join us at our Let's Talk event where we stream some inspiring and cool videos, have some food, and mingle with new friends!",
      link: "https://www.facebook.com/events/1788746171364035/",
      image: addEventImagePath("letstalk.png"),
    },
    {
      title: "Introduction to Synthetic Biology and Gender Equity",
      date: "Nov 19 &amp; 20 2015",
      time: "10:30AM – 11:20AM, 4:30PM – 5:20PM",
      location: "B1 377",
      description:
        "This first workshop is intended to introduce you to the intersection of synthetic biology and gender equality/equity.",
      link: "https://www.facebook.com/events/1657961857780510",
      image: addEventImagePath("synbio101.png"),
    },
    {
      title: "Synthetic Biology and Gender Equality 101",
      date: "Oct 29 & 30 2015",
      time: "10:30AM – 11:20AM, 4:30PM – 5:20PM",
      location: "B1 377",
      description:
        "This first workshop is intended to introduce you to the intersection of synthetic biology and gender equality/equity.",
      link: "https://www.facebook.com/events/482175695319703/",
      image: addEventImagePath("synbio101.png"),
    },
    {
      title: "Wisdom from WISTEM EOT",
      date: "Mar 25 2015",
      time: "5:30PM – 7:30PM",
      location: "M3 3103",
      description:
        "Come out and mingle with professionals from the STEM (Science, Technology, Engineering and Mathematics) fields and gain insight on what the future holds!",
      link: "https://www.facebook.com/events/1597170790519976/",
      image: addEventImagePath("wisdom.png"),
    },
    {
      title: "WISE National Conference UW Pre-Conference",
      date: "Mar 6 2014",
      time: "5:30PM – 6:30PM",
      location: "QNC 1501",
      description:
        "This pre-conference event is welcome to those who have already bought their tickets for the WISE conference and those who haven't but want to attend WISE.",
      link: "https://www.facebook.com/events/232052803664920/",
      image: addEventImagePath("wise.png"),
    },
    {
      title: "Women's Self-Defense Workshop",
      date: "Nov 17 2013",
      time: "7PM – 9PM",
      location: "CIF Studio",
      description:
        "This is a 2 hour workshop run by UW Karate Club instructors that teaches women basic self defense and escape tactics in situations of sexual harassment.",
      link: "https://www.facebook.com/events/1437194003167343/",
      image: addEventImagePath("defense.png"),
    },
    {
      title: "YOU++; | WiSTEM X UW Meet",
      date: "Nov 16 2013",
      time: "10AM – 2PM",
      location: "QNC 1502",
      description:
        "In collaboration with UW Meet, WiSTEM cordially invites you to YOU++; a conference dedicated to upgrade both your technical and soft skills.",
      link: "https://www.facebook.com/events/318144204991293/",
      image: addEventImagePath("you.png"),
    },
    {
      title: "End-Of-Term Dessert Celebration",
      date: "Aug 1 2013",
      time: "11PM",
      location: "SLC 2134",
      description:
        "It's your chance to chat with us, talk about WiSTEM's future, and enjoy some sweet treats. Please bring your favourite dessert item",
      link: "https://www.facebook.com/events/559369607462582/",
      image: addEventImagePath("dessert.png"),
    },
  ],
};

function addEventImagePath(fileName) {
  return "img/events/" + fileName;
}
