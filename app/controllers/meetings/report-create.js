import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
     async saveReport(evt) {
      evt.preventDefault();
      const newReport = this.get('store').createRecord('report', {
        speaker: this.get('speaker'),
        book: this.get('book'),
        presentationURL: this.get('presentationURL'),
        videoURL: this.get('videoURL'),
        review: this.get('review'),
        rating: this.get('rating'),
        meeting: this.get('model.meetings')
      });

      await newReport.save();
      this.transitionToRoute('meetings.edit', this.get("model.meetings.id"));
    },

    cancel(evt) {
      evt.preventDefault();
      this.transitionToRoute('meetings.edit', this.get("model.meetings.id"));
    }
  }
});
