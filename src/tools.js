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
const buttons = document.getElementsByTagName("button");
for (let button of buttons) {
    button.addEventListener("click", (e) => {
        const op = button.id;
        const input = document.getElementById(`${op}-input`).value;
        const result = tools[op](input);
        document.getElementById(`${op}-result`).innerHTML = result;
    });
}

