const {Sequelize, DataTypes} = require("sequelize");
//const connection = require("./db.js");

const sequelize = new Sequelize(
   	'awasar',
	 'root',
	 'awasar',
	  {
		host: 'localhost',
		dialect: 'mysql'
	  }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const Enquiry = sequelize.define("enquiry", {
   first_name: {
     type: DataTypes.STRING,
     allowNull: false
   },
   last_name: {
     type: DataTypes.STRING,
     allowNull: false
   },
	mother_name: {
     type: DataTypes.STRING,
     allowNull: false
   },
   father_name: {
     type: DataTypes.STRING,
     allowNull: false
   },
	family_income: {
     type: DataTypes.STRING,
     allowNull: false
   },
   school_name: {
     type: DataTypes.STRING,
     allowNull: false
   },
	board_name: {
     type: DataTypes.STRING,
     allowNull: false
   },
	cast_category: {
     type: DataTypes.STRING,
     allowNull: false
   },
	address: {
     type: DataTypes.STRING,
     allowNull: false
   },
	city: {
     type: DataTypes.STRING,
     allowNull: false
   },
	pin_code: {
     type: DataTypes.STRING,
     allowNull: true
   },
	email: {
     type: DataTypes.STRING,
     allowNull: false
   },
	news_letter: {
     type: DataTypes.STRING,
     allowNull: false,
	defaultValue: "yes"
   },
	createdAt: {
      type: DataTypes.DATE,
		allowNull: false,
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      type: DataTypes.DATE,
		allowNull: false,
      defaultValue: sequelize.literal('NOW()')
    }
});

sequelize.sync().then(() => {
   console.log('enquiry table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});