const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // React app is typically served here during development
  methods: ['GET', 'POST']
}));
app.use(bodyParser.json()); // To support JSON-encoded bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bus_booking', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Create User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Create Bus Schema
const busSchema = new mongoose.Schema({
  departure: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  price: { type: Number, required: true }
});

const Bus = mongoose.model('Bus', busSchema);

// Sign Up Route
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Sign In Route
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Sign in successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add a new bus
app.post('/add-bus', async (req, res) => {
  const { departure, destination, date, time, price } = req.body;

  try {
    const busDate = new Date(date);
    if (isNaN(busDate)) {
      return res.status(400).json({ message: 'Invalid date format' });
    }

    const newBus = new Bus({
      departure,
      destination,
      date: busDate,
      time,
      price
    });

    await newBus.save();
    res.status(201).json({ message: 'Bus added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding bus' });
  }
});

// Search for buses
app.post('/search', async (req, res) => {
  const { departure, destination } = req.body;

  try {
    const buses = await Bus.find({
      departure,
      destination
    });

    if (buses.length === 0) {
      return res.status(404).json({ message: 'No buses found for the given route' });
    }

    res.status(200).json({ buses });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
