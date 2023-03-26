export default {
  "development": {
    "username": "root",
    "password": "myPassword",
    "database": "phonesfactorydb",
    "host": "localhost",
    "port": 3306,
    "dialect": "mariadb",
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "localhost",
    "dialect": "mariadb",
    "port": "3306"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "localhost",
    "dialect": "mariadb",
    "port": "3306"
  }
};