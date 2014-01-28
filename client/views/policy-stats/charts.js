Template.table.helpers({
  policy: function () {
    return Policies.find();
  },
  singleTripCount: function(){
    return Policies.find({'purchased_cover.trip_type': 'Single Trip'}).count();
  },
  annualTripCount: function () {
    return Policies.find({'purchased_cover.trip_type': 'Annual Multi-Trip'}).count();
  },
  backPackerCount: function () {
    return Policies.find({'purchased_cover.trip_type': 'Backpacker'}).count();
  },

  golfAnnualCount: function () {
    return Policies.find({'purchased_cover.trip_type': 'Golf Annual'}).count();
  },
  golfCount: function () {
    return Policies.find({'purchased_cover.trip_type': 'Golf'}).count();
  },

  winterSportsCount: function () {
    return Policies.find({'purchased_cover.trip_type': 'Winter Sports Annual'}).count();
  },

  tripType: function () {
    return Policies.findOne({'purchased_cover.tripType':''});
  } 
  
});


function drawChart(){
  var data1 = {
  labels : ["January","February","March","April","May","June","July"],
  datasets : [
    {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        data : [65,59,90,81,56,55,40]
    },
    {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        data : [28,48,40,19,96,27,100]
    }
    ]
  }

var data2 = [
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

  var data3 = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			data : [65,59,90,81,56,55,40]
		},
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			data : [28,48,40,19,96,27,100]
		}
	]
}
  var ctx = $("#lineChart").get(0).getContext("2d");
  var myLineChart = new Chart(ctx);
  new Chart(ctx).Line(data1);

  var ctx = $("#pieChart").get(0).getContext("2d");
  var myPieChart = new Chart(ctx);
  new Chart(ctx).Pie(data2);

  var ctx = $("#barChart").get(0).getContext("2d");
  var myBarChart = new Chart(ctx);
  new Chart(ctx).Bar(data3);
}

Template.charts.rendered = function(){
  drawChart();

};
