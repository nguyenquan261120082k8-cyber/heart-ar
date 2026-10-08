const model = document.getElementById("heartModel");

let rotating = true;

function resetModel() {

    model.cameraOrbit = "0deg 75deg 105%";
    model.cameraTarget = "auto auto auto";

}

function toggleRotation() {

    rotating = !rotating;

    model.autoRotate = rotating;

}