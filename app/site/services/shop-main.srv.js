(function() {

	angular
		.module('shopApp')
		.service('shopMainSrv', shopMain);

	function shopMain() {
		var self = this;

		self.leftContent = [{
			header: 'Hand Crafted',
			body: 'Our fresh materials  travel to Toronto, where we remove all the excess moisture from the freshly cut wood. Our local suppliers kiln-dry and season each individual piece to ensure the highest protection and durability. Once there, skilled local artisans deploy their talent and creative fiber to work the wood into the stunning final products you see in our stores.'
		}, 
		{
			header: 'Made with Love',
			body: 'It is a delight to convey our unwavering love of wood.The last critical step of the journey is where the beautifully grained wood is warmed with Scrabblr’s uniquely blended lacquer finish at our in-house facility. Only then is the Scrabblr piece ready to meet with its new owner.'
		}, 
		{
			header: 'Stackable',
			body: 'Get one or a whole bunch. Make your home an escape, a retreat and a refuge, but also a portal into an inner world – a place for inspiration and renewal. Scrabblr loves to create it by conjuring the right ambiance that gives one a place to shine and unwind.'
		}];

		self.rightImage = [
		'assets/img/right-1.jpg',
		'assets/img/right-2.jpg',
		'assets/img/right-3.jpg',
		'assets/img/right-5.jpg',
		'assets/img/right-4.jpg',
		'assets/img/right-6.jpg'
		]
	}

})();