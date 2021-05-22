import React from 'react';

const LoginPassword = () => {
    return (
        <section class="d-flex justify-content-center">
            <form className="border p-3 Card">
                <p style={{ fontSize: "28px", fontWeight: "500", marginTop: "-10px", marginBottom: "10px" }}>Sign-in</p>
                <p style={{ fontSize: "13.5px", fontWeight: "400" }}>example@gmail.com <span className="Links">Change</span></p>
                <div className="row">
                    <div className="col-md-6">
                        <p className="Input_Titles">Password</p>
                    </div>
                    <div className="col-md-6">
                        <p style={{ fontSize: "13px", lineHeight: "0px", padding:"0px", marginTop:"8px" }} className="Links">Forgot your password</p>
                    </div>                    </div>
                <input type="email" name="email" id="email" className="Input_Fields" required />
                {/* <Link to="/puzzle"> */}
                <input className="Submit_Button mt-2" type="submit" value="Sign in" />
                {/* </Link> */}
                <div className="d-flex">
                    <div style={{paddingTop:"18px"}}>
                        <input  type="checkbox" name="" id="" /> &nbsp;
                    </div>
                    <div>
                        <p style={{ fontSize: "12.5px", paddingTop: "20px", fontWeight: "500" }}> Keep me signed in. <span class="Links">Details</span> and <span className="Links">Privacy Notice.</span></p>
                    </div>

                </div>
            </form>
        </section>
    );
};

export default LoginPassword;