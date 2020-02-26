/**
 * @module Database module
 */
const MongoClient = require('mongodb').MongoClient;
const config = require('../config/database.config');
const connectionString = `mongodb://${config.user}:${config.password}@${config.host}:${config.port}/${config.db}`;
// connection handler
let connection;

/**
 * @description Function connecting and reusing connections to database
 * @param cb {function}
 * @private
 */
function __connect (cb) {
  if (connection) {
    cb(null, connection);
  } else {
    MongoClient.connect(connectionString, { useUnifiedTopology: true }).then(clientConnection => {
      connection = clientConnection;
      cb(null, connection);
    }).catch(error => {
      cb(error, connection);
    });
  }
}

/**
 * @description Wrapper and template for database operations
 * @param collectionName {string} - name of collection we are operating
 * @param callback {function} - function that receives collections in the parameter
 * @return {undefined}
 * @private
 */
function __getCollection (collectionName, callback) {
  __connect((error, connection) => {
    if (error) {
      callback(error, null);
    } else {
      const collection = connection.db(config.db).collection(collectionName);
      if (error) {
        callback(error, null);
      } else {
        callback(null, collection);
      }
    }
  });
}

/**
 * @description Function adding data to collection.
 * Can create multiple objects
 * @param collectionName {string} - name of collection we are operating
 * @param arrayOfQuery {array} - array of adding mongodb documents
 * @return {Promise}
 * @public
 */
function creat (collectionName, arrayOfQuery) {
  return new Promise((resolve, reject) => {
    __getCollection(collectionName, (errorColl, collection) => {
      if (errorColl) {
        reject(errorColl);
      } else {
        collection.insertMany(arrayOfQuery, (errorQuery, result) => {
          if (errorQuery) {
            reject(errorQuery);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
}

/**
 * @description Function get data from collection.
 * Can read multiple objects
 * @param collectionName {string} - name of collection we are operating
 * @param query {array} - searching mongodb query
 * @return {Promise}
 * @public
 */
function read (collectionName, query) {
  return new Promise((resolve, reject) => {
    __getCollection(collectionName, (errorColl, collection) => {
      if (errorColl) {
        reject(errorColl);
      } else {
        collection.find(query).toArray((errorQuery, result) => {
          if (errorQuery) {
            reject(errorQuery);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
}

/**
 * @description Function delete data from collection.
 * Can read multiple objects
 * @param collectionName {string} - name of collection we are operating
 * @param query {object} - mongodb documents to delete
 * @return {Promise}
 * @public
 */
function remove (collectionName, query) {
  return new Promise((resolve, reject) => {
    __getCollection(collectionName, (errorColl, collection) => {
      if (errorColl) {
        reject(errorColl);
      } else {
        collection.deleteMany(query, (errorQuery, result) => {
          if (errorQuery) {
            reject(errorQuery);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
}

module.exports = {
  creat,
  read,
  remove,
};