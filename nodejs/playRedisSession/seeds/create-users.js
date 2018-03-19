
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(
        [{
          "password":"testp",
          "email": "test"
        }, {
          "email": "dgearty1@mapquest.com",
          "password": "T8pKPeC"
        }, {
          "email": "brabidge2@desdev.cn",
          "password": "BpXNitqfB0s"
        }, {
          "email": "gfolkerts3@examiner.com",
          "password": "Sf5fCVYYz"
        }, {
          "email": "akrop4@house.gov",
          "password": "zua11BvS1PTF"
        }, {
          "email": "asicha5@freewebs.com",
          "password": "RBquASfOXW5"
        }, {
          "email": "rzannelli6@blinklist.com",
          "password": "wMOtvuY3Xc"
        }, {
          "email": "gmattityahou7@uiuc.edu",
          "password": "8GHtyfoa2"
        }]

      );
    });
};
