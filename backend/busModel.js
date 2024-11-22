const mongoose = require('mongoose');

// Create Bus Schema
const busSchema = new mongoose.Schema({
    departure: { type: String, required: true },
    destination: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    price: { type: Number, required: true }
  }, { timestamps: true }); // This adds createdAt and updatedAt automatically
  
  const Bus = mongoose.model('Bus', busSchema);
  

// Export the model so it can be used elsewhere
module.exports = Bus;
