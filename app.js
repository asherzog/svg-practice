$(() => {
  let logo = new Vivus("logo", {type: 'oneByOne', duration: 200, file:'./assets/logo8.svg'}, finished);

  var flky = new Flickity( '.pics', {
    accessibility: true,
    adaptiveHeight: false,
    autoPlay: 10000,
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
    wrapAround: false
  });

  $('.list-group-item').click(changeItem);

});


function changeItem() {
  let $carousel = $('.pics').flickity();
  let index = $(this).index();
  $carousel.flickity( 'select', index );
  let id = $(`#${this.id}`);
  id.siblings().removeClass('active');
  if (!id.hasClass('active')) {
    id.addClass('active');
  }
}

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
