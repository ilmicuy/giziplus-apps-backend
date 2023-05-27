const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Field nama harus diisi'],
    unique: true,
    trim: true,
    maxLength: [40, 'Nama tour harus memiliki karakter dibawah 40'],
    minLength: [10, 'Nama tour minimalnya memiliki 10 karakter'],
  },
  duration: {
    type: Number,
    required: [true, 'Field duration wajib diisi'],
  },
  description: {
    type: String,
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
