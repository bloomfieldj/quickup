db = connect('127.0.0.1:27017/quickup');

function insertData(object){
  db.users.insert(object);
}