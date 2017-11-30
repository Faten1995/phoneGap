function getQuestions() {
    
    var params = {
        //Request parameters
        "LineCode": "BL",
    }  
    
    $.ajax({
    
      type: 'GET',
      url: 'https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple',
     /* success: function(data) {
        console.log('success',data);  
        
      }*/
        
      data: "{body}",
        
      })
    
     .done(function(data) {
          
         console.log(data);
         //console.log(data.results.length);
        var questionsList = new Array();
        
        for( var x=0; x < data.results.length; x++ ){
           
            var id = x;
            var question =  data.results[x].question;
            var correct_answer =  data.results[x].correct_answer; 
            var incorrect_answers = data.results[x].incorrect_answers;
            var thisQuestion = new Question(id, question, correct_answer, incorrect_answers);
            questionsList.push(thisQuestion)
            
        }
        for(var x=0; x<questionsList.length; x++){
            
            var out= "<li> "+ questionsList[x].fullQuestion +"</li>";
            document.getElementById('questionsList').innerHTML += out;
            
        }
          
      });
    
}
    
      
      
      
 
    
