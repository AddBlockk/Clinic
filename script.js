let center = [46.365347, 48.069093];

function init() {
  let map = new ymaps.Map("map-test", {
    center: center,
    zoom: 17,
  });
}

ymaps.ready(init);
