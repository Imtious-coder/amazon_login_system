import React from 'react';
import Logo from './Amazon_(company)-Logo.wine.png';

const Header = () => {
    return (
       <section class="d-flex justify-content-center">
       <img id="Logo" src={Logo} alt="logo" />
   </section>
    );
};

export default Header;