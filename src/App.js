import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, Box, Paper } from '@mui/material';

function App() {
  
  // State variables to hold blue token inputs
  const [blueTokenCount, setBlueTokenCount] = useState('');
  const [bluePrefix, setBluePrefix] = useState('');
  const [blueTokensPerRow, setBlueTokensPerRow] = useState('');

  // State variables to hold red token inputs
  const [redTokenCount, setRedTokenCount] = useState('');
  const [redPrefix, setRedPrefix] = useState('');
  const [redTokensPerRow, setRedTokensPerRow] = useState('');

  // State to store the generated tokens
  const [tokens, setTokens] = useState({ blue: [], red: [] });


  // Function to generate tokens based on input values
  const handleGenerate = () => {
    const blueTokens = Array.from({ length: blueTokenCount }, (_, index) => `${bluePrefix}${index + 1}`);
    const redTokens = Array.from({ length: redTokenCount }, (_, index) => `${redPrefix}${index + 1}`);
    
    setTokens({ blue: blueTokens, red: redTokens });
  };

  // Function to clear all inputs and reset token state
  const handleClear = () => {
    setBlueTokenCount('');
    setBluePrefix('');
    setBlueTokensPerRow('');
    setRedTokenCount('');
    setRedPrefix('');
    setRedTokensPerRow('');

    setTokens({ blue: [], red: [] });
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h6"><b>Token Generator</b></Typography>
        <br />
        
        {/* Input fields for blue tokens */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <TextField
              label="Number of Blue Tokens"
              value={blueTokenCount}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setBlueTokenCount(value === '' ? '' : Number(value));
                }
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <TextField
              label="Blue Token Prefix"
              value={bluePrefix}
              onChange={(e) => setBluePrefix(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <TextField
              label="Blue Tokens Per Row"
              value={blueTokensPerRow}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setBlueTokensPerRow(value === '' ? '' : Number(value));
                }
              }}
              fullWidth
            />
          </Grid>
        </Grid>
        <br />

        {/* Input fields for red tokens */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <TextField
              label="Number of Red Tokens"
              value={redTokenCount}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setRedTokenCount(value === '' ? '' : Number(value));
                }
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <TextField
              label="Red Token Prefix"
              value={redPrefix}
              onChange={(e) => setRedPrefix(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <TextField
              label="Red Tokens Per Row"
              value={redTokensPerRow}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setRedTokensPerRow(value === '' ? '' : Number(value));
                }
              }}
              fullWidth
            />
          </Grid>
        </Grid>
        <br />

        {/* Buttons for generating and clearing tokens */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <Button variant="contained" onClick={handleGenerate} fullWidth>Generate</Button>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <Button variant="outlined" onClick={handleClear} fullWidth>Clear</Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Token display section */}
      <Box mt={4}>
        {/* Display blue tokens */}
        <Typography variant="h6">Blue Tokens:</Typography>
        <Grid container spacing={2}>
          {tokens.blue.map((token, index) => (
            <Grid item xs={12 / blueTokensPerRow} key={index}>
              <Button style={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center', width: "100%" }}>{token}</Button>
            </Grid>
          ))}
        </Grid>

        {/* Display red tokens */}
        <Typography variant="h6" mt={4}>Red Tokens:</Typography>
        <Grid container spacing={2}>
          {tokens.red.map((token, index) => (
            <Grid item xs={12 / redTokensPerRow} key={index}>
              <Button style={{ backgroundColor: 'red', color: '#fff', width: "100%" }}>{token}</Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
