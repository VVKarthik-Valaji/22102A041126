import React from 'react';

export default function ProfilePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Profile</h1>
      <p style={styles.text}>Name: Valaji Veera Venkata Karthik</p>
      <p style={styles.text}>Email: 22102a041126@mbu.asia</p>
      <p style={styles.text}>Roll No: 22102a041126</p>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '80px',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    fontSize: '2.5rem',
    color: '#388e3c',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.2rem',
    margin: '10px 0',
  },
};
