const express = require('express');
const {
    createEvent, getEvents
} = require('../controllers/events.controller');

const router = express.Router();

router.post('/createEvent', createEvent);
router.get('/events', getEvents);

module.exports = router;