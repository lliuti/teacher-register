import { Router } from 'express';

import TeacherController from './app/controllers/TeacherController';
import SessionController from './app/controllers/SessionController';
import AuthMiddleware from './app/middlewares/AuthMiddleware';

const routes = new Router();

routes.post('/teachers', TeacherController.store);
routes.post('/sessions', SessionController.store);

routes.use(AuthMiddleware);
routes.get('/teachers', TeacherController.index);

export default routes;
