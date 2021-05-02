class Tools {
    shuffle(e) {
        console.log(e);
    }
}

const tools = new Tools();
const textareas = document.getElementsByTagName("textarea");
for (let textarea of textareas) {
    console.log(textarea, textarea.id);
    textarea.addEventListener("focusout", (e) => tools[textarea.id](e));
}

