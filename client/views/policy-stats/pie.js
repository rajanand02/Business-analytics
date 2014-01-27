
function drawChart(){
var data = [
	{
		value: 30,
		color:"#F38630"
	},
	{
		value : 50,
		color : "#E0E4CC"
	},
	{
		value : 100,
		color : "#69D2E7"
	},			
	{
		value : 100,
		color : "green"
	}			
]
  var ctx = $("#pieChart").get(0).getContext("2d");
  var myNewChart = new Chart(ctx);

  new Chart(ctx).Pie(data);
}

Meteor.startup(function() {

  drawChart();

});
