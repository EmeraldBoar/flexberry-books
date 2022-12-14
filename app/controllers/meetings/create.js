import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { set } from '@ember/object';

export default Controller.extend({
  isDateSelected: computed('model.date', function() {
    return Boolean(this.get('model.date'));
  }),

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
    async addDate(){
      const meetingModel = this.get('model');
      set(meetingModel, 'date', this.get('model.date'))
      await meetingModel.save()
    },

    async cancel(evt) {
      evt.preventDefault();
      const meetingModel = this.get('model');
      await meetingModel.destroyRecord();
      this.get('store').unloadRecord(meetingModel);
      this.transitionToRoute('meetings');
    },

    async deleteReportItem(report) {
      await report.destroyRecord();
      this.get('store').unloadRecord(report);
    }
  }
});
