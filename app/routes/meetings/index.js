import Route from '@ember/routing/route';
import RSVP from 'rsvp';

import { PER_PAGE } from '../../controllers/meetings/index';

export default Route.extend({
  queryParams: {
    speaker: true,
    book: true,
    date: true,
    page: {
      refreshModel: true
    }
  },

  model({speaker, book, date, page}) {
    const query = {
      _embed: 'reports',
      _page: page,
      _limit: PER_PAGE,
    }

    if(speaker) {
      query.speaker = speaker;
    }

    if(book) {
      query.book = book;
    }

    if(date) {
      query.date = date;
    }

    return RSVP.hash({
      meetings: this.get('store').query('meeting', query),
      speakers: this.get('store').findAll('speaker'),
      books: this.get('store').findAll('book')
    });
  },

  actions: {
    refreshModel() {
      this.refresh();
    }
  },

  resetController(controller) {
    controller.set('page', 1);
    controller.set('date', '');
    controller.set('speaker', '');
    controller.set('book', '');
  }
});
