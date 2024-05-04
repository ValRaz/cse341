const mongodb = require('../db/dbconnect');
const ObjectId = require('mongodb').ObjectId;

const getOne = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('Contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};
  
  const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('Contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  };
  
  
  module.exports = { getAll, getOne };