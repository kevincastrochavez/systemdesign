import { Routes, Route, BrowserRouter } from 'react-router-dom';

import ActionIconWrapper from './components/actionIcon/ActionIconWrapper';
import AvatarWrapper from './components/avatar/AvatarWrapper';
import BlogCardWrapper from './components/blogCard/BlogCardWrapper';
import ButtonWrapper from './components/button/ButtonWrapper';
import CartControlWrapper from './components/cartControl/CartControlWrapper';
import ChipWrapper from './components/chip/ChipWrapper';
import ColorSwatchesWrapper from './components/colorSwatches/ColorSwatchesWrapper';
import InputWrapper from './components/input/InputWrapper';
import MoreButtonWrapper from './components/moreButton/MoreButtonWrapper';
import NavBarWrapper from './components/navbar/NavBarWrapper';
import PriceWrapper from './components/price/PriceWrapper';
import ProductOptionsWrapper from './components/productOptions/ProductOptionsWrapper';
import ProfileCardWrapper from './components/profileCard/ProfileCardWrapper';
import SocialBarWrapper from './components/socialBar/SocialBarWrapper';
import RatingWrapper from './components/rating/RatingWrapper';
import TestimonialCardWrapper from './components/testimonialCard/TestimonialCardWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/actionIcon' element={<ActionIconWrapper />} />
        <Route path='/avatar' element={<AvatarWrapper />} />
        <Route path='/blogCard' element={<BlogCardWrapper />} />
        <Route path='/button' element={<ButtonWrapper />} />
        <Route path='/cartControl' element={<CartControlWrapper />} />
        <Route path='/chip' element={<ChipWrapper />} />
        <Route path='/colorSwatches' element={<ColorSwatchesWrapper />} />
        <Route path='/input' element={<InputWrapper />} />
        <Route path='/moreButton' element={<MoreButtonWrapper />} />
        <Route path='/navBar' element={<NavBarWrapper />} />
        <Route path='/price' element={<PriceWrapper />} />
        <Route path='/productOptions' element={<ProductOptionsWrapper />} />
        <Route path='/profileCard' element={<ProfileCardWrapper />} />
        <Route path='/socialBar' element={<SocialBarWrapper />} />
        <Route path='/rating' element={<RatingWrapper />} />
        <Route path='/testimonialCard' element={<TestimonialCardWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
