
exports.seed = function(knex) {

  return knex('project').insert([
    { project_name: 'Research talent singer' },
    { project_name: 'Build house' },
  ]);

};
