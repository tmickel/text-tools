class Tools {
    shuffle(str) {
        console.log(str);
        return str;
    }
}

const tools = new Tools();
const textareas = document.getElementsByTagName("textarea");
for (let textarea of textareas) {
    textarea.addEventListener("focusout", (e) => {
        const str = e.target.value;
        const result = tools[textarea.id](str);
        document.getElementById(`${textarea.id}-result`).innerHTML = result;
    });
}

