document.getElementsByTagName("textarea").forEach((textarea) => {
    textarea.addEventListener("focusout", (e) => window[textarea.id](e));
});

function shuffle(e) {
    console.log(e);
}