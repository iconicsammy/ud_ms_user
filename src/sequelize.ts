import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';

console.log(4, config.password, config.username);
export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,

  'dialect': config.dialect,
  'storage': ':memory:',
});
