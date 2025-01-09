"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "John Doe",
          password: "password",
          age: 30,
          email: "aaa@gmail.com",
          phone: 123456789,
        },
        {
          username: "John Doe2",
          password: "password",
          age: 30,
          email: "aaa@gmail.com",
          phone: 123456789,
        },
        {
          username: "John Doe3",
          password: "password",
          age: 30,
          email: "aaa@gmail.com",
          phone: 123456789,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
