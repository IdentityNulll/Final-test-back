const Events = require("../models/events.model");

const getEvents = async (req, res) => {
  try {
    const events = await Events.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEvent = async (req, res) => {
  const { name, date } = req.body;
  console.log(req.body);

  try {
    const newEvent = new Events({
      name,
      date,
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


module.exports = {
  getEvents,
  createEvent,
};
