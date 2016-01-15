App.Views.Report = Backbone.View.extend({

  events: {
    'click .controls .refresh': 'refresh'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'refresh');
  },

  render: function() {
    var $container = this.$('.listing').empty();

    App.Issues.each(function(issue) {
      new App.Views.Issue({
        model: issue,
        $container: $container
      }).render();
    });

    return this;
  },

  refresh: function() {
    App.Issues.fetch();
  }
});
