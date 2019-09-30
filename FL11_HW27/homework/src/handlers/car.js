const filesystem = require('fs')
const pathFileName = './db/data.json';
let data;

filesystem.readFile(pathFileName, 'utf-8', (err, inputdata) => {
    if (err) {
        throw err;
    }

    data = JSON.parse(inputdata)
})

exports.getCars = function(req, res, next) {
    res.statusCode = 200;
    return res.json(data);
}

exports.get = function(req, res, next) {
    const id = parseInt(req.params.id, 10);

    const car = data.find(car => parseInt(car.id, 10) === id);

    if (car) {
        res.statusCode = 200;
        return res.json(car);
    }

    res.statusCode = 404;
    return res.send();
}

exports.post = function(req, res, next) {
    const body = req.body;

    const car = data.find(car =>
        car.brand === body.brand &&
        car.model === body.model &&
        car.year === body.year
    );

    if (car) {
        res.statusCode = 409;
        return res.json({"message": 'Car already exists.'} );
    }

    let maxId = data.reduce((acc, cur) => {
        const id = parseInt(cur.id, 10);

        if (acc < id) {
            acc = cur.id;
        }

        return acc;
    }, 0);

    const newCar = {
        id: ++maxId,
        ...body
    };

    data.push(newCar);

    res.statusCode = 201;
    return res.json(newCar);
}

exports.put = function(req, res, next) {
    const id = parseInt(req.params.id, 10);
    const body = req.body;

    let findCar = data.find(car => parseInt(car.id, 10) === id);

    if (!findCar) {
        res.statusCode = 404;
        return res.send();
    }

    findCar = {
        ...findCar,
        ...body
    }
    findCar.id = id;

    for (let i = 0; i < data.length; i++) {
        let car = data[i];
        if (parseInt(car.id, 10) === id) {
            data[i] = findCar;
        }
    }

    res.statusCode = 200;
    return res.json(findCar);
}

exports.delete = function(req, res, next) {
    const id = parseInt(req.params.id, 10);

    let existsCar = data.some(car => parseInt(car.id, 10) === id);

    if (!existsCar) {
        res.statusCode = 404;
        return res.send();
    }

    data = data.filter(car => parseInt(car.id, 10) !== id);

    res.statusCode = 200;
    return res.json({"message": "The car has been successfully removed"});
}
