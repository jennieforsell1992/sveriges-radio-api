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
function createTextDivPodcast() {
  textDiv.setAttribute("class", "section__article-div");
  innerArticle.appendChild(textDiv);
  return textDiv;
}

function createLinkPodcast(podcast: IProgram) {
  const linkPodcast = document.createElement("a");
  const linkText = document.createTextNode("Lyssna här");
  linkPodcast.setAttribute("href", podcast.programurl);
  linkPodcast.appendChild(linkText);
  textDiv.appendChild(linkPodcast);
}

function createImgPodcast(podcast: IProgram) {
  const imgPodcast = document.createElement("IMG");
  imgPodcast.setAttribute("src", podcast.socialimage);
  imgPodcast.setAttribute("alt", "omslagsbild på" + " " + podcast.name);
  imgPodcast.setAttribute("width", "100");
  imgPodcast.setAttribute("height", "100");
  innerArticle.appendChild(imgPodcast);
}

//ändra funktionsnamn
function createDescPodcast(podcast: IProgram) {
  const descPodcast = document.createElement("p");
  const descText = document.createTextNode(podcast.description);
  descPodcast.appendChild(descText);
  textDiv.appendChild(descPodcast);
}

function createHeaderPodcast(podcast: IProgram) {
  const headerPodcast = document.createElement("h2");
  //ändra variabelnamn
  const programName = document.createTextNode(podcast.name);
  headerPodcast.appendChild(programName);
  textDiv.appendChild(headerPodcast);
}
export async function createHtml() {
  const podCasts = await getPodcasts();
  podCasts.programs.forEach((podcast: IProgram) => {
    createInnerArticle();
    createTextDivPodcast();
    createImgPodcast(podcast);
    createLinkPodcast(podcast);
    createHeaderPodcast(podcast);
    createDescPodcast(podcast);
  });
}

export default createHtml;
