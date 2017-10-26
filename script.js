var ideasCollection = [];

$('.save-btn').on('click', newIdea);
$('.cards').on('click', '.delete', deleteIdea);
$('.cards').on('click', '.up-vote', upVote);
$('.cards').on('click', '.down-vote', downVote)
$('.search').on('keyup', searchFilter);

$(document).ready(function() {
	pullFromStorage();
	displayStoredCoards();
})

function Idea(idea, body, quality) {
	this.idea=idea;
	this.body=body;
	this.id=Date.now();
	this.quality= quality || 'swill';
}

// Collecting user input information beforing "shipping" off to DOM and localStorage
function newIdea() {
	event.preventDefault();
	var idea = $('.idea-input').val();
	var body = $('.body-input').val();
	ideaCard = new Idea(idea, body);
	ideasCollection.push(ideaCard);
	sendToStorage(ideasCollection);
	addIdea(ideaCard);  
}

// Sending to the DOM
function addIdea(ideaCard) {
	$('.cards').append(`<article id="${ideaCard.id}" class="idea-cards">
										<div class="card-top"><h2 contenteditable="true" class="append-idea">${ideaCard.idea}</h2> 
										<button class="delete"></button>
										</div>
										<p contenteditable="true" class="append-body">${ideaCard.body}</p>
										<div class="card-bottom">
                    <button class="up-vote"></button>
										<button class="down-vote"></button>
                    <label="quality-label">quality:
										<h3 class="quality">${ideaCard.quality}</h3>
                    </label>
                    </div>
										</article>`);
	$('.idea-input').val("");
  $('.body-input').val("");
  $('.idea-input').focus();
}

// Sending to localStorage
function sendToStorage(ideasCollection) {
		localStorage.setItem('ideas', JSON.stringify(ideasCollection));
}

function pullFromStorage() {
	ideasCollection = JSON.parse(localStorage.getItem('ideas')) || []
}

//Displaying persisted cards 
function displayStoredCoards() {
	ideasCollection.forEach(function (idea){
		addIdea(idea);
	})
}

function deleteIdea() {
	$(this).parents('.idea-cards').remove();
	deleteFromStorage()
}

function deleteFromStorage(id) {
	pullFromStorage();
	var index = ideasCollection.findIndex( function(idea) {
  return idea.id === id;
	});
 ideasCollection.splice(index, 1);
 sendToStorage(ideasCollection)
}

function upVote() {
	//refactor this repeated code!! 
	var quality = $(this).parent().find('h3').text()
	if(quality === 'swill') {
  	$(this).parent().find('h3').text("plausible")
	} else {
		$(this).parent().find('h3').text('genius');
	}
}

function downVote() {
  var quality = $(this).parent().find('h3').text()
  if(quality === 'genius') {
    $(this).parent().find('h3').text("plausible")
  } else {
    $(this).parent().find('h3').text('swill');
  }
}

function searchFilter() {
	var searchInput = $('.search').val().toLowerCase();
	var searchIdea = $('h2');
	var searchBody = $('p');

for (var i = 0; i<$('article').length ; i++){
  var currentArticle = searchIdea[i].innerHTML + searchBody[i].innerHTML;
  if (currentArticle.toLowerCase().indexOf(searchInput) > -1){
    $('article')[i].style.display = "";
  }else{
    $('article')[i].style.display = "none";
    }
  }
}

















