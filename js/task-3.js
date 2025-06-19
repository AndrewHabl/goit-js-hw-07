class StringBuilder {
    #value
    constructor(value) {
        this.#value = value;
    }
    getValue() {
        return this.#value;
    }
    padEnd(str) {
        this.#value += str;
    }
    padStart(str) {
        this.#value = str + this.#value;
    }
    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}

// Якщо Вам цікаво — можете побачити, наскільки важким був цей тиждень
// що спочатку я вирішив це завдання настільки через одне місце... 
// (залишив стару версію нижче для науки і майбутнього фейспалму)

// class StringBuilder {
//     #value
//     constructor(value) {
//         this.#value = value;
//     }
//     getValue() {
//         return this.#value;
//     }
//     padEnd(str) {
//         this.#value = this.#value.padEnd(this.#value.length+str.length,str)
//     }
//     padStart(str) {
//         this.#value = this.#value.padStart(this.#value.length+str.length,str)
//     }
//     padBoth(str) {
//         this.#value = this.#value.padStart(this.#value.length + str.length, str),
//         this.#value = this.#value.padEnd(this.#value.length+str.length,str)
//     }
// }

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

