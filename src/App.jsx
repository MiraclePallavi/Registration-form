import React from 'react';

import RegistrationForm from './RegistrationForm';
import ThankPage from './ThankPage';
import { Routes,Route} from "react-router-dom";

const App = () => {
  return (
    

        <Routes>
        <Route path="/" exact element={<RegistrationForm></RegistrationForm>} />
        <Route path="/thank-you" element={<ThankPage></ThankPage>} />
       </Routes>
    
  )
}
export default App;

