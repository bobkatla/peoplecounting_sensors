// this file is for random testing to demonstrate the api connection

const needle = require('needle');

// buiding id for this devide  is 2, it is hardcorded
const id = 2;

const data = {id};

let val = 0;
// check random number to decide that the building will increase or decrease
const check = () => {
	val = parseInt(Math.random()*100) %2;
	if (val === 0) {
		needle('put', 'https://peoplecounting-server-api.herokuapp.com/countplus', data, {json: true})
		.then((res) => {
			console.log('message: ', res.body);
		}).catch((err) => {
			console.error(err);
		});
	} else {
		needle('put', 'https://peoplecounting-server-api.herokuapp.com/countminus', data, {json: true})
		.then((res) => {
			console.log('message: ', res.body);
		}).catch((err) => {
			console.error(err);
		});
	}
};
setInterval(check , 3000);