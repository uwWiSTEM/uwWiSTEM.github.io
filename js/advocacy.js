var advocacyCard = (title, images, link) => {
  let imageDivs = "";
  for(let index in images) {
    imageDivs += `<div class="swiper-slide">
        <div class="swiper-card-photo" style="background-image:url(${images[index]});"></div>
    </div>`;
  }

  return `<div class="col-md-4 swiper-card-container">
            <div class="swiper-card-border-container">
              <div class="swiper-card-offset-border">
              </div>
            </div>
            <div class="advocacy swiper-card">
              <div class="swiper-container">
                  <div class="swiper-button-container">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                  </div>
                <div class="swiper-wrapper">
                  ${imageDivs}
                </div>
              </div>
              <div class="swiper-card-description-container">
                <h3>${title}</h3>
                <strong><a href="${link}" rel="noreferrer" target="_blank">Link to Instagram Post</a></strong>
              </div>
          </div>
          `
};

function displayAdvocacy() {
  advocacyData.forEach((advocacyPost) => {
    $('#advocacy').append(
      advocacyCard(advocacyPost.title, advocacyPost.images, advocacyPost.link)
    );
  });
}

// Might need this eventually for some sort of seperation
// function initializeSubheadings() {
//   const advocacySubHeading = `<h2 class="col-md-12" style="text-align: center;">${title}</h2><br/>`;
//   $('#advocacy').append(takeoverSubheading('Upcoming advocacy'));
// }

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
        prevEl: '.swiper-button-prev-' + i
      }
    });
  })
}

displayAdvocacy();
initalizeSwipers();