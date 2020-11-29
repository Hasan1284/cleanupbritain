module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define("Location", {
    location_latitude: {type: DataTypes.STRING,allowNull: false},
    location_longitude: {type: DataTypes.STRING,allowNull: false},
    zip: {type: DataTypes.STRING,allowNull: false},
    city_name: {type: DataTypes.STRING,allowNull: false},
    image: {type: DataTypes.STRING,allowNull: false},
    status: {type: DataTypes.BOOLEAN,allowNull: false}
  });

/*  Location.associate = models =>{
    Location.hasMany(models.User,{
      onDelete:"cascade"
    })
  }   */
  Location.associate = models =>{
    Location.belongsTo(models.Images,{
      foreignKey:{
        allowNull:false,
      }
    }),
    Location.belongsTo(models.User,{
      foreignKey:{
        allowNull:false,
      }
    })
  } 

  return Location;
};
