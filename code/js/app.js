var app = {
	init: function() {
		console.log("init");
		$.getJSON("api/data.json")
		.done(app.onSuccess)
		.fail(app.onError);
	},
	onSuccess(dataJson) {
		console.log(dataJson);
		dataJson.commissione.forEach(element =>{
		let html = `		
		<tr>
		<td>${element.Nome}</td>
		<td>${element.Cognome}</td>
		<td>${element.Materia}</td>
		</tr>
		`;
		$("#dataTable").append(html); // PROF: questo va fuori
		});

	},
	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);
