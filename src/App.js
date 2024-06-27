import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import AccordionWrapper from './components/accordion/AccordionWrapper';
import ActionIconWrapper from './components/actionIcon/ActionIconWrapper';
import AvatarWrapper from './components/avatar/AvatarWrapper';
import BlogCardWrapper from './components/blogCard/BlogCardWrapper';
import ButtonWrapper from './components/button/ButtonWrapper';
import CartControlWrapper from './components/cartControl/CartControlWrapper';
import ChipWrapper from './components/chip/ChipWrapper';
import ColorSwatchesWrapper from './components/colorSwatches/ColorSwatchesWrapper';
import EmptyStateWrapper from './components/emptyState/EmptyStateWrapper';
import FilterCheckboxWrapper from './components/filterCheckbox/FilterCheckboxWrapper';
import GalleryWrapper from './components/gallery/GalleryWrapper';
import IconWrapper from './components/icon/IconWrapper';
import InputWrapper from './components/input/InputWrapper';
import ListItemWrapper from './components/listItem/ListItemWrapper';
import MoreButtonWrapper from './components/moreButton/MoreButtonWrapper';
import NavBarWrapper from './components/navbar/NavBarWrapper';
import PriceWrapper from './components/price/PriceWrapper';
import ProductCardWrapper from './components/productCard/ProductCardWrapper';
import ProductDetailsWrapper from './components/productDetails/ProductDetailsWrapper';
import ProductGridWrapper from './components/productGrid/ProductGridWrapper';
import ProductInformationWrapper from './components/productInformation/ProductInformationWrapper';
import ProductOptionsWrapper from './components/productOptions/ProductOptionsWrapper';
import ProductSectionWrapper from './components/productSection/ProductSectionWrapper';
import ProductSpecificationsWrapper from './components/productSpecifications/ProductSpecificationsWrapper';
import ProfileCardWrapper from './components/profileCard/ProfileCardWrapper';
import ProgressBarWrapper from './components/progressBar/ProgressBarWrapper';
import RatingWrapper from './components/rating/RatingWrapper';
import RatingCategoryWrapper from './components/ratingCategory/RatingCategoryWrapper';
import RatingCategoryGroupWrapper from './components/ratingCategoryGroup/RatingCategoryGroupWrapper';
import ReviewWrapper from './components/review/ReviewWrapper';
import ReviewSectionWrapper from './components/reviewSection/ReviewSectionWrapper';
import SocialBarWrapper from './components/socialBar/SocialBarWrapper';
import TestimonialCardWrapper from './components/testimonialCard/TestimonialCardWrapper';

function App() {
  return (
    <>
      <Analytics />

      <BrowserRouter>
        <Routes>
          <Route path='/accordion' element={<AccordionWrapper />} />
          <Route path='/actionIcon' element={<ActionIconWrapper />} />
          <Route path='/avatar' element={<AvatarWrapper />} />
          <Route path='/blogCard' element={<BlogCardWrapper />} />
          <Route path='/button' element={<ButtonWrapper />} />
          <Route path='/cartControl' element={<CartControlWrapper />} />
          <Route path='/chip' element={<ChipWrapper />} />
          <Route path='/colorSwatches' element={<ColorSwatchesWrapper />} />
          <Route path='/emptyState' element={<EmptyStateWrapper />} />
          <Route path='/filterCheckbox' element={<FilterCheckboxWrapper />} />
          <Route path='/gallery' element={<GalleryWrapper />} />
          <Route path='/icon' element={<IconWrapper />} />
          <Route path='/input' element={<InputWrapper />} />
          <Route path='/listItem' element={<ListItemWrapper />} />
          <Route path='/moreButton' element={<MoreButtonWrapper />} />
          <Route path='/navBar' element={<NavBarWrapper />} />
          <Route path='/price' element={<PriceWrapper />} />
          <Route path='/productCard' element={<ProductCardWrapper />} />
          <Route path='/productDetails' element={<ProductDetailsWrapper />} />
          <Route path='/productGrid' element={<ProductGridWrapper />} />
          <Route
            path='/productInformation'
            element={<ProductInformationWrapper />}
          />
          <Route path='/productOptions' element={<ProductOptionsWrapper />} />
          <Route path='/productSection' element={<ProductSectionWrapper />} />
          <Route
            path='/productSpecifications'
            element={<ProductSpecificationsWrapper />}
          />
          <Route path='/profileCard' element={<ProfileCardWrapper />} />
          <Route path='/progressBar' element={<ProgressBarWrapper />} />
          <Route path='/rating' element={<RatingWrapper />} />
          <Route path='/ratingCategory' element={<RatingCategoryWrapper />} />
          <Route
            path='/ratingCategoryGroup'
            element={<RatingCategoryGroupWrapper />}
          />
          <Route path='/review' element={<ReviewWrapper />} />
          <Route path='/reviewSection' element={<ReviewSectionWrapper />} />
          <Route path='/socialBar' element={<SocialBarWrapper />} />
          <Route path='/testimonialCard' element={<TestimonialCardWrapper />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
