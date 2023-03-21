import { createHtml } from "./functions/createHtml";
import { toggleLightMode } from "./functions/toggleLightmode";

function init(): void {
  toggleLightMode();
  void createHtml();
}

init();
