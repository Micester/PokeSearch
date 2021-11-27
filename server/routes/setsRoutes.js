const express = require('express');
const router = express.Router();

const fs = require('fs'); // file system module
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// json file to read and write
const setsFile = path.join(__dirname, '../data/sets.json');

// list all quote data, returns an array of all quotes
function setsData() {
  const data = fs.readFileSync(setsFile);
  return JSON.parse(data);
}

// get quote by id, returns single quote if found
function getSetsDataById(id) {
  const setsArray = setsData();
  let filteredSets = setsArray.filter((name) => name.id === id);
  if (filteredSets.length) {
    return filteredSets.shift();
  } else {
    return `no quote found with the id: ${id}`;
  }
}

// add a new quote and save to quotes.json file
function addSet(body) {
  const setsArray = setsData();
  const name = new Name(body.name);
  setsArray.push(name);

  fs.writeFileSync(setsFile, JSON.stringify(setsArray));

  return name;
}

// Quote Object constructor, used to help create new quotes
function Name(name) {
  this.id = uuidv4();
  this.name = name;
}

// Quote routes
router.get('/', (req, res) => {
  res.json(setsData());
});

router.get('/:id', (req, res) => {
  res.json(getSetsDataById(req.params.id));
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
