const Booking = require("../model/bookingsModel");
// const bookings = require('../services/bookings.json')

const getBookings = async (req, res) => {
  const bookings = await Booking.find();

  res.status(200).json(bookings);
};

const setBooking = async (req, res) => {
  const dateClient = req.body.date;
  // const date = new Date().getHours()
  console.log(dateClient);

  if (dateClient) {
    res.send("Reserva no disponible");
  }

  const booking = await Booking.create({
    name: req.body.name,
    last_name: req.body.last_name,
    email: req.body.email,
    cc: req.body.cc,
    cel: req.body.cel,
    date: req.body.date,
    country: req.body.country,
  });

  res.status(201).json(booking);
};

module.exports = {
  getBookings,
  setBooking,
};
