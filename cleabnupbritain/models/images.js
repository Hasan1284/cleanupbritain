module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define("Images", {
    url: {type: DataTypes.STRING,allowNull: true}
  });
  /* Images.associate = models =>{
    Images.belongsTo(models.User,{
      foreignKey:{
        allowNull:false,
      }
    })
  }  */
  Images.associate = models =>{
    Images.hasMany(models.Location,{
      onDelete:"cascade"
    })
  }  
  return Images;
};
