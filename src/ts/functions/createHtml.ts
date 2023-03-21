import { getPodcasts } from "../service/api";
import { IProgram } from "../models/IProgram";

const podCastContainer: HTMLElement = document.querySelector(
  ".section__podlist-pods"
) as HTMLElement;
const innerArticle = document.createElement("article");
const textDiv = document.createElement("div");

function createInnerArticle() {
  innerArticle.setAttribute("class", "section__article-innerarticle");
  podCastContainer.appendChild(innerArticle);
  return innerArticle;
}
function createTextDiv() {
  textDiv.setAttribute("class", "section__article-div");
  innerArticle.appendChild(textDiv);
  return textDiv;
}

function createLink(podcast: IProgram) {
  const linkPodcast = document.createElement("a");
  //ändra variabelnamn
  const linkText = document.createTextNode("Lyssna här");
  linkPodcast.setAttribute("href", podcast.programurl);
  linkPodcast.appendChild(linkText);
  textDiv.appendChild(linkPodcast);
}

function createImg(podcast: IProgram) {
  const imgPodcast = document.createElement("IMG");
  //ändra variabelnamn
  imgPodcast.setAttribute("src", podcast.socialimage);
  imgPodcast.setAttribute("alt", "omslagsbild på" + " " + podcast.name);
  imgPodcast.setAttribute("width", "100");
  imgPodcast.setAttribute("height", "100");
  innerArticle.appendChild(imgPodcast);
}

//ändra funktionsnamn
function createDesc(podcast: IProgram) {
  const descPlacement = document.createElement("p");
  const desc = document.createTextNode(podcast.description);
  descPlacement.appendChild(desc);
  textDiv.appendChild(descPlacement);
}

function createHeader(podcast: IProgram) {
  const headerPlacement = document.createElement("h2");
  //ändra variabelnamn
  const programName = document.createTextNode(podcast.name);
  headerPlacement.appendChild(programName);
  textDiv.appendChild(headerPlacement);
}
export async function createHtml() {
  const podCasts = await getPodcasts();
  podCasts.programs.forEach((podcast: IProgram) => {
    createInnerArticle();
    createTextDiv();
    createImg(podcast);
    createLink(podcast);
    createHeader(podcast);
    createDesc(podcast);
  });
}

export default createHtml;
