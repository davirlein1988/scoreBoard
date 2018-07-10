function getScore(){
	$.get('fight_score.json', function(data){
		jQuery.each(data, function() {
			$('#scoreBoard').append('<tr><td>"'data.name'"</td></tr>');
			$('#scoreBoard').append('<tr><td>"'data.fight_score'"</td></tr>');
		});
	});
}

$(function() {
	getScore();

	$('post-score-form').submit(function(event) {
		event.preventDefault();
		$.post('fight_score.json',$('post-score-form').serialize(), function(data){
			$('#message').html('new score added');

			$('post-score-form')[0].reset();
			getScore();
		});
	});

});