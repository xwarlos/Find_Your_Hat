const prompt = require('prompt-sync')({sigint: true});
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(arr) {
        this.field = arr;
        this.coord = [0, 0];
    }

    print() {
        let fila = "";

        for (let i = 0; i < this.field.length; i++) {
            this.field[i].forEach(el => fila += el);
            fila += "\n";
        }
        // Esto es la hostia de feo (para quitar el último salto de línea)
        console.log(fila.substring(0, fila.length - 1));
    }

    play() {

            if (this.field[this.coord[0], this.coord[1]] == hat) {
                console.log("The winner is you");
            } else {
                console.log(this.coord);
                this.field[this.coord[1]][this.coord[0]] = "*";
                this.print()
            }

            readline.question("Where to move? ", dir => {
                switch(dir) {
                    case "left":
                        this.coord[0] -= this.coord[0] == 0 ? 0 : 1;
                        break;
                    case "right":
                        this.coord[0] += this.coord[0] == this.field[0].length - 1 ? 0 : 1;
                        console.log(this.coord);
                        this.play();
                        break;
                    case "down":
                        this.coord[1] -= this.coord[1] == this.field[1].length - 1 ? 0 : 1;
                        break;
                    case "up":
                        this.coord[1] += this.coord[1] == 0 ? 0 : 1;
                        break;
                    default:
                        //
                }
                readline.close();
            });
    }
}

// Se podría implementar una forma de generar el campo aleatoriamente en un futuro
const test = new Field([
    [pathCharacter, fieldCharacter, fieldCharacter],
    [hole, hole, fieldCharacter],
    [fieldCharacter, hole, hat]
]);

test.play();