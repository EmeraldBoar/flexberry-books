import Route from '@ember/routing/route';

export default Route.extend({
  model({id}) {
    return this.get('store').findRecord('book', id);
  },
  setupController(controller, model) {
    this._super(...arguments);

    controller.setProperties({
      title: model.title,
      author: model.author,
      pages: model.pages,
      image: model.image,
      tags: model.tags,
      description: model.description,
      rating: model.rating
    })
  }
});
