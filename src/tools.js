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

    reverse(str) {
        const chars = [...str];
        chars.reverse();
        return chars.join('');
    }
}

const tools = new Tools();
const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(tools)).filter(name => name !== "constructor");
for (let method of methods) {
    const label = document.createElement("h3");
    label.innerHTML = method;
    document.body.appendChild(label);

    const div = document.createElement("div");
    div.className = "tool";
    
    const input = document.createElement("textarea");
    input.className = "input";
    input.id = method;
    input.placeholder = "Input";
    div.appendChild(input);
    
    const button = document.createElement("button");
    button.innerHTML = "▶ Run";
    button.addEventListener("click", (e) => {
        output.value = tools[method](input.value);
    })
    div.appendChild(button);

    const output = document.createElement("textarea");
    output.className = "output";
    output.placeholder = "Result";
    output.autocomplete = "off";
    div.appendChild(output);
    
    document.body.appendChild(div);
}
