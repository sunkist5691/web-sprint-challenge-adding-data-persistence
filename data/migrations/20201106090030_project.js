
exports.up = function(knex) {
  return knex.schema
// PROJECT
   .createTable('project', tbl => {
      tbl.increments()

      tbl.string('project_name', 128)
         .notNullable()
         .unique()

      tbl.string('description', 128)

      tbl.boolean('completed')
         .defaultTo(false)
   })
// TASK
   .createTable('task', tbl => {
      tbl.increments()

      tbl.string('task_description', 128)
         .notNullable()

      tbl.boolean('completed')
         .defaultTo(false)
   })
// RESOURCE
   .createTable('resource', tbl => {
      tbl.increments()

      tbl.string('resource_name')
         .notNullable()

      tbl.string('resource_description', 128)
   })
// PROJECT_TASK
   .createTable('project_task', tbl => {
      tbl.increments()

      tbl.integer('project_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('project')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')

      tbl.integer('task_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('task')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
   })
// PROJECT_RESOURCE
   .createTable('project_resource', tbl => {
      tbl.increments()

      tbl.integer('project_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('project')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
      
      tbl.integer('resource_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('resource')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
   })

};

exports.down = function(knex) {
   return knex.schema
      .dropTableIfExists('project_resource')
      .dropTableIfExists('project_task')
      .dropTableIfExists('resource')
      .dropTableIfExists('task')
      .dropTableIfExists('project')
};
