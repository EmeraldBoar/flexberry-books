import Controller from '@ember/controller';
import RSVP from 'rsvp';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';


export const PER_PAGE = 2;

export default Controller.extend({
  moment: service(),
  queryParams: ['speaker', 'book', 'date', 'page'],
  speaker: '',
  book: '',
  date: '',
  page: 1,

  pages: computed('model.meetings.meta.total', function () {
    const total = Number(this.get('model.meetings.meta.total'));
    if(Number.isNaN(total) || total <= 0) {
      return [];
    }

    return new Array(Math.ceil(total / PER_PAGE))
      .fill()
      .map((value, index) => index + 1);
  }),

  isLastPage: computed('pages', function() {
    return this.get('page') === this.get('pages').length;
  }),

  isFirstPage: computed('pages', function() {
    return this.get('page') === 1;
  }),

  isDisabledButton: computed('speaker', 'book', 'date', function() {
    const speaker = this.get('speaker');
    const book = this.get('book');
    const date = this.get('date');
    return !(speaker || book || date);
  }),


  selectedBook: computed('book', function() {
    const book = this.get('book');
    return book ? this.get('model.books').findBy('id', book) : null;
  }),

  selectedSpeaker: computed('speaker', function() {
    const speaker = this.get('speaker');
    return speaker ? this.get('model.speakers').findBy('id', speaker) : null;
  }),


  actions: {
    async deleteMeeting(meeting) {
      const reports = meeting.get('reports').toArray();
      const copyReports = [...reports];
      const promises = [];

      reports.forEach((report) => promises.push(report.destroyRecord()));
      await RSVP.all(promises);
      copyReports.forEach((report) => this.get('store').unloadRecord(report));
      await meeting.destroyRecord();
      this.get('store').unloadRecord(meeting);
    },

    changeBook(book) {
      this.set('book', book ? book.get('id') : '');
    },
    changeSpeaker(speaker) {
      this.set('speaker', speaker ? speaker.get('id') : '');
    },

    setDate(date) {
      this.set('date', new Date(this.get('moment').moment(date, 'DD/MM/YYYY')).toISOString());
    },

    async filterOut(evt) {
      evt.preventDefault();
      this.set('page', 1);
      const query = {
        speaker: this.get('speaker'),
        date: this.get('date'),
        book: this.get('book'),
        _page: this.get('page'),
        _limit: PER_PAGE
      };
      const meeting = await this.store.query('meeting', query);
      this.set('model.meetings', meeting);
    },

    cancelFilter() {
      this.set('book', '');
      this.set('speaker', '');
      this.set('date', '');
      this.set('page', 1);
      this.send('refreshModel')
    },

    nextPage(evt) {
      evt.preventDefault();
      const page = this.get('page');
      const pagesLength = this.get('pages').length;
      if (page < pagesLength) {
        this.set('page', page + 1);
      }
    },

    previosPage(evt) {
      evt.preventDefault();
      const page = this.get('page');
      if (page > 1) {
        this.set('page', page - 1);
      }
    }
  }
});
