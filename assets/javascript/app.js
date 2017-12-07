$('#start').on('click',function(){
	$('#start').remove();
for(var i=0;i<questions.length;i++){
		$('#subwrapper').append('<h2' +questions[i].questions+ </h2);
		for(var j=0;j<questions[i].answers.length;j++){
			$("subwrapper").append("input type='radio' name='question-"+1+"'value=' "+questions"[i].answers[j]+" '>"+question[i].ansers[j])
		}
	})

