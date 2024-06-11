import { Routes, Route, BrowserRouter } from 'react-router-dom';

import TestimonialCardWrapper from './components/testimonialCard/TestimonialCardWrapper';
import MoreButtonWrapper from './components/moreButton/MoreButtonWrapper';
import ChipWrapper from './components/chip/ChipWrapper';
import BlogCardWrapper from './components/blogCard/BlogCardWrapper';
import AvatarWrapper from './components/avatar/AvatarWrapper';
import ButtonWrapper from './components/button/ButtonWrapper';
import ProfileCardWrapper from './components/profileCard/ProfileCardWrapper';
import ActionIconWrapper from './components/actionIcon/ActionIconWrapper';
import SocialBarWrapper from './components/socialBar/SocialBarWrapper';
import InputWrapper from './components/input/InputWrapper';
import NavBarWrapper from './components/navbar/NavBarWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/actionIcon' element={<ActionIconWrapper />} />
        <Route path='/avatar' element={<AvatarWrapper />} />
        <Route path='/blogCard' element={<BlogCardWrapper />} />
        <Route path='/button' element={<ButtonWrapper />} />
        <Route path='/chip' element={<ChipWrapper />} />
        <Route path='/input' element={<InputWrapper />} />
        <Route path='/moreButton' element={<MoreButtonWrapper />} />
        <Route path='/navBar' element={<NavBarWrapper />} />
        <Route path='/profileCard' element={<ProfileCardWrapper />} />
        <Route path='/socialBar' element={<SocialBarWrapper />} />
        <Route path='/testimonialCard' element={<TestimonialCardWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
