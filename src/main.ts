import {SVGPathData} from "svg-pathdata";

const pathData = new SVGPathData (`
  M 10 10
  H 60
  V 60
  L 10 60
  Z`);

console.log(pathData.commands);
