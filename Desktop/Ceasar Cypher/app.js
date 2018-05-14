
function encrypt() {
	let text = document.getElementById("textbox1").value;
	let textLength =  text.length -1;
	let array = [];
	let shift = 7;
	document.getElementById("swagga").innerHTML = "Message: " ;
	for (let i = 0; i <= textLength; i++) {
			array[i] = text.charAt(i);
			let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
			let letter = array[i];
			let letterPosition = alphabet.indexOf(letter)+1;
			console.log(letterPosition);
            let shiftedPos = (letterPosition + shift) % 26;
            console.log( shiftedPos );
            let shiftedLetPos = alphabet[shiftedPos];
            console.log( shiftedLetPos );
            document.getElementById("swagga").innerHTML += " " + shiftedLetPos;
	};
	console.log(array);
	console.log(shift);
}