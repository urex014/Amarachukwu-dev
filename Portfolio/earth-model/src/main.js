import { World } from "./World/World.js";

function main() {
  // scene container
  const container = document.querySelector("#globeCanvas");

  // creating new instance of world class
  const world = new World(container);

  // starting world
  world.start();

  // locating on model
  world.findLocation(-14.235, -51.92); // use latitude and longitudes
}

main();
