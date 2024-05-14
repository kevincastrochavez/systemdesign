import { Routes, Route, BrowserRouter } from 'react-router-dom';

import TestimonialCardWrapper from './components/testimonialCard/TestimonialCardWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/testimonialCard' element={<TestimonialCardWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
