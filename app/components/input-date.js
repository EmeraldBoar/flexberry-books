import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);
  },

  didInsertElement() {
    this._super(...arguments);
      $(".datepicker").datepicker({
        clearBtn: true,
        format: "dd.mm.yyyy",
        language: "ru",
        autoclose: true,
      });
  },

  actions: {
    getDate(value) {
      this.onchange(value);
    }
  }
});
