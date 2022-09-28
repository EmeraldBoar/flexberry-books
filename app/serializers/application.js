import DS from 'ember-data';
import { isNone } from '@ember/utils';

export default DS.JSONSerializer.extend({
  normalize(model, hash) {
    hash = this._super(...arguments);
    return hash;
  },

  keyForRelationship(key, typeClass, method) {
    if (typeClass === 'belongsTo') {
      return `${key}Id`;
    }

    return this._super(...arguments);
  },

  extractRelationship(relationshipModelName, relationshipHash) {
    let hash = relationshipHash.id ? relationshipHash.id : relationshipHash;
    return this._super.call(this, relationshipModelName, hash);
  },

  serializeBelongsTo(snapshot, json, relationship) {
    // this._super(...arguments);
        let key = relationship.key;
        let belongsTo = snapshot.belongsTo(key);

        key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo", "serialize") : key;
        json[key] = isNone(belongsTo) ? belongsTo : parseInt(belongsTo.record.get('id'));
    }
});
