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
    const user={
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        usertype: req.body.usertype
    }
    const response = await mongodb.getDb().db("commerce").collection('users').insertOne(user);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Failed to create user');
    }
  };

const updateUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const user = {
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      usertype: req.body.usertype
    };
    const response = await mongodb
      .getDb()
      .db("commerce")
      .collection('users')
      .replaceOne({ _id: userId }, user);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Failed to update user');
    }
  };

const deleteUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db("commerce").collection('user').deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Failed to delete user');
    }
  };


  module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
  };