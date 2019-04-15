import { MLRegionInfo } from "./MLWeb/MLRegionInfo";
import { MLImageInfo } from "./MLWeb/MLImageInfo";

// create region
let region = new MLRegionInfo(0, 0, 100, 100);
// create image
let imageInfo = new MLImageInfo();

// write console
console.log(imageInfo.image);