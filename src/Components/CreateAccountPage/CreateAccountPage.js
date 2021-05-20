import React from 'react';
import './CreateAccountPage.css';
import Logo from './Amazon_(company)-Logo.wine.png';
import { Link } from 'react-router-dom';

const CreateAccountPage = () => {
    return (
        <section class="d-flex justify-content-center">
            <section>
                {/* Logo start */}
                <section class="d-flex justify-content-center">
                    <img id="Logo" src={Logo} alt="logo" />
                </section>
                {/* Logo end */}
                {/* Create Account card start */}
                <section className="container border p-3 Card">
                    {/* Title */}
                    <p style={{ fontSize: "28px", fontWeight: "500", marginTop: "-10px", marginBottom: "10px" }}>Create account</p>
                    {/* Form start */}
                    <form action="">
                        <p className="Input_Titles">Your name</p>
                        <input type="text" name="name" id="name" className="Input_Fields" required />
                        <p className="Input_Titles">Email</p>
                        <input type="email" name="email" id="email" className="Input_Fields" required />
                        <p className="Input_Titles">Password</p>
                        <input type="password" name="password" id="passsword" className="Input_Fields" placeholder="At least 6 characters" required />
                        {/* Advise text here */}
                        <p style={{ fontSize: "12.5px", marginTop: "-8px" }}>*Password must be at least 6 characters</p>
                        <p className="Input_Titles">Re-enter password</p>
                        <input type="password" name="password" id="passsword" className="Input_Fields" required />
                        {/* Submit button */}
                        <Link to="/puzzle">
                        <input id="Submit_Button" type="submit" value="Create your Amazon account" />
                        </Link>
                    </form>
                    {/* Form end */}
                    {/* Other options start */}
                    <p style={{ fontSize: "12.5px", paddingTop: "20px" }}>By creating an account, you agree to Amazon's <span class="Links">Conditions of Use</span> and <span class="Links">Privacy Notice.</span></p>
                    <hr />
                    <p style={{ fontSize: "12.5px", margin: "0px", paddingTop: "10px" }}>Already have an account? <span class="Links">Sign-In</span></p>
                    <p style={{ fontSize: "12.5px", margin: "0px" }}>Purchasing for work? <a href="#" class="Links">Create a business account</a></p>
                    {/* Other options end */}
                </section>
                {/* Create Account card end */}
            </section>
        </section>
    );
};

export default CreateAccountPage;