'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('cards', {
    id: { type: 'int', primaryKey: true },
    game_id: 'int',
    suit: 'string',
    value: 'int',
    location: 'string'
  });
};

exports.down = function(db) {
  return db.dropTable('cards');
};

exports._meta = {
  "version": 1
};
