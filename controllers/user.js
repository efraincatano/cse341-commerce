const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllUsers = async (req, res) => {
    const result = await mongodb.getDb().db("commerce").collection('users').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  };

const getOneUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db("commerce")
      .collection('users')
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };


const createUser = async (req, res) => {
    const user = {
        name: req.body.name,
        lastname: req.body.name,
        email: req.body.name,
        usertype: req.body.name,
    }
    const response = await mongodb.getDb().db("commerce").collection('users').insertOne(user);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Failed to create user');
    }
  };


  module.exports = {
    getAllUsers,
    getOneUser,
    createUser
  };