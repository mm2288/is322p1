var foo = 'foo'; // Variables declared outside of any function are considered global variables.
				 // These variables can be found on the window object.
(function () {
	// Any kind of function, will create a new variable scope. Variables declared in this
	// function will only be accesible inside this function, unless passed by reference through
	// a function call.

	// Lower level scope will always overwrite a higher level scope.
	var foo = 'bar';
	console.log(foo); // 'bar'
	// Global Variables can still be accessed through window object
	console.log(window.foo); // 'foo'

	// An array of Objects, similar to database records we will eventually be dealing with.
	var products = [
    {img:'images/animal.jpg', artist:"Kesha", year:"2009", name:"Animal (Expanded Edition)", price:"13.99"},
    {img:'images/warrior.jpg', artist:"Kesha", year:"2012", name:"Warrior (Expanded Edtion)", price:"13.99"},
    {img:'images/rainbow.jpg', artist:"Kesha", year:"2017", name:"Rainbow", price:"9.99"},
    {img:'images/highroad.jpg', artist:"Kesha", year:"2020", name:"High Road", price:"10.99"},
    {img:'images/famemonster.jpg', artist:"Lady Gaga", year:"2009", name:"The Fame Monster (Deluxe Edition)", price:"13.99"},
    {img:'images/bornthisway.jpg', artist:"Lady Gaga", year:"2011", name:"Born This Way", price:"9.99"},
    {img:'images/artpop.jpg', artist:"Lady Gaga", year:"2013", name:"ARTPOP", price:"9.99"},
    {img:'images/joanne.jpg', artist:"Lady Gaga", year:"2016", name:"Joanne", price:"6.99"},
    {img:'images/oneoftheboys.jpg', artist:"Katy Perry", year:"2008", name:"One of the Boys", price:"4.99"},
    {img:'images/teenage.jpg', artist:"Katy Perry", year:"2012", name:"Teenage Dream: the Complete Confection", price:"12.99"},
    {img:'images/prism.jpg', artist:"Katy Perry", year:"2013", name:"Prism (Deluxe Version)", price:"11.99"},
    {img:'images/witness.jpg', artist:"Katy Perry", year:"2017", name:"Witness (Deluxe Version)", price:"11.99"},
    {img:'images/fearless.jpg', artist:"Taylor Swift", year:"2008", name:"Fearless (Platinum Edition)", price:"14.99"},
    {img:'images/speaknow.jpg', artist:"Taylor Swift", year:"2010", name:"Speak Now", price:"10.99"},
    {img:'images/red.jpg', artist:"Taylor Swift", year:"2012", name:"Red", price:"11.99"},
    {img:'images/1989.jpg', artist:"Taylor Swift", year:"2014", name:"1989", price:"10.99"},
    {img:'images/reputation.jpg', artist:"Taylor Swift", year:"2017", name:"Reputation", price:"13.99"},
    {img:'images/lover.jpg', artist:"Taylor Swift", year:"2019", name:"Lover", price:"11.99"},
    {img:'images/dontforget.jpg', artist:"Demi Lovato", year:"2008", name:"Don't Forget", price:"6.99"},
    {img:'images/here.jpg', artist:"Demi Lovato", year:"2009", name:"Here We Go Again", price:"6.99"},
    {img:'images/unbroken.jpg', artist:"Demi Lovato", year:"2011", name:"Unbroken", price:"6.99"},
    {img:'images/demi.jpg', artist:"Demi Lovato", year:"2013", name:"Demi", price:"6.99"},
    {img:'images/confident.jpg', artist:"Demi Lovato", year:"2015", name:"Confident (Deluxe Edition)", price:"12.99"},
    {img:'images/tellme.jpg', artist:"Demi Lovato", year:"2017", name:"Tell Me You Love Me (Deluxe)", price:"12.99"},
    {img:'images/yours.jpg', artist:"Ariana Grande", year:"2013", name:"Yours Truly", price:"7.99"},
    {img:'images/myeverything.jpg', artist:"Ariana Grande", year:"2014", name:"My Everything (Deluxe)", price:"9.99"},
    {img:'images/dangerous.jpg', artist:"Ariana Grande", year:"2016", name:"Dangerous Woman", price:"12.99"},
    {img:'images/sweetener.jpg', artist:"Ariana Grande", year:"2018", name:"Sweetener", price:"11.99"},
    {img:'images/thankunext.jpg', artist:"Ariana Grande", year:"2019", name:"thank u, next", price:"11.99"},
    {img:'images/breakout.jpg', artist:"Miley Cyrus", year:"2008", name:"Breakout", price:"9.99"},
    {img:'images/time.jpg', artist:"Miley Cyrus", year:"2009", name:"The Time Of Our Lives", price:"9.03"},
    {img:'images/cant.jpg', artist:"Miley Cyrus", year:"2010", name:"Can't Be Tamed", price:"9.99"},
    {img:'images/bangerz.jpg', artist:"Miley Cyrus", year:"2013", name:"Bangerz (Deluxe Edition)", price:"13.99"},
    {img:'images/dead.jpg', artist:"Miley Cyrus", year:"2015", name:"Miley Cyrus & Her Dead Petz", price:"9.99"},
    {img:'images/younger.jpg', artist:"Miley Cyrus", year:"2017", name:"Younger Now", price:"9.99"},
    {img:'images/reflection.jpg', artist:"Fifth Harmony", year:"2015", name:"Reflection (Deluxe)", price:"12.99"},
    {img:'images/727.jpg', artist:"Fifth Harmony", year:"2016", name:"7/27 (Deluxe)", price:"12.99"},
    {img:'images/selftitled.jpg', artist:"Fifth Harmony", year:"2017", name:"Fifth Harmony", price:"9.99"},
    {img:'images/music.jpg', artist:"Rihanna", year:"2005", name:"Music Of The Sun", price:"9.99"},
    {img:'images/agirl.jpg', artist:"Rihanna", year:"2006", name:"A Girl Like Me", price:"9.99"},
    {img:'images/goodgirl.jpg', artist:"Rihanna", year:"2008", name:"Good Girl Gone Bad: Reloaded", price:"9.99"},
    {img:'images/ratedr.jpg', artist:"Rihanna", year:"2009", name:"Rated R", price:"9.99"},
    {img:'images/loud.jpg', artist:"Rihanna", year:"2010", name:"Loud", price:"9.99"},
    {img:'images/talkthat.jpg', artist:"Rihanna", year:"2012", name:"Talk That Talk (Deluxe)", price:"11.99"},
    {img:'images/unapologetic.jpg', artist:"Rihanna", year:"2012", name:"Unaplogetic (Deluxe Version)", price:"11.99"},
    {img:'images/anti.jpg', artist:"Rihanna", year:"2016", name:"ANTI (Deluxe)", price:"13.99"},
    {img:'images/dangerously.jpg', artist:"Beyonc&eacute;", year:"2003", name:"Dangerously In Love", price:"12.99"},
    {img:'images/bday.jpg', artist:"Beyonc&eacute;", year:"2007", name:"B'Day Deluxe Edition", price:"16.99"},
    {img:'images/sasha.jpg', artist:"Beyonc&eacute;", year:"2008", name:"I AM...SASHA FIERCE", price:"9.99"},
    {img:'images/4.jpg', artist:"Beyonc&eacute;", year:"2011", name:"4 (Expanded Edition)", price:"11.99"},
    {img:'images/beyonce.jpg', artist:"Beyonc&eacute;", year:"2014", name:"BEYONC&Eacute;", price:"15.99"},
    {img:'images/lemonade.jpg', artist:"Beyonc&eacute;", year:"2016", name:"Lemonade", price:"15.99"},
    {img:'images/baby.jpg', artist:"Britney Spears", year:"1999", name:"...Baby One More Time", price:"9.99"},
    {img:'images/oops.jpg', artist:"Britney Spears", year:"2000", name:"Oops!... I Did It Again", price:"9.99"},
    {img:'images/britney.jpg', artist:"Britney Spears", year:"2001", name:"Britney", price:"9.99"},
    {img:'images/inthezone.jpg', artist:"Britney Spears", year:"2003", name:"In The Zone", price:"9.99"},
    {img:'images/blackout.jpg', artist:"Britney Spears", year:"2007", name:"Blackout", price:"9.99"},
    {img:'images/circus.jpg', artist:"Britney Spears", year:"2009", name:"Circus (Deluxe Edition)", price:"11.99"},
    {img:'images/femme.jpg', artist:"Britney Spears", year:"2011", name:"Femme Fatale (Deluxe Version)", price:"11.99"},
    {img:'images/jean.jpg', artist:"Britney Spears", year:"2013", name:"Britney Jean", price:"10.99"},
    {img:'images/glory.jpg', artist:"Britney Spears", year:"2016", name:"Glory (Deluxe Version)", price:"12.99"},
		{img:'images/19.jpg', artist:"Adele", year:"2008", name:"19", price:"9.99"},
		{img:'images/21.jpg', artist:"Adele", year:"2011", name:"21", price:"10.99"},
		{img:'images/25.jpg', artist:"Adele", year:"2016", name:"25", price:"10.99"}
	];

	function renderList (results) {
		var albums = document.querySelector('#albums');

		// clear out inner HTML to get rid of any older results
		albums.innerHTML = '';
		// Map each database record to a string containing the HTML for it's row


		var items = results.map(function (result, index) {
			return '<div class="items">' + '<img src="'+result.img+'">' + '<br>' + '<div class="text">' + result.artist + '<br>' + result.year + '<br>' +
					result.name + '<br>' + '$' + result.price + '</div></div>';
		});

		// Set the contents of the table body to the new set of rendered HTML rows
		items.forEach(function (row) {
			albums.innerHTML += row; // += adds to HTML instead of overwriting it entirely.
		});

		// Lower level scope once again overwrites what's above it.
		var foo = 'renderList';
		console.log(foo); // 'renderList'
	}

	renderList(products);

	// Function to Order results list
	function orderBy(sortValue) {
		// Sort method varies based on what type of value we're sorting
		var sortedResults = (sortValue === 'artist') ?
			products.sort(function (a, b) { // Strings need to be sorted in a slightly more compldex way
				var artistA = a.artist.toUpperCase(); // ignore upper and lowercase
				var artistB = b.artist.toUpperCase(); // ignore upper and lowercase
				// Sorts alphabetically.  -1 puts it before. 1 puts it after
				if (artistA < artistB) {
				    return -1;
				}
				if (artistA > artistB) {
				    return 1;
				}
			}) :
			products.sort(function (a, b) { // Numbers a booleans are much simpler.
												// Just need postive or negative number
				// Object properties can be accessed through a string representing their artist
				return a[sortValue] - b[sortValue];

			})

		renderList(sortedResults);
	}

	// Change events trigger after the value of a form input changes
	document.querySelector('#orderBy').addEventListener('change', function(event){
		// Event is the JavaScript event that transpired, in our change a CHANGE event.
		// Target is the element it was performed on, useful for when the event targets
		// multiple elements.
		// Value has the artist implies is the current value of the input element, if there is one
		orderBy(event.target.value);
	});



	// Function to filter by low to high or high to low
	function orderPrice(direction) {
		var sortedResult = products.sort(function(a, b) {
			if (direction == 'ltoh') {
				return a.price - b.price;
			}
			else {
				return b.price - a.price;
			}
		});

		renderList(sortedResult);
	}
	// Change events trigger after the value of a form input changes
	document.querySelector('#priceBy').addEventListener('change', function(event){
		// in this case value is a string that we need to convert to a boolean
		//var val = event.target.value;
		orderPrice(event.target.value);
	});



})(); // Wrap entire file in self executing function.
      // Keeping all variables declared in this file inside a local scope.
