import catIcon from "./catIcon.png";
import nyanCatGif from "./nyan-cat.gif";
import blob from "./blob.png";

import prog1 from "./prog1.svg";
import prog2 from "./prog2.svg";
import prog3 from "./prog3.svg";
import prog4 from "./prog4.svg";
import prog5 from "./prog5.svg";
import prog6 from "./prog6.svg";

const cmmsModules = import.meta.glob(
  "./project-images/cmms*.{png,PNG,jpg,jpeg}",
  { eager: true },
);

export const cmms = {};

for (const path in cmmsModules) {
  const fileName = path.split("/").pop(); // "cmms1.PNG"
  const key = fileName.replace(/\.[^/.]+$/, ""); // "cmms1"
  cmms[key] = cmmsModules[path].default;
}

export const cmmsArray = Object.keys(cmms)
  .sort((a, b) => Number(a.replace("cmms", "")) - Number(b.replace("cmms", "")))
  .map((key) => cmms[key]);

const programming = {
  prog1,
  prog2,
  prog3,
  prog4,
  prog5,
  prog6,
};

export const heroImages = Object.values(programming);

export const images = {
  blob,
};

export const cats = {
  catIcon,
  nyanCatGif,
};
