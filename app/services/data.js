import Service from '@ember/service';
import ENV from 'flexberry-books/config/environment';
import { A } from '@ember/array'

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set('speakers', A());
  },

  async getSpeakers() {
    try {
      let response = await fetch(`${ENV.backendURL}/authors`);
      let speakers = await response.json();
      this.get('speakers').clear();
      this.get('speakers').pushObjects(speakers);
      return this.get('speakers');

    } catch(error) {
      throw new Error(error);
    }
  },

  async getBooks() {
    try {
      let response = await fetch(`${ENV.backendURL}/books`);
      return response.json();
    } catch(error) {
      throw new Error(error);
    }
  },

  getSpeaker(id) {
    return this.get('speakers').find((speaker) => speaker.id === parseInt(id));
  },

  deleteSpeaker(speaker) {
    return this.get('speakers').removeObject(speaker);
  },

  async createSpeaker(speaker) {
    try {
      await fetch(`${ENV.backendURL}/authors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(speaker),
      });
    } catch(error) {
      throw new Error(error);
    }

  }
});
