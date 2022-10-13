import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({
  session: service(),
  currentUser: service(),
  actions: {
    logout(evt) {
      evt.preventDefault();
      this.session.invalidate();
    }
  }
});
