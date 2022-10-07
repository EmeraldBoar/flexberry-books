import DS from 'ember-data';
import { computed } from "@ember/object";

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  patronymic: DS.attr('string'),
  reports: DS.hasMany('report'),

  fullname: computed("firstName", "lastName", function() {
    return `${this.lastName} ${this.firstName}`;
  }),
});
