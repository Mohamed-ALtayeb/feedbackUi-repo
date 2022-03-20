import React, { useState, useContext, useLayoutEffect } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import RatingSelect from "../RatingSelect/RatingSelect";
import FeedbackContext from "../FeedbackContext/FeedbackContext";

const FeedbackFrom = () => {
  const { feedBackAdd, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

  useLayoutEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== 0 && text.trim("").length < 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedBack = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedBack);
      } else {
        feedBackAdd(newFeedBack);
      }
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={formSubmit}>
        <h2>How would rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            value={text}
            placeholder="write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackFrom;
