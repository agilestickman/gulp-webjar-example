App.Collections.Issue = Backbone.Collection.extend({
  model: App.Models.Issue,
  url: '/api/issues'
})
