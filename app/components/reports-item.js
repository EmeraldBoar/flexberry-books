import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteReport() {
      this.onclick(this.get('report'));
    }
  },
});
