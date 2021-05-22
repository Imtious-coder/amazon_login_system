import React from 'react';
import { Link } from 'react-router-dom';
import './Loginmail.css';

const Loginmail = () => {
    return (
        <section>
            {/* Login form... */}
            <section class="d-flex justify-content-center">
                <form className="border p-3 Card">
                    {/* Title... */}
                    <p style={{ fontSize: "28px", fontWeight: "500", marginTop: "-10px", marginBottom: "10px" }}>Sign-in</p>
                    <p className="Input_Titles">Email or phone number</p>
                    {/* Input field... */}
                    <input type="email" name="email" id="email" className="Input_Fields" required />
                    {/* Button... */}
                    <Link to="/loginPassword">
                        <input className="Submit_Button" type="submit" value="Continue" />
                    </Link>
                    {/* Info.. */}
                    <p style={{ fontSize: "12.5px", paddingTop: "20px" }}>By creating an account, you agree to Amazon's <span class="Links">Conditions of Use</span> and <span className="Links">Privacy Notice.</span></p>
                    <p style={{ fontSize: "14.5px" }} className="Links mt-3"> Need Help?</p>
                </form>
            </section>
            {/* Login form... */}
            {/* Create account section... */}
            <section class="d-flex justify-content-center mt-4">
                <p style={{ fontSize: "13px", color: "#767676" }}>—————————— New to Amazon? ——————————</p>
            </section>
            {/* Create button... */}
            <section class="d-flex justify-content-center">
                <Link to="/signin">
                    <button id="Button">Create your Amazon acccount</button>
                </Link>
            </section>
            {/* Create account section... */}


        </section>
    );
};

export default Loginmail;