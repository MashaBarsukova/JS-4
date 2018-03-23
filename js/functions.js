const alphabet = "qwertyuiop[]asdfghjkl;/'zxcvbnm,./";
function addKeyboardLayout(alphabet) {
   return alphabet.split("");
}
  console.log (addKeyboardLayout (alphabet));

const keyboard = addKeyboardLayout (alphabet);
  console.log (keyboard);
function getRandCharInRow(row) {
  return keyboard[row][Math.floor(Math.random() * keyboard[row].length)];
}
let row = prompt (`Введите номер строки, где: 0 - верхняя строка,
1 - средняя строка, 2 - нижняя строка!`);
const letter = getRandCharInRow(row);
  console.log(`Случайная буква ${row}-й строки: ${letter}`);

function getRandCharInAlph() {
  const rows = Math.floor(Math.random() * keyboard.length);
  return keyboard[rows][Math.floor(Math.random() * (keyboard[rows].length))];
}
  console.log('Случайная буква алфавита: ', getRandCharInAlph());
