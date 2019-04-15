// controls
const divMain = document.getElementById("divMain") as HTMLDivElement;
const canvasMain = document.getElementById("canvasMain") as HTMLCanvasElement;
const buttonLoadImageFile = document.getElementById("buttonLoadImageFile") as HTMLButtonElement;

// buttonLoadImageFile - onclick
buttonLoadImageFile.onclick = (event: Event) => {
    // create imput file element
    let inputImageFile = document.createElement("input") as HTMLInputElement;
    inputImageFile.type = "file";
    inputImageFile.accept = '.tiff';
    inputImageFile.onchange = (event: Event) => {
        // load from file
        let fileReader = new FileReader();
        fileReader.onload = (event: Event) => {
            // after reading decode tiff
            console.log(fileReader.result);
        }
        fileReader.readAsArrayBuffer(inputImageFile.files[0]);
    }
    inputImageFile.click();
}
