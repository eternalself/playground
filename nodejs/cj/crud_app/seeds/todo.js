
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      const todos = [{
        title: 'testing 1',
        priority: 1,
        date: new Date()
      }, {
          title: 'testing 2',
          priority: 2,
          date: new Date()
      }, {
          title: 'testing 3',
          priority: 3,
          date: new Date()
      }, {
          title: 'testing 4',
          priority: 4,
          date: new Date()
      }];

      return knex('todo').insert(todos);
    });
};
