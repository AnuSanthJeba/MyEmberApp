export default function() {
 this.get('/questions/:id', (db, request) => {
	let question = db.questions.find(request.params.id);
       // console.log(question.options);
       // console.log(question.questionname);
	// let parts = db.parts.where({car_id: car.id});

    let data = {
      type: 'question',
      id: request.params.id,
      attributes: question,
    };

    return { data };
  });
  
}

