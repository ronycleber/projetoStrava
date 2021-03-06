'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        'equipe_admin', 
        [
          {
            nome: 'Diogo',
            email: 'diogofcar@gmail.com',
            funcao:'dev',
            site: 'https://github.com/Dogix11',
            location: 'Brasil',
            telefone:'999999999',
            img: '/img/diogo.png',
            senha: bcrypt.hashSync('123456',10)
          },
          {
            nome: 'Paulo Ernesto',
            email: 'pauloernestom@gmail.com',
            funcao:'dev',
            site: 'https://github.com/pauloernestom',
            location: 'Brasil',
            telefone:'999999999',
            img: '/img/paulo.png',
            senha: bcrypt.hashSync('123456',10)
          },
          {
            nome: 'Rafael Santana',
            email: 'rafaelsantana7213@gmail.com',
            funcao:'dev',
            site: 'https://github.com/rafalmeida73',
            location: 'Brasil',
            telefone:'999999999',
            img: '/img/rafael.jpg',
            senha: bcrypt.hashSync('123456',10)
          },
          {
            nome: 'Roni Cleber',
            email: 'ronycleber_pm@hotmail.com',
            funcao:'Scrum Master',
            site: 'https://github.com/ronycleber',
            location: 'Brasil',
            telefone:'999999999',
            img: '/img/roni.png',
            senha: bcrypt.hashSync('123456',10)
          }
        ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipe_admin', null, {});
  }
};