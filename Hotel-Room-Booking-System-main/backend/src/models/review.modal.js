// Developed by pooja

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: [true, 'User id is required field']
  },
  room_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rooms',
    required: [true, 'Room id is required field']
  },
  booking_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bookings',
    required: [true, 'Booking id is required field']
  },
  rating: {
    type: Number,
    required: [true, 'Review `rating` filed is required'],
    min: 1,
    max: 5
  },
  message: {
    type: String,
    required: [true, 'Review `message` filed is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// updatedAt' field before saving or updating a document
bookingSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Reviews', bookingSchema);
