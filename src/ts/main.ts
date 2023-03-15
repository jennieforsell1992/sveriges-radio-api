import { createHtml } from "./functions/createHtml";
import { toggleLightMode } from "./functions/toggleDarkmode";

function init() {
  toggleLightMode();
  createHtml();
}

init();
