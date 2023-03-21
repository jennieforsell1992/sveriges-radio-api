import { createHtml } from "./functions/createHtml";
import { toggleLightMode } from "./functions/toggleDarkmode";

function init(): void {
  toggleLightMode();
  void createHtml();
}

init();
