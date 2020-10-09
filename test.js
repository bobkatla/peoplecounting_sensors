const needle = require('needle');

const data = {
	id: 0
}

needle('put', 'https://peoplecounting-server-api.herokuapp.com/countplus', data, {json: true})
    .then((res) => {
        console.log(`Status: ${res.statusCode}`);
        console.log('Body: ', res.body);
    }).catch((err) => {
        console.error(err);
    });
