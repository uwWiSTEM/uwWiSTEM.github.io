var HTMLUpcomingEventTitle = '<h2 class="eventp-title"><strong>Coming Soon:</strong> %data%</h2>';
var HTMLPastEventTitle = '<h2 class="eventp-title">%data%</h2>'
var HTMLEventDate = '<div class="eventp-date-container text-center"><h5 class="eventp-date">%data%</h5></a></div></div>';
var HTMLEventTime = '<h6 class="eventp-time">%data%</h6>';
var HTMLEventDescription = '<h6 class="eventp-description">%data%</h6><br>';
var HTMLEventRow = '<div class="row eventp">';
var HTMLClosingDiv = '</div>';
var HTMLImageDiv = '<div class="eventp-image-container"><a href="%data%" target="_blank">';
var HTMLEventDescriptionContainer = '<div class="eventp-description-container">';
var HTMLEventLocation = ''
var HTMLEventImage = '<div class="eventp-image" style="background-image: url(%data%); background-size: cover; border-radius: 20px 20px 0 0;"></div>';
var mostRecentEvents = [];
var HTMLIndexEventStart = '<div class="col-md-4 event-container"><a href="%data%" target="_blank"><div class="event">';
var HTMLIndexEventPhoto = '<div class="event-photo" style="background-image:url(%data%); background-size: cover;border-radius: 20px 20px 0 0;">';
var HTMLIndexEventDate = '<h3 class="event-month">%data%</h3></div>';
var HTMLIndexEventTitle = '<div class="event-description"><h5 class="event-title">%data%</h5>';
var HTMLIndexEventTime = '<h5 class="event-time">%data%</h5></div></div></a></div>';

var events = {
    upcomingevents: [{
        title: "WiSTEM x Konrad: Design Thinking Workshop",
        date: "March 26 2020",
        time: "5:30pm – 6:30pm",
        location: "TBD",
        description: "Come out and join WiSTEM for an evening of design thinking with special host KONRAD!",
        link: "https://www.facebook.com/events/194682061836398/",
        image: "img/think_design.jpg"
    }],
    pastevents: [
        {
            title: "WiCS x WiSTEM Coffee Chats",
            date: "March 4 2020",
            time: "7:30pm – 8:30pm",
            location: "E2 - 1732",
            description: "Join WiCS and WiSTEM for a casual time to network, drink some coffee and eat some good snacks while developing connections with women in STEM and CS! ",
            link: "https://www.facebook.com/events/1600304690134428/",
            image: "img/coffeehouse.png"
        },
        {
            title: "Valentine's Day Booth",
            date: "Feburary 12 - 13 2020",
            time: "10:00am - 2:00pm",
            location: "SLC Marketplace",
            description: "Come Check out WiSTEM’s Valentine’s Booth and make your own personalized Valentine craft! ",
            link: "https://www.facebook.com/events/2738615686233905/",
            image: "img/val_wistem.png"
        },
        {
            title: "Virtual Resume Critique",
            date: "By Feb 1 2020",
            time: "",
            location: "",
            description: "Power-up your resume with WiSTEM's Virtual Resume Critique!",
            link: "",
            image: "img/resume_critique.png"
        },
        {
            title: "Shrink Plastic Workshop",
            date: "March 20 2019",
            time: "6:30pm - 8:30pm",
            location: "STC 0010",
            description: "Come express your creativity and de-stress at University of Waterloo WiSTEM x Crafts 4 Charity workshop on making shrink plastic key chains! ",
            link: "https://www.facebook.com/events/2291184721149140/?notif_t=event_aggregate&notif_id=1553083191107568",
            image: "img/shrink_plastic.png"
        },
        {
        title: "Intro To Programming: Python",
        date: "July 3 2018",
        time: "5:30pm - 7:30pm",
        location: "STC0010",
        description: "Come on out for a night of pizza and learning something new for $2! Please book your spot using the Eventbrite General Admission ticket so that you can get your pizza.",
        link: "http://www.uwwistem.ca",
        image: "img/python-intro.png"
        },
        {
        title: "Movie Night - The Incredibles",
        date: "June 14 2018",
        time: "7:00pm - 9:30pm",
        location: "MC Comfy",
        description: "Come watch the Incredibles in the Math building's comfy room (MC 3rd floor)! $2 entry at the door which includes unlimited popcorn & drinks*!",
        link: "https://www.facebook.com/events/434677386943811/",
        image: "img/movie-night.png"
        },
        {
        title: "B.O.T Bonfire",
        date: "May 29 2018",
        time: "7:00pm -10:00pm",
        location: "Laurel Creek, UW",
        description: "WiSTEM is hosting our annual Beginning of Term bonfire! Celebrate the spring term with marshmallow roasting and hanging with friends!",
        link: "https://www.facebook.com/events/166742827501241/",
        image: "img/bot-bonfire.png"
        },
        {
        title: "Intro to Programming: Python",
        date: "Mar 29 2018",
        time: "7pm - 8:30pm",
        location: "STC 0050",
        description: "WiSTEM is hosting ANOTHER INTRO TO PROGRAMMING WORKSHOP! Please get a FREE ticket through Eventbrite and to learn how to program in Python!",
        link: "https://www.facebook.com/events/357516918083429/",
        image: "img/intro-to-python.png"
        },
        {
        title: "Open Mic Night",
        date: "Mar 20 2018",
        time: "5:30pm - 9pm",
        location: "The Bombshelter Pub",
        description: "Come to out to our open mic night with WiSTEM and PhysClub to share your talents with us, or to see your talented peers!",
        link: "https://www.facebook.com/events/166791930780006/",
        image: "img/open-mic-night.png"
        },
        {
            title: "Dance Class with AfroFusion",
            date: "Mar 1 2018",
            time: "6:30pm - 8pm",
            location: "PAC Studio 2",
            description: "Join Women in STEM and AfroFusion Dance Club for an open level dance class. Relax, let loose, and groove with us!",
            link: "https://www.facebook.com/events/1057866051032574/",
            image: "img/afrofusion-dance.png"
        },
        {
            title: "Wet Lab Techniques",
            date: "Feb 26 2018",
            time: "7pm - 8:30pm",
            location: "ESC 319",
            description: "Join WiSTEM and Velocity Science to experience hands-on wet lab techniques and equipment in the Velocity Science lab space!",
            link: "https://www.facebook.com/events/151235939018404/",
            image: "img/velocity-wetlab.png"
        },
        {
	        title: "Intro to Programming Workshop",
	        date: "Nov 13 2017",
	        time: "7pm - 8:30pm",
	        location: "STC 0050",
	        description: "WiSTEM is hosting ANOTHER INTRO TO PROGRAMMING WORKSHOP! 💻💻💻 NO EXPERIENCE NECESSARY. Make sure to get a ticket because spaces are limited.",
	        link: "https://www.facebook.com/events/153018705443474/",
	        image: "img/introtoprogrammingf17.jpg"
	    },
	    {
	        title: "Flawless: A Bomber Wednesday",
	        date: "Nov 15 2017",
	        time: "9pm - 2am",
	        location: "The Bombshelter Pub",
	        description: "Get ready for a LIT night full of your favourite female artists like Beyonce, Rihanna, and Taylor Swift. It's gonna be a boss ass night.",
	        link: "https://www.facebook.com/events/184031778837347/",
	        image: "img/bomber.png"
    	},
        {
            title: "STEMania",
            date: "Oct 20 2017",
            time: "7pm - 8:30pm",
            location: "MC 2065",
            description: "WiSTEM presents a STEM-themed Kahoot trivia night. Come for the free food, stay to compete for a prize and to prove you're the smartest person in the room",
            link: "https://www.facebook.com/events/1180109578800080/",
            image: "img/stemania.jpg"
        },
        {
            title: "Synthetic Biology Panel",
            date: "Sep 19 2017",
            time: "7pm - 8:30pm",
            location: "STC 0050",
            description: "WiSTEM and UW iGEM are hosting a workshop to educate students on the emerging field of synthetic biology, and promoting inclusivity in science.",
            link: "https://www.facebook.com/events/1442927809087495/",
            image: "img/synbiopanel.jpg"
        },
        {
            title: "Fight Like A Girl",
            date: "July 12 2017",
            time: "6pm - 7pm",
            location: "SLC Basement",
            description: "A continuation of our self-defense classes, WiSTEM presents this all-inclusive class to build protection skills.",
            link: "https://www.facebook.com/events/1854937938090602/",
            image: "img/fightlikeagirl-overlay.jpg"
        },
        {
            title: "Spring Dance @ The Bomber",
            date: "June 28 2017",
            time: "8pm - 2am",
            location: "The Bomber",
            description: "It's a Bomber Wednesday! Ask someone to #springdancewithme and jam to throwbacks with UW WiSTEM, UW Youth Horizon, and Phys Club.",
            link: "https://www.facebook.com/events/1134961726608926/",
            image: "img/springdance.jpg"
        },
        {
            title: "Beat the Heat",
            date: "JUne 6 2017",
            time: "10am - 4pm",
            location: "SLC",
            description: "WiSTEM is fundraising for Shine A Light, an organization that provides resources to refugee girls in camps who don't have an access to education.",
            link: "https://www.facebook.com/events/1975874069365726/",
            image: "img/beattheheat.jpg"
        },
        {
            title: "Introduction to Programming Workshop",
            date: "March 21 2017",
            time: "5:30pm - 7pm",
            location: "QNC 2502",
            description: "Take a &lt;br&gt; and learn how to build your own website using CSS, HTML, and Git to develop fundamental technical skills.",
            link: "https://www.facebook.com/events/388749218174389/",
            image: "img/programworkshop.jpg"
        },
        {
            title: "Beginner's Hip Hop Class",
            date: "March 14 2017",
            time: "7pm - 10pm",
            location: "QNC 2502",
            description: "UW FemiNINE and WiSTEM together again to bring you a beginner's hip hop class to relax and have fun!",
            link: "https://www.facebook.com/events/1461920890549672/",
            image: "img/hiphopclass.png"
        },
        {
            title: "Paint Your Pinky",
            date: "February 14 2017",
            time: "10am - 4:30pm",
            location: "MC, DC and STC",
            description: "Join WiSTEM and paint your pinky to bring awareness to Women in STEM by sparking discussions across campus about the inequalities in STEM.",
            link: "https://www.facebook.com/events/1356679277722548/",
            image: "img/paintyourpinky.jpg"
        },
        {
            title: "The F-Word",
            date: "Nov 30 2016",
            time: "6pm - 7pm",
            location: "STC 0020",
            description: "WiSTEM is hosting a nonjudgmental discussion where we help males understand what feminism really is and why it is important.",
            link: "https://www.facebook.com/events/1851300768416283/",
            image: "img/fword.png"
        },
        {
            title: "Lets Talk: Women in STEM",
            date: "Nov 9 2016",
            time: "5:30pm - 7:30pm",
            location: "STC 0020",
            description: "WiSTEM cordially invites you to join us at our Let's Talk event where we stream some inspiring and cool videos, have some food, and mingle with new friends!",
            link: "https://www.facebook.com/events/1788746171364035/",
            image: "img/letstalk.png"
        },
        {
            title: "Introduction to Synthetic Biology and Gender Equity",
            date: "Nov 19 &amp; 20 2015",
            time: "10:30AM – 11:20AM, 4:30PM – 5:20PM",
            location: "B1 377",
            description: "This first workshop is intended to introduce you to the intersection of synthetic biology and gender equality/equity.",
            link: "https://www.facebook.com/events/1657961857780510",
            image: "img/synbio101.png"
        },
        {
            title: "Synthetic Biology and Gender Equality 101",
            date: "Oct 29 & 30 2015",
            time: "10:30AM – 11:20AM, 4:30PM – 5:20PM",
            location: "B1 377",
            description: "This first workshop is intended to introduce you to the intersection of synthetic biology and gender equality/equity.",
            link: "https://www.facebook.com/events/482175695319703/",
            image: "img/synbio101.png"
        },
        {
            title: "Wisdom from WISTEM EOT",
            date: "Mar 25 2015",
            time: "5:30PM – 7:30PM",
            location: "M3 3103",
            description: "Come out and mingle with professionals from the STEM (Science, Technology, Engineering and Mathematics) fields and gain insight on what the future holds!",
            link: "https://www.facebook.com/events/1597170790519976/",
            image: "img/wisdom.png"
        },
        {
            title: "WISE National Conference UW Pre-Conference",
            date: "Mar 6 2014",
            time: "5:30PM – 6:30PM",
            location: "QNC 1501",
            description: "This pre-conference event is welcome to those who have already bought their tickets for the WISE conference and those who haven't but want to attend WISE.",
            link: "https://www.facebook.com/events/232052803664920/",
            image: "img/wise.png"
        },
        {
            title: "Women's Self-Defense Workshop",
            date: "Nov 17 2013",
            time: "7PM – 9PM",
            location: "CIF Studio",
            description: "This is a 2 hour workshop run by UW Karate Club instructors that teaches women basic self defense and escape tactics in situations of sexual harassment.",
            link: "https://www.facebook.com/events/1437194003167343/",
            image: "img/defense.png"
        },
        {
            title: "YOU++; | WiSTEM X UW Meet",
            date: "Nov 16 2013",
            time: "10AM – 2PM",
            location: "QNC 1502",
            description: "In collaboration with UW Meet, WiSTEM cordially invites you to YOU++; a conference dedicated to upgrade both your technical and soft skills.",
            link: "https://www.facebook.com/events/318144204991293/",
            image: "img/you.png"
        },
        {
            title: "End-Of-Term Dessert Celebration",
            date: "Aug 1 2013",
            time: "11PM",
            location: "SLC 2134",
            description: "It's your chance to chat with us, talk about WiSTEM's future, and enjoy some sweet treats. Please bring your favourite dessert item",
            link: "https://www.facebook.com/events/559369607462582/",
            image: "img/dessert.png"
        }],
    display: function () {
        populateEventsOnIndex();
        events.upcomingevents.forEach(function (event) {
            $('#upcomingevents').append(HTMLEventRow + event.link + event.image + event.date + HTMLEventDescriptionContainer + event.title + event.time + event.description + HTMLClosingDiv + HTMLClosingDiv);
        });
        events.pastevents.forEach(function (event) {
            $('#pastevents').append(HTMLEventRow + event.link + event.image + event.date + HTMLEventDescriptionContainer + event.title + event.time + event.description + HTMLClosingDiv + HTMLClosingDiv);
        });
    }
};

function replaceEventsWithHTML() {
    events.pastevents.forEach(function (event) {
        event.title = HTMLPastEventTitle.replace("%data%", event.title);
        event.date = HTMLEventDate.replace("%data%", event.date);
        event.description = HTMLEventDescription.replace("%data%", event.description);
        event.image = HTMLEventImage.replace("%data%", event.image);
        event.link = HTMLImageDiv.replace("%data%", event.link);
        if (event.location != "") {
            event.time = HTMLEventTime.replace("%data%", event.time + " in " + event.location);
        }
    });
    events.upcomingevents.forEach(function (event) {
        event.title = HTMLUpcomingEventTitle.replace("%data%", event.title);
        event.date = HTMLEventDate.replace("%data%", event.date);
        event.description = HTMLEventDescription.replace("%data%", event.description);
        event.image = HTMLEventImage.replace("%data%", event.image);
        event.link = HTMLImageDiv.replace("%data%", event.link);
        if (event.location != "") {
            event.time = HTMLEventTime.replace("%data%", event.time + " in " + event.location);
        }
            
    });
}

function replaceIndexEventsWithHTML() {
    mostRecentEvents.forEach(function (event) {
        event.image = HTMLIndexEventPhoto.replace("%data%", event.image);
        event.date = event.date.substring(0, event.date.length - 4);
        event.date = HTMLIndexEventDate.replace("%data%", event.date);
        event.title = HTMLIndexEventTitle.replace("%data%", event.title);
        event.time = HTMLIndexEventTime.replace("%data%", event.time + " in " + event.location);
        event.link = HTMLIndexEventStart.replace("%data%", event.link);
        $("#mostrecentevents").append(event.link + event.image + event.date + event.title + event.time);
    });
}
events.display();
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
