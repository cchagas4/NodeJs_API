
module.exports = app => {
    const controller = app.controllers.users;

    app.route('/api/v1/users')
      .get(controller.getUsers)
      .post(controller.createUser);

      app.route('/api/v1/users/:id')
      .get(controller.getUserById)
      .put(controller.createUser)
      .delete(controller.deleteUser);

}