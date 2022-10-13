import Route from '@ember/routing/route';
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";

export default Route.extend(ApplicationRouteMixin, {
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
