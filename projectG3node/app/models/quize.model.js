module.exports = (sequelize, Sequelize) => {
    const Quize = sequelize.define("quize", {
      quizname: {
        type: Sequelize.STRING,
	unique:true
      },
      time: {
        type: Sequelize.TIME
      },
      count:{
        type: Sequelize.INTEGER
      }
   
      
      
    },
    
    {
      timestamps: false
  });
  
    return Quize;
  };