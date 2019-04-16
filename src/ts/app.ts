import { ImageInfo } from "./imageInfo";

declare function PrintHello(): void;
PrintHello();

// create ImageInfo
let imageInfo = new ImageInfo("This is an image name");

// create heater
let heater = document.createElement("h1");
heater.innerText = imageInfo.name;
document.body.appendChild(heater);
