import { Routes, Route, BrowserRouter } from 'react-router-dom';

import TestimonialCardWrapper from './components/testimonialCard/TestimonialCardWrapper';
import MoreButtonWrapper from './components/moreButton/MoreButtonWrapper';
import ChipWrapper from './components/chip/ChipWrapper';
import BlogCardWrapper from './components/blogCard/BlogCardWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/testimonialCard' element={<TestimonialCardWrapper />} />
        <Route path='/moreButton' element={<MoreButtonWrapper />} />
        <Route path='/chip' element={<ChipWrapper />} />
        <Route path='/blogCard' element={<BlogCardWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
