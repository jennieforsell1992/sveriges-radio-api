import { getPodcasts } from "../service/api";
import type { IProgram } from "../models/IProgram";

const podCastContainer: HTMLElement = document.querySelector(
  ".section__podlist-pods"
) as HTMLElement;

function createInnerArticlePodcast() {
  const innerArticlePodcast = document.createElement("article");
  innerArticlePodcast.setAttribute("class", "section__article-innerarticle");
  return innerArticlePodcast;
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
  const textDivPodcast = document.createElement("div");
  textDivPodcast.setAttribute("class", "section__article-div");
  return textDivPodcast;
}

function createLinkPodcast(podcast: IProgram) {
  const linkPodcast = document.createElement("a");
  const linkTextPodcast = document.createTextNode("Lyssna här");
  linkPodcast.setAttribute("href", podcast.programurl);
  linkPodcast.appendChild(linkTextPodcast);
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
  podCasts.programs.forEach((podcast: IProgram) => {
    const innerArticlePodcast = createInnerArticlePodcast();
    podCastContainer.appendChild(innerArticlePodcast);

    const imgPodcast = createImgPodcast(podcast);
    innerArticlePodcast.appendChild(imgPodcast);

    const textDivPodcast = createTextDivPodcast();
    innerArticlePodcast.appendChild(textDivPodcast);

    const headerPodcast = createHeaderPodcast(podcast);
    textDivPodcast.appendChild(headerPodcast);

    const descPodcast = createDescPodcast(podcast);
    textDivPodcast.appendChild(descPodcast);

    const linkPodcast = createLinkPodcast(podcast);
    textDivPodcast.appendChild(linkPodcast);
  });
}

export default createHtml;
