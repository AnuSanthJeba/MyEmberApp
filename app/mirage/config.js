export default function() {
 this.get('/questions/:id', (db, request) => {
	let question = db.questions.find(request.params.id);
    	let data = {
      		type: 'question',
      		id: request.params.id,
      		attributes: question,
    	};
    	return { data };
 });
}

