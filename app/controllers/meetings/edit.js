import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    setDate(date) {
      this.set('model.date', date);
    },

    async saveMeeting(evt) {
      evt.preventDefault();
      const meetingModel = this.get('model');
      set(meetingModel, 'date', this.get('model.date'))
      await meetingModel.save()
      this.transitionToRoute('meetings');
    },

    async deleteReportItem(report) {
      await report.destroyRecord();
      this.get('store').unloadRecord(report);
    }
  }
});
