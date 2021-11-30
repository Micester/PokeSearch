const express = require('express');
const router = express.Router();

const fs = require('fs'); // file system module
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// json file to read and write
const cardsFile = path.join(__dirname, '../data/cards.json');

// list all Pokemon Card data, returns an array of all Pokemon Cards
function cardsData() {
  const data = fs.readFileSync(cardsFile);
  return JSON.parse(data);
}

// get Card by id, returns name  if found
function getcardsDataById(id) {
  const cardsArray = cardsData();
  let filteredCards = cardsArray.filter((name) => name.id === id);
  if (filteredCards.length) {
    return filteredCards.shift();
  } else {
    return `no quote found with the id: ${id}`;
  }
}

// add a new Pokemon-Card and save to cards.json file
function addCards(body) {
  const cardsArray = cardsData();
  const card = new Name(body.name);
  cardsArray.push(name);

  fs.writeFileSync(cardsFile, JSON.stringify(cardsArray));

  return name;
}

// Name Object constructor, used to help create new Cards in testing
function Name(name) {
  this.id = uuidv4();
  this.name = name;
}

// Quote routes
router.get('/', (req, res) => {
  res.json(cardsData());
});

router.get('/:id', (req, res) => {
  res.json(getcardsDataById(req.params.id));
});

router.post('/', (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      error: 'POST body must contain all required properties',
      requiredProperties: ['name'],
    });
  }
  res.json(addSet(req.body));
});

module.exports = router;
