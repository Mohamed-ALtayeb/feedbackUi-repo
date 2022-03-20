import React from "react";
import FeedbackItem from "../FeedbackItem/FeedbackItem";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../FeedbackContext/FeedbackContext";
import Spinner from "../assets/Spinner/Spinner";

const FeedbackList = (props) => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <Spinner />;
  }

  return isLoading ? (
    <h3>Loading ... </h3>
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => {
  //       const { id, rating, text } = item;
  //       return (
  //         <FeedbackItem
  //           key={id}
  //           rating={rating}
  //           text={text}
  //           delete={() => removeCard(id)}
  //         />
  //       );
  //     })}
  //   </div>
  // );
};

export default FeedbackList;
