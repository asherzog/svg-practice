$(() => {
  let logo = new Vivus("logo", {type: 'oneByOne', duration: 200, file:'./assets/logo6.svg'}, finished);

  function finished(obj) {
    obj.parentEl.classList.add('finished');
    console.log(obj);
  }
});
