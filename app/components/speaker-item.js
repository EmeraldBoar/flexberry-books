import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteSpeaker() {
      this.onclick(this.get('speaker'))
    }
  }
});
