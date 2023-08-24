import React, { useState } from "react";
import IconList from "../assets/images/icon-list.svg";
import { useNavigate } from "react-router-dom";

function NewsletterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); 
  function checkEmailValidity() {
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const isValid = emailPattern.test(email);
    setIsValidEmail(isValid);
    return isValid;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const isValid = checkEmailValidity();
    if (isValid) {
      navigate("/submit-success");
    }
  }
  return (
    <div className="App-newsletter">
      <div className="newsletter-box">
        <div className="wrapper-newsletter">
          <div className="newsletter-box-inside">
            <div className="box-pic-right">
              <div className="box-pic"></div>
            </div>
            <div className="box-text-left">
              <h1>Stay updated!</h1>
              <br />
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <br />
              <span className="icon-list">
                <img src={IconList} alt="icon list" />
                Product discovery and building what matters
              </span>
              <br />
              <span className="icon-list">
                <img src={IconList} alt="icon list" />
                Measuring to ensure updates are a success
              </span>
              <br />
              <span className="icon-list">
                <img src={IconList} alt="icon list" />
                And much more!
              </span>
              <br />
              {isValidEmail ? (
                <label htmlFor="email">
                  <h4>Email Address</h4>
                </label>
              ) : (
                <label htmlFor="email" id="error-message">
                  <h4>Email Address</h4>
                  <p>Valid email required</p>
                </label>
              )}

              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    borderColor: isValidEmail ? "initial" : "red",
                    backgroundColor: isValidEmail ? "initial" : "antiquewhite",
                  }}
                />
                <button type="submit" className="btn-submit">
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterPage;
