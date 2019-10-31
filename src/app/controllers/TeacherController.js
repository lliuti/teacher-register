import * as Yup from 'yup';

import Teacher from '../models/Teacher';

class TeacherController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      school: Yup.string().required(),
      schedule: Yup.string().required(),
      subject: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid sent data' });
    }

    const teacher = await Teacher.create(req.body);
    const { name, email, school, schedule, subject } = teacher;

    return res.json({ name, email, school, schedule, subject });
  }

  async index(req, res) {
    const teacher = await Teacher.findAll();
    return res.status(200).json(teacher);
  }
}

export default new TeacherController();
