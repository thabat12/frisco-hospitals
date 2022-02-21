import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import SignInPage from '../pages/SignInPage';
import UserDashboard from '../pages/UserDashboard';


const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/sign_in' element={<SignInPage/>}/>
                <Route path='/dashboard/:userId' element={<UserDashboard/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default PageRoutes;