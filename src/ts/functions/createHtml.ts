import { getPodcasts } from "../service/api";
import { IProgram } from "../models/IProgram";

const podCastContainer: HTMLElement = document.querySelector(
  ".section__podlist-pods"
) as HTMLElement;
const innerArticle = document.createElement("article");
const textDiv = document.createElement("div");
let i = 0;

function createInnerArticle() {
  innerArticle.setAttribute("class", "section__article-innerarticle");
  innerArticle.setAttribute("tabindex", "1");
  podCastContainer.appendChild(innerArticle);
  return innerArticle;
}
function createTextDiv() {
  textDiv.setAttribute("class", "section__article-div");
  innerArticle.appendChild(textDiv);
  return textDiv;
}

function createLink(podcast: IProgram) {
  const linkPlacement = document.createElement("a");
  const linkText = document.createTextNode("Lyssna här");
  linkPlacement.setAttribute("href", podcast.programurl);
  linkPlacement.setAttribute("tabindex", "1");
  linkPlacement.appendChild(linkText);
  textDiv.appendChild(linkPlacement);
}

function createImg(podcast: IProgram) {
  const imgPlacement = document.createElement("IMG");
  imgPlacement.setAttribute("src", podcast.socialimage);
  imgPlacement.setAttribute("alt", "omslagsbild på" + " " + podcast.name);
  imgPlacement.setAttribute("width", "100");
  imgPlacement.setAttribute("height", "100");
  innerArticle.appendChild(imgPlacement);
}

function createP(podcast: IProgram) {
  const descPlacement = document.createElement("p");
  const desc = document.createTextNode(podcast.description);
  descPlacement.appendChild(desc);
  textDiv.appendChild(descPlacement);
}

function createHeader(podcast: IProgram) {
  const headerPlacement = document.createElement("h2");
  const programName = document.createTextNode(podcast.name);
  headerPlacement.appendChild(programName);
  textDiv.appendChild(headerPlacement);
}
export async function createHtml() {
  const podCasts = await getPodcasts();
  podCasts.programs.forEach((podcast: IProgram) => {
    i++;
    const innerArticle = createInnerArticle();
    const textDiv = createTextDiv();
    const imgPlacement = createImg(podcast);
    const linkPlacement = createLink(podcast);
    const headerPlacement = createHeader(podcast);
    const descPlacement = createP(podcast);
  });
}

export default createHtml;
