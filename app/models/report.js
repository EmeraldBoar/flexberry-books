import DS from 'ember-data';

export default DS.Model.extend({
  presentationURL: DS.attr('string'),
  videoURL: DS.attr('string'),
  review: DS.attr('string'),
  rating: DS.attr('number'),
  user: DS.belongsTo('user'),

  meeting: DS.belongsTo('meeting'),
  book: DS.belongsTo('book'),
  speaker: DS.belongsTo('speaker')
});
