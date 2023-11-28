const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findLongestRepetition(sequence) {
    let maxLength = 0, currentLength = 1;
    
    for (let i = 1; i < sequence.length; i++) {
        sequence[i] === sequence[i - 1] ? currentLength++ : (maxLength = Math.max(maxLength, currentLength), currentLength = 1);
    }

    return Math.max(maxLength, currentLength);
}

rl.question('Masukkan urutan DNA: ', (input) => {
  console.log('karakter pengulangan  terpanjang: ' + findLongestRepetition(input));
  rl.close();
});
