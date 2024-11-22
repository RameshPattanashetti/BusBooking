import React from 'react';

const Help = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.logo}>boOkBuS</h1>
      <div style={styles.message}>
        <p style={styles.title}>Happy to Help</p>
        <p>24/7 chat support for faster query resolution</p>
        <ul style={styles.list}>
          <li>Login Bookings - Enter Account Mobile Number</li>
          <li>Guest Booking - Enter Booking Mobile Number</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '300px',
    margin: '20px auto',
    textAlign: 'center',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  logo: {
    color: '#e30613',
    fontSize: '24px',
    marginBottom: '10px',
  },
  message: {
    color: '#333',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  list: {
    textAlign: 'left',
    marginTop: '10px',
    paddingLeft: '20px',
  },
};

export default Help;
