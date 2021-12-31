import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React, { Children } from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <Head>Next Amazona</Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
}
