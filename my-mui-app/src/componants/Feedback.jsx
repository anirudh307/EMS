import "bootstrap/dist/css/bootstrap.min.css";
import ThankYouPopup from "./ThankYou.jsx"; 
import { useState } from "react";
import RatingStars from "./RatingStars.jsx";

export default function Feedback() {
   const [rating, setRating] = useState(2);
  const [feedback, setFeedback] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to handle popup visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && feedback.trim() !== "") {
      setShowPopup(true); // Show popup on successful submission
    }
  };



  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 feedback" >
      <div className="card p-4 shadow-lg text-center" style={{ width: "24rem", backgroundColor: "#bfdbfe", borderRadius: "1rem" }}>
        <h2 className="fw-bold">We value your opinion.</h2>
        <p className="text-muted">How would you rate your overall experience?</p>
        <div className="d-flex justify-content-center my-2">
               <RatingStars />
        </div>
        <p className="text-muted">Kindly take a moment to tell us what you think.</p>
        <textarea
          className="form-control mb-3"
          rows="3"
          placeholder="Your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Share my feedback
        </button>
      </div>

      {/* Thank You Popup */}
      <ThankYouPopup show={showPopup} handleClose={() => setShowPopup(false)} />
    </div>
  );
}


