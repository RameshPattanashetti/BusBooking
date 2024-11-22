import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const MainPage = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [buses, setBuses] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null); // Reset error message

    try {
      // Sending the form data to backend
      const response = await axios.post('http://localhost:5000/search', { 
        departure, 
        destination, 
        date, 
        passengers 
      });

      // Storing the response data (buses) in the state
      setBuses(response.data.buses);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message); // Show error message
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="search-section">
          <img src="https://www.kbuses.in/resources/water_busimages/Bus.svg" alt="Bus" className="bus-image" />
          <div className="search-form">
            <input 
              type="text" 
              placeholder="Departure" 
              value={departure} 
              onChange={(e) => setDeparture(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="Destination" 
              value={destination} 
              onChange={(e) => setDestination(e.target.value)} 
            />
            <input 
              type="date" 
              placeholder="dd - mm - yyyy" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
            />
            <input 
              type="number" 
              min="1" 
              placeholder="1" 
              value={passengers} 
              onChange={(e) => setPassengers(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </header>
      <main>
        {error && <p className="error-message">{error}</p>}
        <section className="routes-section">
          <h2>boOkBuS popular routes and schedules</h2>
          <table>
            <thead>
              <tr>
                <th>Popular routes</th>
                <th>First and last departures</th>
                <th>Average duration</th>
                <th>Minimum price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bengaluru → Mysore</td>
                <td>7:00am — 11:00am</td>
                <td>3h</td>
                <td>₹0.7K</td>
              </tr>
              <tr>
                <td>Bengaluru → Hyderabad</td>
                <td>7:25am — 4:45pm</td>
                <td>10h 21m</td>
                <td>₹1.9K</td>
              </tr>
              <tr>
                <td>Bengaluru → Pune</td>
                <td>7:25am — 4:45pm</td>
                <td>10h 21m</td>
                <td>₹5.6K</td>
              </tr>
              <tr>
                <td>Bengaluru → Chennai</td>
                <td>9:35am — 9:55pm</td>
                <td>12h 36m</td>
                <td>₹3.9K</td>
              </tr>
              <tr>
                <td>Bengaluru → Delhi</td>
                <td>7:00am — 7:00am</td>
                <td>24h</td>
                <td>₹7.9K</td>
              </tr>
            </tbody>
          </table>
        </section>
        
        {/* Display the search results */}
        <section className="search-results-section">
          <h3>Available Buses</h3>
          {buses.length > 0 ? (
            <ul>
              {buses.map((bus) => (
                <li key={bus._id}>
                  {bus.departure} → {bus.destination} | {bus.time} | ₹{bus.price}
                </li>
              ))}
            </ul>
          ) : (
            <p>No buses found</p>
          )}
        </section>

        <section className="why-choose-section">
          <h2>Why choose BookBuS?</h2>
          <p>The Best Way To Book Bus Tickets</p>
          <p>
            boOkBuS helps you easily search, compare, and book intercity bus tickets on a worldwide scale with our comprehensive list of bus routes and schedules. Use boOkBuS to book your trip online, in your own language and currency, wherever you are. boOkBuS partners with safe and reliable bus companies throughout INDIA, so you can buy tickets without a worry.
          </p>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
