function toggleMode() {
    document.body.classList.toggle('dark-mode');
    let mode = localStorage.getItem("mode");
    if (mode == "light" || mode == null)
        localStorage.setItem("mode", "dark");
    else
        localStorage.setItem("mode", "light");
}

function setMode() {
    let mode = localStorage.getItem("mode");
    console.log(mode);
    if (mode == "dark") {
        console.log("hello");
        document.body.classList.toggle('dark-mode');
    }
}

setMode();

function getName() {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    console.log( page );
}

function toggleLike() {
    let likebutton = document.getElementById("like-button");
    let liketext = document.getElementById("like-text");
    let pagename = getName();
    let liked = localStorage.getItem("liked"+pagename);
    if (liked == null || liked == "false") {
        localStorage.setItem("liked"+pagename, "true");
        console.log("hi");
        likebutton.innerHTML = '<i class="icon-heart fa-solid fa-heart"></i>';
        liketext.innerHTML = "Liked!";
    } else {
        localStorage.setItem("liked"+pagename, "false");
        likebutton.innerHTML = '<i class="icon-heart fa-regular fa-heart"></i>';
        liketext.innerHTML = "Tap heart to like!";
    }
}

function setLike() {
    let likebutton = document.getElementById("like-button");
    let liketext = document.getElementById("like-text");
    let pagename = getName();
    let liked = localStorage.getItem("liked"+pagename);
    if (liked == "true") {
        console.log("hi");
        likebutton.innerHTML = '<i class="icon-heart fa-solid fa-heart"></i>';
        liketext.innerHTML = "Liked!";
    } else {
        likebutton.innerHTML = '<i class="icon-heart fa-regular fa-heart"></i>';
        liketext.innerHTML = "Tap heart to like!";
    }
}

setLike();
