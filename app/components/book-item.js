import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteBook() {
      this.onclick(this.get('book'))
    }
  }
});
