
// Opening animation ends → show password screen
setTimeout(() => {
    document.getElementById("password-screen").classList.remove("hidden");
}, 2800);

// Password Unlock System
document.getElementById("unlock-btn").addEventListener("click", () => {
    let pw = document.getElementById("password-input").value;
    let real = "hey are you otaku I'm also otaku";

    if (pw === real) {
        document.getElementById("password-screen").classList.add("hidden");
        document.getElementById("vault").classList.remove("hidden");
    } else {
        alert("Incorrect Password!");
    }
});

// Upload & Gallery System
document.getElementById("file-upload").addEventListener("change", function () {
    const gallery = document.getElementById("gallery");

    for (let file of this.files) {
        let url = URL.createObjectURL(file);

        let element;

        if (file.type.startsWith("image/")) {
            element = document.createElement("img");
            element.src = url;
        } else if (file.type.startsWith("video/")) {
            element = document.createElement("video");
            element.src = url;
            element.controls = true;
        }

        gallery.appendChild(element);
    }
});
