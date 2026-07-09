document.getElementById("learnMoreBtn").addEventListener("click", () => {
    window.scrollTo({
        top: document.getElementById("features").offsetTop,
        behavior: "smooth"
    });
});
function downloadGitHub() {
    window.location.href = "https://raw.githubusercontent.com/USERNAME/REPO/main/FILENAME.zip";
}

function downloadArchive() {
    // Replace with your actual Archive.org file link
    window.location.href = "https://archive.org/download/ITEMID/FILENAME.zip";
}

function downloadIconPack() {
    // Replace with your actual Archive.org file link
    window.location.href = "https://archive.org/download/ITEMID/FILENAME.zip";
}
