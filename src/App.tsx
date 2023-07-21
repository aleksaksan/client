import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { MessageСustomizationPage } from './pages/MessageСustomizationPage/MessageСustomizationPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={<HomePage />}/>
          <Route path="message-customization" element={<MessageСustomizationPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
