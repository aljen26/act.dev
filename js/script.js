
document.addEventListener('DOMContentLoaded', function() {



	// Word juggling effect for the homepage
	const words = ['webapps', 'games', 'softwares', 'tools', 'APIs', 'bots', 'scripts'];
	const juggleSpan = document.querySelector('.word-juggle');
	let idx = 0;
	const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
	function juggleWord(word, callback) {
		let steps = 12; // number of randomizations
		let interval = 60; // ms between randomizations
		let count = 0;
		const juggleInterval = setInterval(() => {
			let fake = '';
			for (let i = 0; i < word.length; i++) {
				fake += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
			}
			juggleSpan.textContent = fake;
			count++;
			if (count >= steps) {
				clearInterval(juggleInterval);
				juggleSpan.textContent = word;
				setTimeout(callback, 2000); // pause for 2s
			}
		}, interval);
	}

	function startJuggle() {
		juggleWord(words[idx], () => {
			idx = (idx + 1) % words.length;
			startJuggle();
		});
	}

	setTimeout(() => {
		startJuggle();
	}, 2000);
	

	// Fade to left effect for name
	const nameSpan = document.querySelector('.my-name');
	setTimeout(() => {
		nameSpan.classList.add('fade-left');
		setTimeout(() => {
			nameSpan.textContent = 'Alejandro Tobias';
			nameSpan.classList.remove('fade-left');
		}, 700); // match transition duration
	}, 1500); // initial delay before fade

});
