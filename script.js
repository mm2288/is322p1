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
    {img:'images/animal.jpg', artist:"Kesha", year:"2009", name:"Animal"},
    {img:'images/warrior.jpg', artist:"Kesha", year:"2012", name:"Warrior"},
    {img:'images/rainbow.jpg', artist:"Kesha", year:"2017", name:"Rainbow"},
    {img:'images/highroad.jpg', artist:"Kesha", year:"2020", name:"High Road"},
    {img:'images/famemonster.jpg', artist:"Lady Gaga", year:"2009", name:"The Fame Monster"},
    {img:'images/bornthisway.jpg', artist:"Lady Gaga", year:"2011", name:"Born This Way"},
    {img:'images/artpop.jpg', artist:"Lady Gaga", year:"2013", name:"ARTPOP"},
    {img:'images/joanne.jpg', artist:"Lady Gaga", year:"2016", name:"Joanne"},
    {img:'images/oneoftheboys.jpg', artist:"Katy Perry", year:"2008", name:"One of the Boys"},
    {img:'images/teenage.jpg', artist:"Katy Perry", year:"2012", name:"Teenage Dream: the Complete Confection"},
    {img:'images/prism.jpg', artist:"Katy Perry", year:"2013", name:"Prism"},
    {img:'images/witness.jpg', artist:"Katy Perry", year:"2017", name:"Witness",},
    {img:'images/fearless.jpg', artist:"Taylor Swift", year:"2008", name:"Fearless"},
    {img:'images/speaknow.jpg', artist:"Taylor Swift", year:"2010", name:"Speak Now"},
    {img:'images/red.jpg', artist:"Taylor Swift", year:"2012", name:"Red"},
    {img:'images/1989.jpg', artist:"Taylor Swift", year:"2014", name:"1989"},
    {img:'images/reputation.jpg', artist:"Taylor Swift", year:"2017", name:"Reputation"},
    {img:'images/lover.jpg', artist:"Taylor Swift", year:"2019", name:"Lover"},
    {img:'images/dontforget.jpg', artist:"Demi Lovato", year:"2008", name:"Don't Forget"},
    {img:'images/here.jpg', artist:"Demi Lovato", year:"2009", name:"Here We Go Again"},
    {img:'images/unbroken.jpg', artist:"Demi Lovato", year:"2011", name:"Unbroken"},
    {img:'images/demi.jpg', artist:"Demi Lovato", year:"2013", name:"Demi"},
    {img:'images/confident.jpg', artist:"Demi Lovato", year:"2015", name:"Confident"},
    {img:'images/tellme.jpg', artist:"Demi Lovato", year:"2017", name:"Tell Me You Love Me"},
    {img:'images/yours.jpg', artist:"Ariana Grande", year:"2013", name:"Yours Truly"},
    {img:'images/myeverything.jpg', artist:"Ariana Grande", year:"2014", name:"My Everything"},
    {img:'images/dangerous.jpg', artist:"Ariana Grande", year:"2016", name:"Dangerous Woman"},
    {img:'images/sweetener.jpg', artist:"Ariana Grande", year:"2018", name:"Sweetener"},
    {img:'images/thankunext.jpg', artist:"Ariana Grande", year:"2019", name:"thank u, next"},
    {img:'images/breakout.jpg', artist:"Miley Cyrus", year:"2008", name:"Breakout"},
    {img:'images/time.jpg', artist:"Miley Cyrus", year:"2009", name:"The Time Of Our Lives"},
    {img:'images/cant.jpg', artist:"Miley Cyrus", year:"2010", name:"Can't Be Tamed"},
    {img:'images/bangerz.jpg', artist:"Miley Cyrus", year:"2013", name:"Bangerz"},
    {img:'images/dead.jpg', artist:"Miley Cyrus", year:"2015", name:"Miley Cyrus & Her Dead Petz"},
    {img:'images/younger.jpg', artist:"Miley Cyrus", year:"2017", name:"Younger Now"},
    {img:'images/reflection.jpg', artist:"Fifth Harmony", year:"2015", name:"Reflection"},
    {img:'images/727.jpg', artist:"Fifth Harmony", year:"2016", name:"7/27"},
    {img:'images/selftitled.jpg', artist:"Fifth Harmony", year:"2017", name:"Fifth Harmony"},
    {img:'images/music.jpg', artist:"Rihanna", year:"2005", name:"Music Of The Sun"},
    {img:'images/agirl.jpg', artist:"Rihanna", year:"2006", name:"A Girl Like Me"},
    {img:'images/goodgirl.jpg', artist:"Rihanna", year:"2008", name:"Good Girl Gone Bad: Reloaded"},
    {img:'images/ratedr.jpg', artist:"Rihanna", year:"2009", name:"Rated R"},
    {img:'images/loud.jpg', artist:"Rihanna", year:"2010", name:"Loud"},
    {img:'images/talkthat.jpg', artist:"Rihanna", year:"2012", name:"Talk That Talk (Deluxe)"},
    {img:'images/unapologetic.jpg', artist:"Rihanna", year:"2012", name:"Unaplogetic"},
    {img:'images/anti.jpg', artist:"Rihanna", year:"2016", name:"ANTI"},
    {img:'images/dangerously.jpg', artist:"Beyonc&eacute;", year:"2003", name:"Dangerously In Love"},
    {img:'images/bday.jpg', artist:"Beyonc&eacute;", year:"2007", name:"B'Day Deluxe Edition"},
    {img:'images/sasha.jpg', artist:"Beyonc&eacute;", year:"2008", name:"I AM...SASHA FIERCE"},
    {img:'images/4.jpg', artist:"Beyonc&eacute;", year:"2011", name:"4"},
    {img:'images/beyonce.jpg', artist:"Beyonc&eacute;", year:"2014", name:"BEYONC&Eacute;"},
    {img:'images/lemonade.jpg', artist:"Beyonc&eacute;", year:"2016", name:"Lemonade"},
    {img:'images/baby.jpg', artist:"Britney Spears", year:"1999", name:"...Baby One More Time"},
    {img:'images/oops.jpg', artist:"Britney Spears", year:"2000", name:"Oops!... I Did It Again"},
    {img:'images/britney.jpg', artist:"Britney Spears", year:"2001", name:"Britney"},
    {img:'images/inthezone.jpg', artist:"Britney Spears", year:"2003", name:"In The Zone"},
    {img:'images/blackout.jpg', artist:"Britney Spears", year:"2007", name:"Blackout"},
    {img:'images/circus.jpg', artist:"Britney Spears", year:"2009", name:"Circus"},
    {img:'images/femme.jpg', artist:"Britney Spears", year:"2011", name:"Femme Fatale"},
    {img:'images/jean.jpg', artist:"Britney Spears", year:"2013", name:"Britney Jean"},
    {img:'images/glory.jpg', artist:"Britney Spears", year:"2016", name:"Glory"}
	];

	function renderList (results) {
		var tableBody = document.querySelector('#results-table tbody');

		// clear out inner HTML to get rid of any older results
		tableBody.innerHTML = '';
		// Map each database record to a string containing the HTML for it's row

    var tableRows = results.map(function (result, index) {
			return '<tr><td>' + '<img src="'+result.img+'">' + '</td></tr>' + '<tr><td>' +result.artist + '</td></tr>' + '<tr><td>' + result.year + '</td></tr>' + '<tr><td>' +
					result.name + '</td></tr>';
		});


    /*var tableRows = results.map(function (result, index) {
			return '<div class="griditem">' + '<img src="'+result.img+'">' + '</div><div class="griditem">' +result.artist + '</div><div class="griditem">' + result.year + '</div><div class="griditem">' +
					result.name + '</div>';
		});*/

		// Set the contents of the table body to the new set of rendered HTML rows
		tableRows.forEach(function (row) {
			tableBody.innerHTML += row; // += adds to HTML instead of overwriting it entirely.
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
			});
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

	// Function to filter out unname results
	function togglename(showname) {
		// If showname is TRUE, only display name results
		// Filter will only inclue objects that return TRUE from it's query
		var filteredResults = products.filter(function (result) {
			// If showname is TRUE, always show.
			// Otherweise only show if name is TRUE
			return showname || result.name;
		});
		renderList(filteredResults);
	}
	// Change events trigger after the value of a form input changes
	document.querySelector('#name').addEventListener('change', function(event){
		// in this case value is a string that we need to convert to a boolean
		var value = event.target.value === 'true';
		togglename(value);
	});



})(); // Wrap entire file in self executing function.
      // Keeping all variables declared in this file inside a local scope.
