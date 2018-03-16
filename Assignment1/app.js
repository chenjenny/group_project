const book1Button = document.getElementById("book1");
const book2Button = document.getElementById("book2");
const book3Button = document.getElementById("book3");
const book4Button = document.getElementById("book4");


const message = document.createElement("h1");
document.body.appendChild(message);

const answers = document.createElement('select');
document.body.appendChild(answers);

const submit = document.createElement("button");
submit.textContent = "submit";
document.body.appendChild(submit);

//Book 1 I can read with my eyes shut!
book1Button.onclick = function () {
	document.body.style.background = "white";
	document.body.style.color = "black";
	message.textContent = book1.value +
		" “The more that you read, the more things you will -----. The more that you learn, the more places you'll go.” ";
	answers.innerHTML = "";
	const options = ["know", "toe", "sew"];
	for (let i = 0; i < options.length; i++) {
		const option = document.createElement('option');
		option.textContent = options[i];
		answers.add(option);
	}

	submit.onclick = function () {
		const answer = answers.value;
		if (answer == "know") {
			message.textContent = book1.value +
				" “The more that you read, the more things you will know. The more that you learn, the more places you'll go.” ";

		} else {
			message.textContent = "ummm no! 🙄";
		}
	}
}

//Book 2 Horton hears a who!
book2Button.onclick = function () {
	document.body.style.background = "white";
	document.body.style.color = "black";
	message.textContent = book2.value +
		"“A person's a person, no matter how ----.” "
	answers.innerHTML = "";
	const options = ["big", "small", "far"];
	for (let i = 0; i < options.length; i++) {
		const option = document.createElement('option');
		option.textContent = options[i];
		answers.add(option);
	}
}

submit.onclick = function () {
	const answer = answers.value;
	if (answer == "small") {
		message.textContent = book1.value +
			" “A person's a person, no matter how small.” ";

	} else {
		message.textContent = "Try again! 😓";
	}
}


//Book 3 Oh the places you'll go!
book3Button.onclick = function () {
	document.body.style.background = "white";
	document.body.style.color = "black";
	message.textContent = book3.value +
		" “Congratulations! Today is your day. You're off to ------ ! You're off and away!” "
}
answers.innerHTML = "";
const options = ["work", "school", "Great Places"];
for (let i = 0; i < options.length; i++) {
	const option = document.createElement('option');
	option.textContent = options[i];
	answers.add(option);
}
submit.onclick = function () {
	const answer = answers.value;
	if (answer == "Great Places") {
		message.textContent = book1.value +
			" “Congratulations! Today is your day. You're off to Great Places! You're off and away!” ";

	} else {
		message.textContent = "WRONG! 😫";
	}
}

//Book 4 Happy birthday to you!
book4Button.onclick = function () {
	document.body.style.background = "white";
	document.body.style.color = "black";
	message.textContent = book4.value +
		" “Today you are You, that is truer than true. There is no one alive who is Youer than ----.” "
}
answers.innerHTML = "";
const option = ["you", "me", "us"];
for (let i = 0; i < options.length; i++) {
	const option = document.createElement('option');
	option.textContent = options[i];
	answers.add(option);
}
submit.onclick = function () {
	const answer = answers.value;
	if (answer == "you") {
		message.textContent = book1.value +
			" “Today you are You, that is truer than true. There is no one alive who is Youer than You.” ";

	} else {
		message.textContent = "WRONG! 😫";
	}
}
