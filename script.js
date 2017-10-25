// $('.save-btn').on('click', addIdea);
$('.save-btn').on('click', newIdea);
$('.cards').on('click', '.delete', deleteIdea);
$('.cards').on('click', '.up-vote', upVote);

$(document).ready(function() {
	// reloadCards();
})

// function reloadCards() {
// 	for(var i in localStorage) {
// 		addIdea(JSON.parse(localStorage[i]))
// 	}
// }

function Idea(idea, body, vote) {
	this.idea=idea;
	this.body=body;
	this.id=Date.now();
	this.vote=vote;
}


// Collecting user input information beforing "shipping" off to DOM and localStorage
function newIdea() {
	event.preventDefault();
	var idea = $('.idea-input').val();
	var body = $('.body-input').val();
	var vote = ('Swill');
	ideaCard = new Idea (idea, body, vote);
	addIdea(ideaCard);  
	sendToStorage(ideaCard);
}

// Sending to the DOM
function addIdea(ideaCard) {
	event.preventDefault();
	// var idea = $('.idea-input').val();
	// var body = $('.body-input').val();
	// var vote = ('Swill')
	// ideaCard
		// console.log(ideaCard.idea)

	$('.cards').append(`<article id="${ideaCard.id}" class="idea-cards">
										<h1 class="append-idea">${ideaCard.idea}</h1>
										<p class="append-body">${ideaCard.body}</p>
										<button class="up-vote"></button>
										<button class="down-vote"></button>
										<button class="delete"></button>
										<h3 class="quality">${ideaCard.vote}</h3>
										</article>`)
}

// Sending to localStorage
function sendToStorage(ideaCard) {
		localStorage.setItem(ideaCard.id, JSON.stringify(ideaCard))
}

function deleteIdea() {
	$(this).parents('.idea-cards').remove();
}


function upVote() {
	var vote = ('Swill');
	if(vote === 'Swill') {
		$(this).parent().find('h3').text('Plausible');
  	vote = ('Plausible');

	} else if (vote === 'Plausible') {
			$(this).parent().find('h3').text('Genius');
			vote = ('Genius')
	}
}



















