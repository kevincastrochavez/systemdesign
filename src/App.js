import { Routes, Route, BrowserRouter } from 'react-router-dom';

import TestimonialCardWrapper from './components/testimonialCard/TestimonialCardWrapper';
import MoreButtonWrapper from './components/moreButton/MoreButtonWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/testimonialCard' element={<TestimonialCardWrapper />} />
        <Route path='/moreButton' element={<MoreButtonWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
