
exports.seed = function(knex) {

  return knex('resource').insert([
    { resource_name: 'computer' },
    { resource_name: 'conference room' },
    { resource_name: 'microphone' },
    { resource_name: 'A4 paper' },
    { resource_name: 'printer' },
    { resource_name: 'lots of woods' },
    { resource_name: 'steel' },
    { resource_name: 'saw' },
    { resource_name: 'metal' },
    { resource_name: 'engineers' },
    { resource_name: 'architect' },
    { resource_name: 'music studio' },
    { resource_name: 'producer' }
  ]);

};
