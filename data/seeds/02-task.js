
exports.seed = function(knex) {

  return knex('task').insert([
    { task_description: 'ask people' },
    { task_description: 'manufacter' },
    { task_description: 'watch youtube' },
    { task_description: 'conference' },
    { task_description: 'planning' },
    { task_description: 'cost calculation' },
    { task_description: 'legal' },
    { task_description: 'create music' }
  ]);

};
