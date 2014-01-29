Meteor.publish('policies', function () {
  return Policies.find();
});
