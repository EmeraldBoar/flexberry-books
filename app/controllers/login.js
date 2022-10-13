import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    async login(evt) {
      evt.preventDefault();
      try {
        await this.get('session').authenticate('authenticator:jwt', {
          email: this.get('email'),
          password: this.get('password')
        });
      }
      catch(e) {
        this.send('error', e);
      }
    },
    comeBack(evt) {
      evt.preventDefault();
      this.transitionToRoute(this.get('previousRouteURL'));
    },

    error(error, transition) {
      if (error instanceof Error) {
        return true;
      }

      this.set('errors', error.json.errors);
      return false;
    }
  },

});
