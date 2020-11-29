module.exports = app => {
    const users = require("../services/userService");
  
    var router = require("express").Router();

    router.post("/", users.create);

    router.get("/", users.findAll);

    router.get("/published", users.findAllPublished);

    router.get("/:id", users.findOne);

    router.put("/:id", users.update);

    router.delete("/:id", users.delete);

    router.delete("/", users.deleteAll);
  
    app.use('/users', router);
  };
  