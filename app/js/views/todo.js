App.Views.Todo = Backbone.View.extend({

  template: _.template($('#template-todo').html()),

  initialize: function(options) {
    _.bindAll(this, 'render');
  },

  render: function() {
    var $container = this.$('.listing').empty();
    $container.html(this.template({feature: "Todo"}));
    return this;
  },

});
