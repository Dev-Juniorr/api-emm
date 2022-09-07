const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Escribe tu nombre!"],
    },
    last_name: {
      type: String,
      required: [true, "Escribe tu apellido!"],
    },
    email: {
      type: String,
      required: [true, "Escribe tu email!"],
    },
    cc: {
      type: String,
      required: [true, "Escribe tu cedula!"],
    },
    cel: {
      type: String,
      required: [true, "Escribe tu numero de celular!"],
    },
    date: {
      type: Date,
      required: [true, "Fecha!"],
    },
    country: {
      type: String,
      required: [true, "Escribe tu pais!"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
