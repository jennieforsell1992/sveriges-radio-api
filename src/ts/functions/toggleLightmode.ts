const toggleLightModeButton: HTMLButtonElement = document.querySelector(
  ".toggle-btn"
) as HTMLButtonElement;
toggleLightModeButton.addEventListener("click", toggleLightMode);

export function toggleLightMode() {
  document.body.classList.toggle("lightmode");
  if (document.body.classList.contains("lightmode")) {
    toggleLightModeButton.innerHTML = "Välj mörkt läge";
  } else {
    toggleLightModeButton.innerHTML = "Välj ljust läge";
  }
}

export default toggleLightMode;
