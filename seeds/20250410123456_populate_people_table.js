
exports.seed = function (knex) {
  return knex('people').del()
    .then(function () {
      return knex('people').insert([
        { id: 1, name: 'Alan Doyle', occupation: 'Musician', picture: 'Alan-Doyle.jpg' },
        { id: 2, name: 'Allan Hawco', occupation: 'Actor/Producer', picture: 'Allan-Hawco.jpg' },
        { id: 3, name: 'Mark Critch', occupation: 'Comedian', picture: 'Mark-Critch.jpg' },
        { id: 4, name: 'Bob Cole', occupation: 'Broadcaster', picture: 'Bob-Cole.jpg' },
        { id: 5, name: 'Danny Cleary', occupation: 'NHL player/NHL executive', picture: 'Danny-Cleary.jpg' },
        { id: 6, name: 'Michael Ryder', occupation: 'Former NHL player', picture: 'Michael-Ryder.jpg' },
        { id: 7, name: 'Terry Ryan', occupation: 'Actor and former hockey player', picture: 'Terry-Ryan.jpg' },
        { id: 8, name: 'Brad Gushue', occupation: 'Professional curler', picture: 'Brad-Gushue.jpg' },
        { id: 9, name: 'David Cochrane', occupation: 'Broadcaster', picture: 'David-Cochrane.jpg' },
        { id: 10, name: 'Rick Mercer', occupation: 'Comedian/Former media personality', picture: 'Rick-Mercer.jpg' },
        { id: 11, name: 'George Furey', occupation: 'Member of the Canadian Senate', picture: 'George-Furey.jpg' },
        { id: 12, name: 'Shannon Tweed', occupation: 'Actor/Model', picture: 'Shannon-Tweed.jpg' }
      ]);
    });
};