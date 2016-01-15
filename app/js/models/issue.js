App.Models.Issue = Backbone.Model.extend({
  defaults: {
    id: '-1',
    summary: '<EMPTY>',
    todo: '<EMPTY>',
    doing: '<EMPTY>',
    done: '<EMPTY>'
  },

  validate: function(attrs, options) {
    if (!attrs.id || 0 === attrs.id.length) {
      return "An issue must have an id.";
    }
  },

  initialize: function(attrs) {
    //These just extract the attributes for the purpose of the logging command
    var id = attrs.id || "<NONE>";
    var summary = attrs.summary || "<NONE";
    console.log("Initializing a new issue '" +
      id + "' '" + summary + "'."
    );
  }

});
