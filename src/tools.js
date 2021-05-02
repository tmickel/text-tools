const textareas = document.getElementsByTagName("textarea");
for (let textarea of textareas) {
    textarea.addEventListener("focusout", (e) => window[textarea.id](e));
}

function shuffle(e) {
    console.log(e);
}