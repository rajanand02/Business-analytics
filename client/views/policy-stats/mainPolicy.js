Template.mainPolicy.helpers({
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
  }
});


