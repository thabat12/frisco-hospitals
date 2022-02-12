import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import TestPage from '../pages/TestPage';

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/test_page' element={<TestPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default PageRoutes;