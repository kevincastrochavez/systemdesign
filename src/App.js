import { Routes, Route, BrowserRouter } from 'react-router-dom';

import TestimonialCard from './components/testimonialCard/TestimonialCard';
import { testimonialCardProps } from './utils/componentObjects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/testimonialCard'
          element={<TestimonialCard {...testimonialCardProps} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
