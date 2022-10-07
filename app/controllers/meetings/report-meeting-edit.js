import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveReport(evt) {
      evt.preventDefault();
      const reportModel = this.get('model.reports');
      reportModel.setProperties({
        speaker: this.get('speaker'),
        book: this.get('book'),
        presentationURL: this.get('presentationURL'),
        videoURL: this.get('videoURL'),
        review: this.get('review'),
        rating: this.get('rating'),
        meeting: this.get('model.reports.meeting')
      });

      await reportModel.save();
      this.transitionToRoute('meetings.create', this.get("model.reports.meeting.id"));
    },

    cancel(evt) {
      evt.preventDefault();
      this.transitionToRoute('meetings.create', this.get("model.reports.meeting.id"));
    }
  }
});
