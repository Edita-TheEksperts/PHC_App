import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// image
import logo from "../../assets/images/logo-full.png";

const LockScreen = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  const [openEyes, setOpenEyes] = useState(true);
  return (
    <div className="fix-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <Link to="/dashboard">
                        <img src={logo} alt="" />
                      </Link>
                    </div>
                    <h4 className="text-center mb-4 ">Account Locked</h4>
                    <form onSubmit={(e) => submitHandler(e)}>
                      <div className="mb-sm-4 mb-3 position-relative">
                        <label className="">
                          <strong>Password</strong><span className="required">*</span>
                        </label>
                        <input
                          // type="password"
                          type={openEyes ? "password": "value"}
                          className="form-control"
                          defaultValue="123456"
                        />
                        <span className={`show-pass eye ${openEyes ? '' : 'active'}`}
                          onClick={()=>setOpenEyes(!openEyes)}
                        >
                          <i className="fa fa-eye-slash" />
                          <i className="fa fa-eye" />
                        </span>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Unlock
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockScreen;
