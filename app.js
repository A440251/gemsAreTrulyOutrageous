/*
Wrapping a piece of code with
(function(){
	})();
is a good habit to get into. 
*/


(function(){
	var app = angular.module('store', []);
	
	app.controller('StoreController', function(){
		this.product = gem;
	});
	
	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'This is a nice dodecahedron',
	}
	
	
})();