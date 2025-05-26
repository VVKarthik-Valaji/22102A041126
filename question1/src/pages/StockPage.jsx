import React, { useState, useEffect } from 'react';
import stockApi from '../api/stockApi';

export default function StockPage() {
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ4MjM1NTEzLCJpYXQiOjE3NDgyMzUyMTMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjA3MTY0MTQ2LTU3YTktNDZiMS04MGQzLTdjOTIyYzhmYzMwNyIsInN1YiI6IjIyMTAyYTA0MTEyNkBtYnUuYXNpYSJ9LCJlbWFpbCI6IjIyMTAyYTA0MTEyNkBtYnUuYXNpYSIsIm5hbWUiOiJ2YWxhamkgdmVlcmEgdmVua2F0YSBrYXJ0aGlrIiwicm9sbE5vIjoiMjIxMDJhMDQxMTI2IiwiYWNjZXNzQ29kZSI6ImRKRnVmRSIsImNsaWVudElEIjoiMDcxNjQxNDYtNTdhOS00NmIxLTgwZDMtN2M5MjJjOGZjMzA3IiwiY2xpZW50U2VjcmV0IjoickZiUmJRa0JuZVRRVmRDUSJ9.CstDoSqeBhgkc2Lcwk5xeazwVtEhzrzK7A4rfsaemeA';
        const data = await stockApi.fetchStocks(token);
        setStocks(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Stock List</h1>
      {loading && <p style={styles.info}>Loading stocks...</p>}
      {error && <p style={styles.error}>{error}</p>}
      {!loading && !error && (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Price (₹)</th>
              <th style={styles.th}>Ticker</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr key={index} style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                <td style={styles.td}>{stock.name}</td>
                <td style={styles.td}>{stock.price}</td>
                <td style={styles.td}>{stock.ticker}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  container: {
    margin: '40px auto',
    maxWidth: '800px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
    backgroundColor: '#f3f6fb',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#1565c0',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    borderBottom: '2px solid #1976d2',
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#e3f2fd',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #cfd8dc',
  },
  rowEven: {
    backgroundColor: '#ffffff',
  },
  rowOdd: {
    backgroundColor: '#e8f0fe',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
};
