const db = require("../models");
const Location = db.locations;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  if ((!req.body.location_latitude)&&(!req.body.zip)&&(!req.body.location_longitude)&&(!req.body.image)) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const location = {
    location_latitude: req.body.location_latitude,
    location_longitude: req.body.location_longitude,
    zip: req.body.zip,
    city_name: req.body.city_name,
    status: req.body.status,
    image: req.body.image
 /*    UserId: req.body.UserId,
    ImageId: req.body.ImageId */
       
  };

  Location.create(location)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Location."
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Location.findAll({ where: condition})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving locations."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Location.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Location with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Location.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Location was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Location with id=${id}. Maybe Location was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Location with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Location.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Location was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Location with id=${id}. Maybe Location was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Location with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Location.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Locations were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all locations."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Location.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving locations."
      });
    });
};
