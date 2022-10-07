import Route from '@ember/routing/route';

export default Route.extend({
  model({ meeting_id }) {
    if(meeting_id !== '0') {
      return this.get('store').findRecord('meeting', meeting_id);
    }

    const newMeeting = this.get('store').createRecord('meeting');
    return newMeeting.save();

  },

  actions: {
    async willTransition(transition) {
      const routeName = transition.targetName;
      if (routeName !== 'meetings.report-meeting-create' && routeName !== 'meetings.index' && routeName !== 'meetings.report-meeting-edit') {
        const meetingModel = this.controller.model;
        await meetingModel.destroyRecord();
        this.get('store').unloadRecord(meetingModel);
      }
    }
  }
});
