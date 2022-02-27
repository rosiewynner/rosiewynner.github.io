import React from 'react';
import Container from 'react-bootstrap/Container';
import InstaFeeds from './insta-feed/instafeed'

import './App.scss';

export function App() {
  return (

  <div className='app'>
    <Container>
      <h1 className="header">Rosalie Ross</h1>

    </Container>
    <InstaFeeds token={"IGQVJVa0dLLVFnaVlHVkhrVFBWVWhqZA1hEWU5WZAmgwLUVxTDh2ZAVpWWlpFR2hEOWpJR2d1LVZADeGRFdndlYXQ0ME83b3ItQTY4Tk1FUkU2TVhHbklEa2FWS0FucnJ5SEw1UEhuWGV3"} limit={12}/>

  </div>
);
  }

