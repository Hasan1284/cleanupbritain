module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: {type: DataTypes.STRING,allowNull: false},
    surname: {type: DataTypes.STRING,allowNull: false},
    phonenumber: {type: DataTypes.STRING,allowNull: false},
    email: {type: DataTypes.STRING,allowNull: false},
    password: {type: DataTypes.STRING,allowNull: false}
   // addressid: {type: DataTypes.STRING,allowNull: false}
  });
/*   User.associate = models =>{
    User.hasMany(models.Images,{
      onDelete:"cascade",
      onUpdate:"cascade" 
    }),
    User.belongsTo(models.Location,{
      foreignKey:{
        allowNull:false,
      }
    })
  }  */
  User.associate = models =>{
    User.hasMany(models.Location,{
      onDelete:"cascade"
    })
  }  


   
  return User;
};
