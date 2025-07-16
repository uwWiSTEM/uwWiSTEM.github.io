var mostRecentEvents = [];

var eventCard = (link, image, title, date, time, description) => {
  if(link != "") {
      return `<div class="col-md-4 eventp-upcoming-container">
      <div class="eventp-border-container">
        <div class="eventp-offset-border-upcoming"></div>
      </div>
      <div class="eventp-upcoming">
        <a href="${link}" target="_blank" rel="noopener">
          <div class="event-photo-upcoming" style="background-image:url(${image});"></div>
        </a>
        <div class="eventp-description-container">
          <h2 class="eventp-title">${title}</h2>
          <h6 class="eventp-time">${date}: ${time}</h6>
          <h6 class="eventp-description">${description}</h6>
          <br>
        </div>
    </div>
    `
  } else {
    return `<div class="col-md-4 eventp-upcoming-container">
        <div class="eventp-border-container">
          <div class="eventp-offset-border-upcoming"></div>
        </div>
        <div class="eventp-upcoming">
          <div class="event-photo-upcoming" style="background-image:url(${image});"></div>
          <div class="eventp-description-container">
            <h2 class="eventp-title">${title}</h2>
            <h6 class="eventp-time">${date}: ${time}</h6>
            <h6 class="eventp-description">${description}</h6>
            <br>
          </div>
      </div>
      `
  }
};

var eventCardHome = (link, image) => {
  return `<div class="col-md-4 event-container">
            <div class="event-border-container">
              <div class="event-offset-border"></div>
            </div>
            <div class="event">
              <a href="${link ? link : "#"}" target="_blank" rel="noopener">
                <div class="event-photo" style="background-image:url(${image});"></div>
              </a>
            </div>
          </div>`;

}

var eventSubheading = (title) => {
  return `<h2 class="col-md-12" style="text-align: center;">${title}</h2><br/>`
}

function displayEvents() {
  populateEventsOnIndex();
  initializeSubheadings();

  const $upcoming = $('#upcomingevents');

  if (eventsData.upcomingevents.length > 0) {
    if (eventsData.upcomingevents.length < 3) {
      $upcoming.addClass('centered-events');
    } else {
      $upcoming.removeClass('centered-events');
    }

    eventsData.upcomingevents.forEach(function (event) {
      $upcoming.append(eventCard(event.link, event.image, event.title, event.date, event.time, event.description, event.date));
    });
  }

  eventsData.pastevents.forEach(function (event) {
    $('#pastevents').append(eventCard(event.link, event.image, event.title,  event.date, event.time, event.description));
  });
}

function initializeSubheadings(){
  if (eventsData.upcomingevents.length > 0){
    $('#upcomingevents').append(eventSubheading('Upcoming Events'));
  }
  if (eventsData.pastevents.length > 0){
    $('#pastevents').append(eventSubheading('Past Events'));
  }
}

function replaceIndexEventsWithHTML() {
  mostRecentEvents.forEach((event) => {
    $('#mostrecentevents').append(eventCardHome(event.link, event.image));
  });
}

function populateEventsOnIndex() {
  var i = 0;
  while (i < 3 && i < eventsData.upcomingevents.length) {
    let temp = {
      title: eventsData.upcomingevents[i].title,
      date: eventsData.upcomingevents[i].date,
      description: eventsData.upcomingevents[i].description,
      link: eventsData.upcomingevents[i].link,
      time: eventsData.upcomingevents[i].time,
      image: eventsData.upcomingevents[i].image,
      location: eventsData.upcomingevents[i].location
    };
    mostRecentEvents.push(temp);
    i++;
  }

  if (mostRecentEvents.length != 3) {
    var p = 0;
    for (var j = i; j < 3; j++) {
      let temp = {
        title: eventsData.pastevents[p].title,
        date: eventsData.pastevents[p].date,
        description: eventsData.pastevents[p].description,
        link: eventsData.pastevents[p].link,
        time: eventsData.pastevents[p].time,
        image: eventsData.pastevents[p].image,
        location: eventsData.pastevents[p].location
      };
      mostRecentEvents.push(temp);
      p++;
    }
  }
  replaceIndexEventsWithHTML();
}

displayEvents();
