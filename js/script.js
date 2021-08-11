function encode(userinput) {
    let selectedfile = userinput.files;
    if (selectedfile.length > 0) {
        let imageFile = selectedfile[0];
        let fileReader = new FileReader();
        fileReader.onload = (fileLoadedEvent) => {
            let srcData = fileLoadedEvent.target.result;
            document.getElementById("output").value = srcData;
            copyToClipboard(srcData);
        };
        fileReader.readAsDataURL(imageFile);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(
        () => {
            console.log("Async: Copying to clipboard was successful!");
            document.getElementById("feedback").innerHTML =
                "Async: Copying to clipboard was successful!";
        },
        (err) => {
            console.error("Async: Could not copy text: ", err.message);
        }
    );
}

function encode2(userinput) {
    let selectedfile = userinput.files;
    if (selectedfile.length > 0) {
        let imageFile = selectedfile[0];
        let fileReader = new FileReader();
        fileReader.onload = (fileLoadedEvent) => {
            let srcData = fileLoadedEvent.target.result;
            return srcData;
        };
        fileReader.readAsDataURL(imageFile);
    }
}
