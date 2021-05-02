class Tools {
    shuffleCharacters(str) {
        const chars = [...str];
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
const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(tools)).filter(name => name !== "constructor");
for (let method of methods) {
    const div = document.createElement("div");
    const label = document.createElement("h3");
    label.innerHTML = method;
    div.appendChild(label);

    const input = document.createElement("textarea");
    div.appendChild(input);
    
    const button = document.createElement("button");
    button.innerHTML = "▶ Run";
    button.addEventListener("click", (e) => {
        output.value = tools[method](input.value);
    })
    div.appendChild(button);

    const output = document.createElement("textarea");
    output.placeholder = "Result";
    output.autocomplete = "off";
    div.appendChild(output);
    
    document.body.appendChild(div);
}
