import React, { useContext } from "react";
import Card from "../Card/Card";
// import FeedbackList from "../FeedbackList/FeedbackList";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../FeedbackContext/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteCard, editFeedback, feedbackEdit } =
    useContext(FeedbackContext);

  return (
    <>
      <Card>
        <div className="num-display">{item.rating}</div>
        <button
          className="close"
          onClick={() => deleteCard(item.id)}
          disabled={feedbackEdit.edit ? "disabled" : null}
        >
          <FaTimes color="purple" />
        </button>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    </>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object,
};

export default FeedbackItem;
