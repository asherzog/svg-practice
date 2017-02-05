$(() => {
  new Vivus("logo", {type: 'oneByOne', duration: 200, file:'./assets/logo5.svg'}, finished);

  function finished(obj) {
    obj.el.classList.add('finished');
  }
});
