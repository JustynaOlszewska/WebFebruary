import React from 'react';
import MainContent from '../modules/MainContent/MainContent';
import { mainContent } from '../../constant/mainContent';

const Main = () => {
  return (
    <main>
      {mainContent.map(element => (
        <MainContent key={element.title} element={element} />
      ))}
    </main>
  );
};

export default Main;
