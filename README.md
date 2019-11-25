# Installation 

- Run the following commands in your terminal 

> - git clone https://github.com/a-madhukar/products-test.git
> - cd products-test
> - npm install 


# Scenario 

A backend endpoint returns an array of products. However, some of these products have empty details. The name may be empty, the price might be 0, or the category is blank. 

# Problem

- Go to **app.js**. You'll find an array of objects called products. 
- Calculate the total sum where the object has valid key => value pairs. Don't count empty, null or 0 values. 
- The price in the object is in cents. So convert it back to a decimal/currency value. 
- There's a method called **totalSumOfProducts**. Write your logic there. 

# Testing 

Once you're satisfied with your code, just run **npm run test**, and it should tell you if your code works. 

Make sure at least one of the test passes. :) 

# Bonus Problem

- Each of the products in the array can have a different set of keys. Instead of name, price, and category.

- The object could have keys like item_name, item_price, item_category, and item_warranty_period, etc. 

- write a function that dynamically checks that the object has valid key value pairs, and calculates the total price. 

- Ignore all objects where the values are empty, blank, 0, null or undefined. 