import { getPodcasts } from "../service/api";
import type { IProgram } from "../models/IProgram";

const podCastContainer: HTMLElement = document.querySelector(
  ".section__podlist-pods"
) as HTMLElement;

function createInnerArticlePodcast() {
  const innerArticle = document.createElement("article");
  innerArticle.setAttribute("class", "section__article-innerarticle");
  return innerArticle;
}
function createImgPodcast(podcast: IProgram) {
  const imgPodcast = document.createElement("IMG");
  imgPodcast.setAttribute("src", podcast.socialimage);
  imgPodcast.setAttribute("alt", "omslagsbild på" + " " + podcast.name);
  imgPodcast.setAttribute("width", "100");
  imgPodcast.setAttribute("height", "100");
  return imgPodcast;
}
function createTextDivPodcast() {
  const textDiv = document.createElement("div");
  textDiv.setAttribute("class", "section__article-div");
  return textDiv;
}

function createLinkPodcast(podcast: IProgram) {
  const linkPodcast = document.createElement("a");
  const linkText = document.createTextNode("Lyssna här");
  linkPodcast.setAttribute("href", podcast.programurl);
  linkPodcast.appendChild(linkText);
  return linkPodcast;
}

function createDescPodcast(podcast: IProgram) {
  const descPodcast = document.createElement("p");
  const descText = document.createTextNode(podcast.description);
  descPodcast.appendChild(descText);
  return descPodcast;
}

function createHeaderPodcast(podcast: IProgram) {
  const headerPodcast = document.createElement("h2");
  const podcastName = document.createTextNode(podcast.name);
  headerPodcast.appendChild(podcastName);
  return headerPodcast;
}
export async function createHtml() {
  const podCasts = await getPodcasts();
  console.log(podCasts);
  podCasts.programs.forEach((podcast: IProgram) => {
    const innerArticle = createInnerArticlePodcast();
    podCastContainer.appendChild(innerArticle);

    const imgPodcast = createImgPodcast(podcast);
    innerArticle.appendChild(imgPodcast);

    const textDiv = createTextDivPodcast();
    innerArticle.appendChild(textDiv);

    const headerPodcast = createHeaderPodcast(podcast);
    textDiv.appendChild(headerPodcast);

    const descPodcast = createDescPodcast(podcast);
    textDiv.appendChild(descPodcast);

    const linkPodcast = createLinkPodcast(podcast);
    textDiv.appendChild(linkPodcast);
  });
}

export default createHtml;
