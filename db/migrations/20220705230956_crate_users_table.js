/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('gameword', table =>{
      table.increments('id')
      table.string('users_name', 200)
      table.datetime('date_time', { precision: 6 }).defaultTo(knex.fn.now(6))
   
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.dropTable('gameword')
    
  };
  