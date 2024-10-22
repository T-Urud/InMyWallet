import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // set focus on username input
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // tst the user state with the REGEX
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  // tst the pwd state with the REGEX and matchPwd
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  // set err message, clear everytime user, pwd, matchPwd change
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if btn enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid entry");
      return;
    }
    try {
      const res = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res.data);
      console.log(res.accessToken);
      console.log(JSON.stringify(res));
      setSuccess(true);
      // clear input fields if we want
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.res?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <span className="underline">Sign In</span>
          </p>
        </section>
      ) : (
        <section className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <p
                ref={errRef}
                className={errMsg ? "" : ""}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label" htmlFor="username">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="username"
                    className={`input input-bordered  w-full max-w-xs ${
                      validName || !user ? "input-primary" : "input-error"
                    }`}
                    required
                    // aria for accessibility
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="pwd">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    id="pwd"
                    onChange={(e) => setPwd(e.target.value)}
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    placeholder="password"
                    className={`input input-bordered  w-full max-w-xs ${
                      validPwd || !pwd ? "input-primary" : "input-error"
                    }`}
                    required
                    // aria for accessibility
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="confirm_pwd">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    id="confirm_pwd"
                    placeholder="confirm password"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    className={`input input-bordered  w-full max-w-xs ${
                      validMatch ? "input-primary" : "input-error"
                    }`}
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                    required
                    // aria for accessibility
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    className="btn btn-primary"
                    disabled={!validName || !validPwd || !validMatch}
                  >
                    Login
                  </button>
                </div>
                <div className="flex flex-col mt-2">
                  <span>Already have an account?</span>
                  <span className="underline">
                    <Link to="/login">Sign In</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Register;
