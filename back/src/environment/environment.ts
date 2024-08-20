const environment = { 
    //======================
    // PORT
    //======================
    PORT: process.env.PORT || 3333,

    //======================
    // DB
    //======================
    DB_HOST: '127.0.0.1',
    DB_PORT: '8889',
    DB_USER: 'root',
    DB_PASS: 'root',
    DB_NAME:'counterDB',
    VERSION: '1.0.0'
 }; 

export default environment;