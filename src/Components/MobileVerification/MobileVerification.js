import React from 'react';
import { Link } from 'react-router-dom';

const MobileVerification = () => {
    return (
        <section class="container d-flex justify-content-center Card pb-5">
            <section className="border p-3">
                {/* Title... */}
                <h1 style={{ fontSize: "28px" }}>Add mobile number</h1>
                {/* Suggestion message... */}
                <p style={{ fontSize: "14px" }}>Enter a mobile number to safeguard your Amazon account. By enrolling your mobile phone number, you consent to receive automated text messages from Amazon related to account security. You can opt out of account security related messaging by removing your mobile number in the “Login and security” settings. Message and data rates may apply.</p>
                <p className="mt-2 text-success" style={{ display: "none", fontSize: "14px" }} id="Error">New OTP is send to the 'example@gmail.com'</p>
                <p className="Input_Titles">New mobile number</p>
                {/* Input field... */}
                <input type="number" name="number" id="number" className="Input_Fields mb-4" placeholder="+8801234567890" required />
                {/* Button... */}
                <Link to="/mobileOTP">
                    <input className="Submit_Button" type="submit" value="Add mobile number" />
                </Link>
            </section>
        </section>
    );
};

export default MobileVerification;