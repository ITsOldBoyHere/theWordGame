/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('game_word_tb', table =>{
      table.increments('id')
      table.string('users_name', 200)
      table.datetime('date_time', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.double('points')
   
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.dropTable('game_word_tb')
    
  };
  