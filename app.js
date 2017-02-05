$(() => {
  let logo = new Vivus("logo", {type: 'oneByOne', duration: 200, file:'./assets/logo6.svg'}, finished);

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
