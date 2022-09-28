import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  pages: DS.attr('number'),
  image: DS.attr('string'),
  tags: DS.attr(),
  description: DS.attr('string'),
  rating: DS.attr('string'),
  reports: DS.hasMany('report')
});
