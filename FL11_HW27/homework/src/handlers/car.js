const filesystem = require('fs');
let data;

function GetData(callback, FileBack = false) {
    data = JSON.parse(filesystem.readFileSync('./db/data.json', 'utf8'));

    if (FileBack) {
        filesystem.writeFileSync('./db/data.json', JSON.stringify(data), 'utf8');
    }
    return callback();
}

function getItemById(id) {
    return GetData(() => {
        let car = data.find(function (car) {
            return car.id === Number(id)
        });
        if (car) {
            return ({status: 200,body: car})
        } else {
            return ({status: 404,body: 'No such id'})
        }
    }, false);
}

function addCar(id, brand, model, engineVolume, year) {
    return GetData(() => {
        let addCar = {id: id,brand: brand,model: model,engineVolume: engineVolume,year: year};
        let car = data.find(function (car) {
            return car.id === Number(addCar.id);
        });
        if (!car) {
            data.push(addCar);
            return {status: 201,body: addCar}
        } else {
            return {status: 409,body: {"message": 'Car already exists.'}}
        }
    }, true);
}

function getFull(){
    return GetData(() =>{
        return{status: 200,body:data}
    })
}

function putItemById(id, brand, model, engineVolume, year){
    return GetData(()=>{
        let car =  data.find(function (car) {
            return car.id === Number(id)
        })
        if(car){
            car.brand = brand;
            car.model = model;
            car.engineVolume = engineVolume;
            car.year = year
            return{status: 200,body: {"message": "The car has been successfully updated"}
            }
        }else{
            return {status: 404}
        }
    })
}

function deleteItemById(id){
    return GetData(()=>{
        let car = data.find(function (car) {
            return car.id === Number(id);
        });
        if(car){
            let car = data.find(function (car) {
                return car.id !== Number(id);
            })
            return {status: 200,body:{"message": "The car has been successfully removed"}}
        }else{
            return { status: 404, body:{"message" : "Car with such id has not been found"}}
        }

    })
}

module.exports.getItemById = getItemById;
module.exports.addCar = addCar;
module.exports.getFull = getFull;
module.exports.putItemById = putItemById;
module.exports.deleteItemById = deleteItemById;
