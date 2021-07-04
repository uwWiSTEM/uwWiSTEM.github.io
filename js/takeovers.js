var takeoverCard = (imageCover, imageDetails, title, description, takeoverLocation) => {
  return `<div class="col-md-4 takeoverp-upcoming-container">
            <div class="takeoverp-border-container">
              <div class="takeoverp-offset-border-upcoming">
              </div>
            </div>
            <div class="takeoverp-upcoming">
              <div class="swiper-container">
                ${imageDetails &&
                  `<div class="swiper-button-container">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                  </div>`
                }
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="takeover-photo-upcoming" style="background-image:url(${imageCover});"></div>
                  </div>
                  ${imageDetails &&
                  `<div class="swiper-slide">
                      <div class="takeover-photo-upcoming" style="background-image:url(${imageDetails});"></div>
                  </div>`
                  }
                </div>              
              </div>
              <div class="takeoverp-description-container">
                <h3 class="takeover-title">${title}</h3>
                <h5 class="takeoverp-description">${description}</h5>
                <h6>Takeover Location: <a href="https://www.instagram.com/uwwistem/" targt="_blank" rel="noreferrer">${takeoverLocation}</a></h6>
              </div>
          </div>
          `
};

var takeoverSubheading = (title) => {
  return `<h2 class="col-md-12" style="text-align: center;">${title}</h2><br/>`
}

function displayTakeovers() {
  initializeSubheadings();

  takeovers.upcomingtakeovers.forEach(function (takeover) {
    $('#upcomingtakeovers').append(
      takeoverCard(takeover.imageCover, takeover.imageDetails,  takeover.title, takeover.description, takeover.takeoverLocation)
    );
  });
  takeovers.pasttakeovers.forEach(function (takeover) {
    $('#pasttakeovers').append(
      takeoverCard(takeover.imageCover, takeover.imageDetails, takeover.title, takeover.description, takeover.takeoverLocation)
    );
  });
}

function initializeSubheadings() {
  if (takeovers.upcomingtakeovers.length > 0) {
    $('#upcomingtakeovers').append(takeoverSubheading('Upcoming takeovers'));
  }
  if (takeovers.pasttakeovers.length > 0) {
    $('#pasttakeovers').append(takeoverSubheading('Past takeovers'));
  }
}

function initalizeSwipers() {
  const customSliders = document.querySelectorAll('.swiper-container');
  const customSlidersPrev = document.querySelectorAll('.swiper-button-prev');
  const customSlidersNext = document.querySelectorAll('.swiper-button-next');

  customSliders.forEach((slider, i) => {
    slider.classList.add('swiper-container-' + i);
    customSlidersPrev[i].classList.add('swiper-button-prev-' + i);
    customSlidersNext[i].classList.add('swiper-button-next-' + i);

    newSlider = new Swiper('.swiper-container-' + i, {
      navigation: {
        nextEl: '.swiper-button-next-' + i,
        prevEl: '.swiper-button-prev-' + i,
      },
    });
  })
}

displayTakeovers();
initalizeSwipers();