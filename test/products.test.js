const totalSumOfProducts = require('../app'); 
const assert = require('assert'); 


describe('total sum of products', function () {

	it ('should calculate the sum of products when all the keys are the same and there is valid data', function () {

		const products = [
			{
				name: 'item 1', 
				price: 200, 
				category: 'category 1'
			}, 

			{
				name: '', 
				price: 300, 
				category: 'category 2'
			}, 

			{
				name: 'item 3', 
				price: 200, 
				category: 'category 3'
			}
		]; 

		assert.equal(totalSumOfProducts(products), 4); 

	});


	it ('should calculate the total sum when the keys are dynamic and the values are present', function () {
		const products = [
			{
				item_name: 'item 1', 
				price: 200, 
				category: 'category 1'
			}, 

			{
				name: 'name 1', 
				price: 0, 
				category: 'category 2',
				market: 'asia-pacific'
			}, 

			{
				name: 'item 3', 
				item_price: 200, 
				category: 'category 3'
			}
		]; 


		assert.equal(totalSumOfProducts(products), 4); 
	})
})