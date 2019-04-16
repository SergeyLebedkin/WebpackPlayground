import { ImageInfo } from "./ImageInfo";

// call external js function from dependencies
declare function PrintHello(): void;
PrintHello();

// create ImageInfo
let imageInfo = new ImageInfo("This is an image name");

// create heater
let heater = document.createElement("h1");
heater.innerText = imageInfo.name + " " + imageInfo.regions.length;
document.body.appendChild(heater);
