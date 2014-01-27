function drawChart(){
var data = [
	{
		value: Policies.find({'purchased_cover.trip_type': 'Single Trip'}).count(),
		color:"#F38630"
	},
	{
		value :Policies.find({'purchased_cover.trip_type': 'Annual Multi-Trip'}).count(),
		color : "#E0E4CC"
	},
	{
		value : Policies.find({'purchased_cover.trip_type': 'Backpacker'}).count(),
		color : "#69D2E7"
	},			
	{
		value :Policies.find({'purchased_cover.trip_type': 'Golf Annual'}).count(),
		color : "green"
	},
	{
		value :Policies.find({'purchased_cover.trip_type': 'Golf'}).count(),
		color : "red"
    },
	{
		value :Policies.find({'purchased_cover.trip_type': 'Winter Sports Annual'}).count(),
		color : "yellow"
	}			
]
  var ctx = $("#pieChart").get(0).getContext("2d");
  var myNewChart = new Chart(ctx);

  new Chart(ctx).Pie(data);
}

Meteor.startup(function() {

  drawChart();

});
