App.Views.Table = Backbone.View.extend({

  template: _.template($('#template-table').html()),

  events: {
    'click #fetch': 'refresh'
  },

  initialize: function(options) {
    _.bindAll(this, 'render', 'refresh');
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var $container = this.$('.listing').empty();
    $container.html(this.template({issues: this.model.models}));
    return this;
  },

  refresh: function() {
    App.Issues.fetch();
  }
});
