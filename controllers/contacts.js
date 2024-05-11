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
  
  const { MongoClient } = require('mongodb');

  const addContact = async (req, res, next) => {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    const newContactId = new MongoClient().ObjectId();
  
    const newContact = {
      _id: newContactId,
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday
    };
  
    try {
      const collection = await mongodb.getDb().collection('Contacts');
  
      const result = await collection.insertOne(newContact);
  
      res.status(201).json({ id: result.insertedId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating contact' });
    }
  };
  
  const updateContact = async (req, res, next) => {
    const contactId = req.params.id;
  
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  
    try {
      const collection = await mongodb.getDb().collection('Contacts');
  
      const contact = await collection.findOne({ _id: new MongoClient().ObjectId(contactId) });
  
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
  
      const updateResult = await collection.updateOne(
        { _id: new MongoClient().ObjectId(contactId) },
        { $set: { firstName, lastName, email, favoriteColor, birthday } }
      );
  
      if (updateResult.modifiedCount === 0) {
        return res.status(304).json({ message: 'Contact not updated' });
      }
  
      res.status(200).json({ message: 'Contact updated' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating contact' });
    }
  };
  
  const deleteContact = async (req, res, next) => {
    const contactId = req.params.id;
  
    try {
      const collection = await mongodb.getDb().collection('Contacts');
  
      const deleteResult = await collection.deleteOne({ _id: new MongoClient().ObjectId(contactId) });
  
      if (deleteResult.deletedCount === 0) {
        return res.status(404).json({ message: 'Contact not found' });
      }
  
      res.status(200).json({ message: 'Contact deleted.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting contact' });
    }
  };

  module.exports = { 
    getAll,
    getOne,
    addContact,
    updateContact,
    deleteContact
   };