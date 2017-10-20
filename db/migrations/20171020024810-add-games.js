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
  return db.createTable('games', {
    id: { type: 'int', primaryKey: true },
    name: 'string',
    round_number: 'int',
    player_turn: 'int',
    player_one_name: 'int',
    player_one_score: 'int',
    player_two_name: 'int',
    player_two_score: 'int',
    player_three_name: 'int',
    player_three_score: 'int',
    player_four_name: 'int',
    player_four_score: 'int'
  });
};

exports.down = function(db) {
  return db.dropTable('games');
};

exports._meta = {
  "version": 1
};
