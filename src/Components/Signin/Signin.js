import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Signin.css';
import Puzzle1 from './puzzle.jpg';

const Signin = () => {
    // React Hook form...
    const { register, handleSubmit, watch, formState: { errors } } = useForm({});
    const onSubmit = data => setDetails(data);

    // Account Data...
    const [details, setDetails] = useState({})

    // Sending to database by api...
    const handleSaveData = () => {
        fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        })
    }
    return (
        <div>
            {/* ............Account information part.......... */}
            <section class="d-flex justify-content-center">
                <section>
                    {/* Create Account card start */}
                    <section className="container border p-3 Card">
                        {/* Title */}
                        <p style={{ fontSize: "28px", fontWeight: "500", marginTop: "-10px", marginBottom: "10px" }}>Create account</p>

                        {/* Form start */}
                        <form onSubmit={handleSubmit(onSubmit)} action="/submit" method="post">
                            <p className="Input_Titles">Your name</p>
                            <input type="text" name="name" id="name" className="Input_Fields" {...register("name")} required />
                            <p className="Input_Titles">Email</p>
                            <input type="email" name="email" id="email" className="Input_Fields" {...register("email")} required />
                            <p className="Input_Titles">Password</p>
                            <input type="password" name="password" id="passsword" className="Input_Fields" placeholder="At least 6 characters" {...register("password")} required />
                            {/* Advise text here */}
                            <p style={{ fontSize: "12.5px", marginTop: "-8px" }}>*Password must be at least 6 characters</p>
                            <p className="Input_Titles">Re-enter password</p>
                            <input type="password" name="password2" id="passsword2" className="Input_Fields" {...register("password2")} required />
                            {/* Submit button */}
                            <input onClick={handleSaveData} id="Submit_Button" type="submit" value="Create your Amazon account" />
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
            {/* ............Account information part.......... */}

            <section class=" container d-flex justify-content-center Card">
            <section className="border p-3">
                <h1 style={{ fontSize: "24px" }}>Solve this puzzle to protect your account</h1>
                <div class="d-flex justify-content-center mt-4">
                    <img style={{ width: "80%", height: "200px" }} src={Puzzle1} alt="" />
                </div>
                <Link style={{textDecoration:"none"}} to="/puzzle_game">
                <div className="d-flex justify-content-center">
                    <button id="Button">Solve puzzle</button>
                </div>
                </Link>
                
            </section>
        </section>

        </div>
    );
};

export default Signin;