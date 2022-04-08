import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EventsMoreInfoPage from '../pages/EventsMoreInfo';
import GalleryMoreInfoPage from '../pages/GalleryMoreInfo';
import GiveMoreInfoPage from '../pages/GiveMoreInfo';

import LandingPage from '../pages/LandingPage';
import SignInPage from '../pages/SignInPage';
import UserDashboard from '../pages/UserDashboard';


const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/give_more_info' element={<GiveMoreInfoPage/>}/>
                <Route path='/gallery_more_info' element={<GalleryMoreInfoPage/>}/>
                <Route path='/events_more_info' element={<EventsMoreInfoPage/>}/>
                <Route path='/sign_in' element={<SignInPage/>}/>
                <Route path='/dashboard/:userId' element={<UserDashboard/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default PageRoutes;