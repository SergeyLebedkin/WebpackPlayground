// controls
const buttonLoadImageFile = document.getElementById("buttonLoadImageFile") as HTMLButtonElement;

// buttonLoadImageFile - onclick
buttonLoadImageFile.onclick = (event: Event) => {
    // inputImageFile
    const inputImageFile = document.getElementById("inputImageFile") as HTMLInputElement;
    inputImageFile.accept = '.tiff';
    inputImageFile.onchange = (event: Event) => {
        // load from file
        let fileReader = new FileReader();
        fileReader.onload = (event: Event) => {
            console.log(fileReader.result);
        }
        fileReader.readAsArrayBuffer(inputImageFile.files[0]);
    }
    inputImageFile.click();
};