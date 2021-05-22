import React from 'react';
import { Link } from 'react-router-dom';

const Complete = () => {
    return (
        <section>
            <h4 className="text-center mt-5 pt-5 text-success">"Congratulations you've successfully created an account"</h4>
            <Link to="/signin"> <div className="text-center mt-5"><p>Home</p></div></Link>
        </section>
    );
};

export default Complete;