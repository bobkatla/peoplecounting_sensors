// set up
const five = require("johnny-five");
const needle = require('needle');

// buiding id for this devide  is 0, it is hardcorded
const id = 0;

const data = {id};

const board = new five.Board();

board.on("ready", function() {
	// sensor at enter door
	const sensorEnter = new five.Sensor.Digital(6);
	// sensor at exit door
	const sensorExit = new five.Sensor.Digital(7);
	let valEnter = 1;
	let valExit = 1;
	// sensor at enter door run and connect to api
	sensorEnter.on("change", function() {
		let check = this.value - valEnter;
		if (check === -1) {
			needle('put', 'https://peoplecounting-server-api.herokuapp.com/countplus', data, {json: true})
    			.then((res) => {
        			console.log('message: ', res.body);
    			}).catch((err) => {
        			console.error(err);
			});

		}
		valEnter = this.value;
	});
	// sensor at exit door run and connect to api
	sensorExit.on("change", function() {
                let check = this.value - valExit;
                if (check === -1) {
                        needle('put', 'https://peoplecounting-server-api.herokuapp.com/countminus', data, {json: true})
                        .then((res) => {
                                console.log('message: ', res.body);
                        }).catch((err) => {
                                console.error(err);
                        });

                }
                valExit = this.value;
        });

});
