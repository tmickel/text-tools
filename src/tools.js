class Tools {
    shuffle(str) {
        console.log(str);
    }
}

const tools = new Tools();
const textareas = document.getElementsByTagName("textarea");
for (let textarea of textareas) {
    textarea.addEventListener("focusout", (e) => {
        const str = e.target.value;
        tools[textarea.id](str)
    });
}

