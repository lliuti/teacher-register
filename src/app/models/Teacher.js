import Sequelize, { Model } from 'sequelize';

class Teacher extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        school: Sequelize.STRING,
        schedule: Sequelize.STRING,
        subject: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Teacher;
