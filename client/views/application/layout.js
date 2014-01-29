Template.layout.helpers({
  policy: function () {
    return Policies.find().count() > 0;
  }
});
