const products = [
  {
    name     :'item 1',
    price    :10000,
    category :'category 1'
  },

  {
    name     :'',
    price    :10000,
    category :'category 2'
  },

  {
    name     :'item 3',
    price    :10000,
    category :'category 3'
  },

  {
    name     :'item 4',
    price    :10000,
    category :'category 4'
  },

  {
    name     :'item 5',
    price    :0,
    category :'category 5'
  },

  {
    name     :'item 6',
    price    :10000,
    category :null
  },

  {
    name     :'item 7',
    price    :10000,
    category :'category 7'
  }
];

function totalSumOfProducts(products) {
  let sum = 0;

  for (let product of products) {
    let sumChecking = true;

    for (let key in product) {
      if(sumChecking == true) {
        if(product[key] == null || product[key] == '' || product[key] == 0) {
          sumChecking = false;
        }
      }
    }

    if(sumChecking) {
      for (let key in product) {
        if(product[key] > 0) {
          sum += product[key];
        }
      }
    }
  }

  return sum / 100;
}

module.exports = totalSumOfProducts;

