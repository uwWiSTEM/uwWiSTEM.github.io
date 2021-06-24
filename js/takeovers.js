var HTMLtakeoverSubheading = '<h2 class="col-md-12" style="text-align: center;">%data%</h2><br/>';

// HTML for takeovers on index.html
var HTMLIndextakeoverStart = '<div class="col-md-4 takeover-container"><div class="takeover-border-container"><div class="takeover-offset-border"></div></div><div class="takeover"><a href="%data%" target="_blank">';
var HTMLIndextakeoverPhoto = '<div class="takeover-photo" style="background-image:url(%data%);"></div>';

// HTML for upcoming takeovers
var HTMLUpcomingtakeoverTitle = '<h2 class="takeoverp-title">%data%</h2>';
var HTMLUpcomingtakeoverStart = '<div class="col-md-4 takeoverp-upcoming-container"><div class="takeoverp-border-container"><div class="takeoverp-offset-border-upcoming"></div></div><div class="takeoverp-upcoming"><a href="%data%" target="_blank">';
var HTMLUpcomingtakeoverPhoto = '<div class="takeover-photo-upcoming" style="background-image:url(%data%);"></div>';
var HTMLtakeoverDescriptionContainer = '<div class="takeoverp-description-container">';

// HTML for all takeovers on takeover page
var HTMLtakeoverTime = '<h6 class="takeoverp-time">%data%</h6>';
var HTMLtakeoverDescription = '<h6 class="takeoverp-description">%data%</h6><br>';
var HTMLClosingDiv = '</div>';
var HTMLClosingLink = '</a>';

var mostRecentTakeovers = [];

var takeovers = {
  upcomingtakeovers: [

    ],
  pasttakeovers: [
    {
      title: 'Code Your First Website',
      date: 'June 18',
      time: '7:00pm - 8:30pm',
      location: 'Zoom',
      description: "WiSTEM is hosting a technical workshop where you will get the chance to learn the coding skills required to build a website from scratch using HTML/CSS ⌨️!!⁣",
      link: '',
      image: addtakeoverImagePath("websiteWorkshop.png")
    },
  ],
  display: function () {
    populatetakeoversOnIndex();
    initializeSubheadings();

    takeovers.upcomingtakeovers.forEach(function (takeover) {
      $('#upcomingtakeovers').append(
        takeover.link +
        takeover.image +
        HTMLClosingLink +
        HTMLtakeoverDescriptionContainer +
        takeover.title +
        takeover.time +
        takeover.description +
        HTMLClosingDiv +
        HTMLClosingDiv
      );
    });
    takeovers.pasttakeovers.forEach(function (takeover) {
      $('#pasttakeovers').append(
        takeover.link +
        takeover.image +
        HTMLClosingLink +
        HTMLtakeoverDescriptionContainer +
        takeover.title +
        takeover.time +
        takeover.description +
        HTMLClosingDiv +
        HTMLClosingDiv
      );
    });
  }
};

takeovers.display();

function addtakeoverImagePath(fileName) {
  return "img/takeovers/" + fileName;
}

function initializeSubheadings(){
  if (takeovers.upcomingtakeovers.length > 0){
    $('#upcomingtakeovers').append(HTMLtakeoverSubheading.replace('%data%', 'Upcoming takeovers'));
  }
  if (takeovers.pasttakeovers.length > 0){
    $('#pasttakeovers').append(HTMLtakeoverSubheading.replace('%data%', 'Past takeovers'));
  }
}

function replacetakeoversWithHTML() {
  takeovers.pasttakeovers.forEach(function (takeover) {
    takeover.title = HTMLUpcomingtakeoverTitle.replace('%data%', takeover.title);
    takeover.description = HTMLtakeoverDescription.replace('%data%', takeover.description);
    takeover.time = HTMLtakeoverTime.replace('%data%', takeover.date + ' @ ' + takeover.time);
    takeover.image = HTMLUpcomingtakeoverPhoto.replace('%data%', takeover.image);
    takeover.link = HTMLUpcomingtakeoverStart.replace('%data%', takeover.link);
  });
  takeovers.upcomingtakeovers.forEach(function (takeover) {
    takeover.title = HTMLUpcomingtakeoverTitle.replace('%data%', takeover.title);
    takeover.description = HTMLtakeoverDescription.replace('%data%', takeover.description);
    takeover.time = HTMLtakeoverTime.replace('%data%', takeover.date + ' @ ' + takeover.time);
    takeover.image = HTMLUpcomingtakeoverPhoto.replace('%data%', takeover.image);
    takeover.link = HTMLUpcomingtakeoverStart.replace('%data%', takeover.link);
  });
}

function replaceIndextakeoversWithHTML() {
  mostRecenttakeovers.forEach(function (takeover) {
    takeover.image = HTMLIndextakeoverPhoto.replace('%data%', takeover.image);
    takeover.link = HTMLIndextakeoverStart.replace('%data%', takeover.link);
    $('#mostrecenttakeovers').append(takeover.link + takeover.image + HTMLClosingLink+ HTMLClosingDiv);
  });
}

function populatetakeoversOnIndex() {
  var i = 0;
  while (i < 3 && i < takeovers.upcomingtakeovers.length) {
    let temp = {
      title: takeovers.upcomingtakeovers[i].title,
      date: takeovers.upcomingtakeovers[i].date,
      description: takeovers.upcomingtakeovers[i].description,
      link: takeovers.upcomingtakeovers[i].link,
      time: takeovers.upcomingtakeovers[i].time,
      image: takeovers.upcomingtakeovers[i].image,
      location: takeovers.upcomingtakeovers[i].location
    };
    mostRecenttakeovers.push(temp);
    i++;
  }
  if (mostRecenttakeovers.length != 3) {
    var p = 0;
    for (var j = i; j < 3; j++) {
      let temp = {
        title: takeovers.pasttakeovers[p].title,
        date: takeovers.pasttakeovers[p].date,
        description: takeovers.pasttakeovers[p].description,
        link: takeovers.pasttakeovers[p].link,
        time: takeovers.pasttakeovers[p].time,
        image: takeovers.pasttakeovers[p].image,
        location: takeovers.pasttakeovers[p].location
      };
      mostRecenttakeovers.push(temp);
      p++;
    }
  }
  replacetakeoversWithHTML();
  replaceIndextakeoversWithHTML();
}
