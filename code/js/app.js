var app = {
	init: function() {
		console.log("init");
		$.getJSON("api/data.json")
		.done(app.onSuccess)
		.fail(app.onError);
	},
	onSuccess(dataJson) {
		console.log(dataJson);

		
		// Update the table
		$('#dataTable').DataTable();
		
	},
	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);
