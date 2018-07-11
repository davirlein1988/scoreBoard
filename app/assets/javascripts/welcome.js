function getScore(){
	$.get("fight_score.json", function(data){
		var list = 0;
		$('table #scoreBoard').empty();
		jQuery.each(data, function(i, val) {
			list ++
			$('table #scoreBoard').append("<tr><th scope='row'>"+list+"</th><td>"+val.name+"</td><td>"+val.fight_score+"</td></tr>");
		});
	});
}

$(function() {
	getScore();

	$('#post-score-form').submit(function(event) {
		event.preventDefault();
		$.post('fight_score.json',$('#post-score-form').serialize(), function(data){
			$('#message').html('New score added!!!');

			$('#post-score-form')[0].reset();
			getScore();
		});
	});

});