import React from 'react';
import { Link } from 'react-router-dom';

const Verification = () => {
    const handleOTP = () => {
        const errors = document.getElementById("Error");
        errors.style.display = "block";
        const errors2 = document.getElementById("Error2");
        errors2.style.display = "block";
    }
    return (
        <section class="container d-flex justify-content-center Card pb-5">
            <section className="border p-3">
                <h1 style={{ fontSize: "28px" }}>Verify email address</h1>
                <p style={{ fontSize: "14px" }}>To verify your email, we've sent a One Time Password (OTP) to example@gmail.com <span className="Links">(Change)</span> </p>
                <p className="mt-2 text-success" style={{ display: "none", fontSize: "14px" }} id="Error">New OTP is send to the 'example@gmail.com'</p>
                <p className="Input_Titles">Enter OTP</p>
                <input type="number" name="number" id="number" className="Input_Fields" required />
                {/* <Link to="/puzzle"> */}
                <input className="Submit_Button" type="submit" value="Verify" />
                {/* </Link> */}
                <p className="text-center mt-2 text-success" style={{ display: "none", fontSize: "14px" }} id="Error2">*Please check you email address properly*</p>
                <p className="Links" style={{ marginTop: "20px", textAlign: "Center", }} onClick={handleOTP}>Resend OTP</p>
            </section>
        </section>
    );
};

export default Verification;