// set up
const five = require("johnny-five");
const needle = require('needle');

// buiding id for this devide  is 0, it is hardcorded
const id = 0;

const data = {id};

const board = new five.Board();

board.on("ready", function() {

	const sensor = new five.Sensor.Digital(8);
	let val = 1;
	sensor.on("change", function() {
		let check = this.value - val;
		if (check === -1) {
			needle('put', 'https://peoplecounting-server-api.herokuapp.com/countplus', data, {json: true})
    			.then((res) => {
        			console.log('message: ', res.body);
    			}).catch((err) => {
        			console.error(err);
			});

		}
		val = this.value;
	});
});
