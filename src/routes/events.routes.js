const express = require('express');
const {
    createEvent, getEvents
} = require('../controllers/events.controller');

const routeer = express.Router();

routeer.post('/createEvent', createEvent);
routeer.get('/events', getEvents);