Template.table.helpers({
  policy: function () {
    return Policies.find({},{sort: {"purchased_cover.created_at": -1}});
  }
});
