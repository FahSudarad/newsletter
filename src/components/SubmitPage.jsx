import React from "react";
import IconSuccess from "../assets/images/icon-success.svg";
import { useNavigate } from "react-router-dom";

function SubmitPage() {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    navigate("/");
  }
  return (
    <div className="App-submit">
      <div className="newsletter-box-submit">
        <div className="wrapper-submit">
          <div className="submit-box">
            <img src={IconSuccess} alt="icon success" />
            <h1>Thanks for subscribing!</h1>
            <p>
              A comfirmation email has been sent to <b>ash@loremcompany.com</b>.
              Please open it and click the button inside your subscription.
            </p>
            <button className="btn-submit" onClick={handleSubmit}>
              Dissmiss message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitPage;
