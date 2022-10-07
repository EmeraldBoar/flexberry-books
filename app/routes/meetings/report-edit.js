import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model({ report_id }) {
    return RSVP.hash({
      reports: this.get('store').findRecord('report', report_id),
      speakers: this.get('store').findAll('speaker'),
      books: this.get('store').findAll('book')
    });
  },
  setupController(controller, model) {
    this._super(...arguments);

    controller.setProperties({
      speaker: model.reports.speaker,
      book: model.reports.book,
      presentationURL: model.reports.presentationURL,
      videoURL: model.reports.videoURL,
      review: model.reports.review,
      rating: model.reports.rating
    })
  }
});
