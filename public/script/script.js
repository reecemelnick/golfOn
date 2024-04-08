// const { documentId } = require("firebase/firestore");

function ajaxGET(url, callback) {

    const xhr = new XMLHttpRequest();

    // knock knock
    let value = null;

    //console.log("xhr", xhr);
    xhr.onload = function () {
        value = this.responseText;
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            //console.log('responseText:' + xhr.responseText);

            // callback function
            value = this.responseText;
            callback(this.responseText);

        } else {
            console.log(this.status);
        }
    }
    xhr.open("GET", url);
    xhr.send();

}
console.log("help");

document.getElementById("join-button").addEventListener("click", (e) => {
    window.location.href = "home.html";
})