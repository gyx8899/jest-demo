/* eslint-disable */
function timerGame(callback) {
	console.log('Ready....go!');
	setTimeout(() => {
		console.log('Times up -- stop!');
		// eslint-disable-next-line no-unused-expressions
		callback && callback();
	}, 1000);
}

module.exports = timerGame;
