import Component from '@ember/component';

export default Component.extend({
  // didReceiveAttrs() {
  //   this._super(...arguments);
  //   console.log(this.get('report'));
  // }
  actions: {
    deleteMeeting() {
      this.onClick(this.get('meeting'));
    }
  }
});
