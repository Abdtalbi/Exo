var data = {
	"Question" : "Aimez-vous Angular ?",
	"Responses": [
		{"name":"Oui","msg":"Bon choix !"},
		{"name":"Non","msg":"Zut !"},
	]
};
module.exports = function(app) {	
	app.get('/getData', function(req, res){
		return res.json(data);
	});
};