import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalize(model, hash) {
    hash = this._super(...arguments);
    return hash;
  }
});
