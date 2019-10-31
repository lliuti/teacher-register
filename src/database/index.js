import Sequelize from 'sequelize';

import Teacher from '../app/models/Teacher';
import User from '../app/models/User';
import DatabaseConfig from '../config/database';

const models = [Teacher, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(DatabaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
