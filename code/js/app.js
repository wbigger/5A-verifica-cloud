var app = {
	init: function() {
		console.log("init");
		$.getJSON("api/data.json")
		.done(app.onSuccess)
		.fail(app.onError);
	},
	onSuccess(dataJson) {
		console.log(dataJson);
		dataJson.schoolList.forEach(element => {
			let html=`
			<tr>
			<td>${element.nome}</td>
			<td>${element.cognome}</td>
			<td>${element.materia}</td>
		  </tr>`;
		  // Update the table
		$('#dataTable').append(html);
		});
		
		
	},
	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);
