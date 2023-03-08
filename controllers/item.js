const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getOneItem = async (req, res) => {
    const itemId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db("commerce")
      .collection('item')
      .find({ _id: itemId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };


const createItem = async (req, res) => {
    const item={
        name: req.body.name,
        maker: req.body.maker,
        model: req.body.model,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
    };
    const response = await mongodb.getDb().db("commerce").collection('item').insertOne(item);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Failed to create item');
    }
  };


  module.exports = {
    getOneItem,
    createItem
  };