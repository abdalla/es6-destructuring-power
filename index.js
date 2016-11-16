const cars = [
  [ 'Ford', 'F150', '38k USD' ],
  [ 'Chevy', 'Silverado', '35K USD'],
  [ 'Dodge', 'RAM 1500', '29.900K USD' ]
];

const carsObjct = cars.map(([brand, model, price]) => {
    return { brand, 
             model, 
             price 
    };
});

console.log(carsObjct);