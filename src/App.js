import React from 'react';
import {HomePage} from './pages/HomePage'
import {IceCream} from './pages/IceCream'
import {Routes, Route } from 'react-router-dom';
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {GalleryWall} from './pages/GalleryWall'

import './App.scss';

export function App() {
  return (
        <div className="app">
          <Header />
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/IceCream" element={<IceCream />} />
            <Route path="/GalleryWall" element={<GalleryWall />} />
          </Routes>
          <Footer/>
        </div>
  );
};

