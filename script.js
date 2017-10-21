$('.save-btn').on('click', addIdea);
$('.cards').on('click', '.delete', deleteIdea)


function addIdea(e) {
	e.preventDefault();
	var idea = $('.idea-input').val();
	var body = $('.body-input').val();
	$('.cards').append(`<article class="idea-cards">
										<h1 class="append-idea">${idea}</h1>
										<p class="append-body">${body}</p>
										<button class="up-vote"></button>
										<button class="down-vote"></button>
										<button class="delete"></button>
										<h3 class="quality"></h3>
										</article>`)
}


function deleteIdea() {
	$(this).parents('.idea-cards').remove();
}

