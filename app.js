$(() => {
  let logo = new Vivus("logo", {type: 'oneByOne', duration: 200, file:'./assets/logo6.svg'}, finished);

  var flky = new Flickity( '.pics', {
    accessibility: true,
    adaptiveHeight: false,
    autoPlay: 5000,
    cellAlign: 'center',
    cellSelector: undefined,
    contain: false,
    draggable: true,
    dragThreshold: 3,
    freeScroll: false,
    friction: 0.2,
    groupCells: false,
    initialIndex: 0,
    lazyLoad: false,
    percentPosition: true,
    prevNextButtons: true,
    pageDots: true,
    resize: true,
    rightToLeft: false,
    setGallerySize: true,
    watchCSS: false,
    wrapAround: true
  });

});

function finished(vivus) {
  if (vivus.currentFrame == 200) {
    $('#logo').on('mouseenter', () => {
      if (vivus.currentFrame == 200) {
        vivus.play(-5);
      }
    });
  } else {
    vivus.play(1);
  }
}
