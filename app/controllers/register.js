import Controller from '@ember/controller';
import ENV from 'flexberry-books/config/environment';

export default Controller.extend({
  iAmRobot: true,
  reset: false,
  actions: {
    async saveUser(evt) {
      let newUser;
      try {
        evt.preventDefault();
        const email = this.get('email');
        const username = email.substring(0, email.indexOf('@'))
        newUser = this.get('store').createRecord('user', {
          username,
          email: this.get('email'),
          password: this.get('password')
        });
        await newUser.save();
        this.transitionToRoute(this.get('previousRouteURL'));

      } catch(error) {
        error.user = newUser;
        this.send("error", error);
      }
    },

    comeBack(evt) {
      evt.preventDefault();
      this.transitionToRoute(this.get('previousRouteURL'));
    },

    async verified(key) {
      try {
        const { success } = await (await fetch(`${ENV.backendURL}/recaptcha?key=${key}`)).json();

        this.set('iAmRobot', !success);
      } catch (error) {
        this.set('reset', true);
      }
    },

    expired() {
      this.set('iAmRobot', true);
    },

    error(error, transition) {
      this.set('errors', error.user.errors);
      return false;
    }
  }
});
