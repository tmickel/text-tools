class Tools {
    shuffleCharacters(str) {
        const chars = str.split('');
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        shuffleArray(chars);
        return chars.join('');
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

