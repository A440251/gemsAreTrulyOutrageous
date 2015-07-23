/*
Wrapping a piece of code with
(function(){
	})();
is a good habit to get into. 
*/


(function(){
	var app = angular.module('store', []);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	var gems = [
	{
		name: 'Dodecahedron',
		price: 2,
		description: 'This is a nice dodecahedron',
		canPurchase: true,
		sold0ut: true
	},
	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: "A five gem. Some say its between four and six.",
		canPurchase: false,
		soldOut: false
	}
	];
	
	
})();