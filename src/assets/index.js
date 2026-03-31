import catIcon from "./catIcon.png";
import nyanCatGif from "./nyan-cat.gif";
import blob from "./blob.png";

import prog1 from "./prog1.svg";
import prog2 from "./prog2.svg";
import prog3 from "./prog3.svg";
import prog4 from "./prog4.svg";
import prog5 from "./prog5.svg";
import prog6 from "./prog6.svg";

import cmms1 from "./project-images/cmms1.PNG";
import law1 from "./project-images/law1.png";

const programming = { prog1, prog2, prog3, prog4, prog5, prog6 };
export const heroImages = Object.values(programming);

export const images = { blob };
export const cats = { catIcon, nyanCatGif };

function loadProjectImages(modules) {
  return Object.keys(modules)
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] ?? "0");
      const numB = parseInt(b.match(/\d+/)?.[0] ?? "0");
      return numA - numB;
    })
    .map((key) => modules[key].default);
}

const cmmsModules = import.meta.glob(
  "./project-images/cmms*.{png,PNG,jpg,jpeg}",
  { eager: true },
);

const lawModules = import.meta.glob(
  "./project-images/law*.{png,PNG,jpg,jpeg}",
  { eager: true },
);

const allCmmsImages = loadProjectImages(cmmsModules);

export const cmmsImages = allCmmsImages.map((src, i) => ({
  src,
  fit: i < 17 ? "cover" : "contain",
}));

export const lawImages = loadProjectImages(lawModules);
