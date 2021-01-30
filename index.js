function getItemName() {
  const item = document.querySelector("h2.item-title")
  return item.textContent;
}

function createImgElement() {
  const elm = document.createElement("img");
  elm.width = 24;
  elm.src = "https://ffxivteamcraft.com/favicon.ico";
  return elm;
}

function appendIntoParent(anchor) {
  const selector = "div.row div.panel div.pull-left > div.pull-left:nth-child(2)";
  const elm = document.querySelector(selector);
  elm.appendChild(anchor);
}

function createAnchorElement(name, img) {
  const encoded = encodeURIComponent(name);
  const url = `https://ffxivteamcraft.com/search?type=Item&query=${encoded}`;
  const elm = document.createElement("a");
  elm.target = "_blank";
  elm.rel = "noopener noreferrer";
  elm.href = url;
  elm.appendChild(img);
  return elm;
}

function main() {
  const name = getItemName();
  const img = createImgElement()
  const anchor = createAnchorElement(name, img);
  appendIntoParent(anchor);
}

main();
