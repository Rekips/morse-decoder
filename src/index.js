const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
	let word = 0, wc=0,  a = [], res='';
	a[0]='';
	for (let i=0; i<expr.length; i+=2) {
		if (expr.slice(i, i+2)==='10') {
			a[word]+='.';
		} else if (expr.slice(i, i+2)==='11') {
			a[word]+='-';
		} else if (expr.slice(i, i+2)==='**') {
			a[word]+='*';
		}
		wc++;
		if (wc === 5) {
			if (a[word] in MORSE_TABLE) {
				res+=MORSE_TABLE[a[word]];
			} else {
				res+=' ';
			}
			word++;
			wc=0;
			a[word]='';
		}
	}
	return res;
}

console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"));

module.exports = {
    decode
}
