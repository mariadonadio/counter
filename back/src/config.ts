import environment from "./environment/environment";

const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: environment.DB_HOST,
      user: environment.DB_USER,
      password: environment.DB_PASS,
      database: environment.DB_NAME,
      port: environment.DB_PORT
    }
  };

module.exports = config;