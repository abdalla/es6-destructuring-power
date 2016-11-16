# es6-destructuring-power
Simple example to how to use and the power of ES6 Destructuring

### example
Converting array of array to array of object.

Original Data
```
const cars = [
  [ 'Ford', 'F150', '38k USD' ],
  [ 'Chevy', 'Silverado', '35K USD'],
  [ 'Dodge', 'RAM 1500', '29.900K USD' ]
];
```

Result Data
```
[ 
  { brand: 'Ford', model: 'F150', price: '38k USD' },
  { brand: 'Chevy', model: 'Silverado', price: '35K USD' },
  { brand: 'Dodge', model: 'RAM 1500', price: '29.900K USD' } 
]
```

### how to run
```
node index.js
```