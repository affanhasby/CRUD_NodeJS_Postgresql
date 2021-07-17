require('dotenv').config()

module.exports = {
  development: {
    username: 'postgres',
    password: '123456',
    database: 'chapter6',
    host: 'localhost',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: '123456',
    database: 'chapter6',
    host: 'localhost',
    dialect: 'postgres',
  },
  production: {
    username: 'postgres',
    password: '123456',
    database: 'chapter6',
    host: 'localhost',
    dialect: 'postgres',
  },
}