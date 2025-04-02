import auth from './auth.middleware.js';

const middleware = {};

/*
* add your middlewares here
* example: db.isAdmin = isAdmin
*/
middleware.auth = auth;

export default middleware;