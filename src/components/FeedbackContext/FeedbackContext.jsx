import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useLayoutEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useLayoutEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = () => {
    axios
      .get("http://localhost:500/feedback")
      .then((resp) => {
        setFeedback(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoading(false);
  };

  //Add new feedback
  // ***************************************
  // ***************************************
  // ***************************************
  // for Reference
  // const feedBackAdd = async (newFeedback) => {
  //   let response = await axios({
  //     method: "post",
  //     url: "http://localhost:500/feedback",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: JSON.stringify(newFeedback),
  //   });
  //   const newNewfeedback = response.data;
  //   // console.log(newNewfeedback);
  //   // newFeedback.id = uuidv4();
  //   // newNewfeedback.id = parseInt(newFeedback.id);
  //   setFeedback([newNewfeedback, ...feedback]);
  // };

  // ***************************************
  // ***************************************
  // ***************************************

  //Add new feedback
  const feedBackAdd = (newFeedback) => {
    axios({
      method: "post",
      url: `http://localhost:500/feedback?_sort=id&_order=decs`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(newFeedback),
    })
      .then((response) => {
        const newNewfeedback = response.data;
        setFeedback([newNewfeedback, ...feedback]);
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //remove feedback
  const deleteCard = async (id) => {
    if (window.confirm("Do you want to Delete ?")) {
      axios({
        method: "delete",
        url: `http://localhost:500/feedback/${id}`,
      })
        .then((response) => {
          let filteredItem = feedback.filter((item) => item.id !== id);
          setFeedback(filteredItem);
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //edit feedback
  const editFeedback = (item) => {
    // console.log(item);
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //update feedback
  const updateFeedback = async (id, updItem) => {
    axios({
      method: "put",
      url: `http://localhost:500/feedback/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(updItem),
    })
      .then((response) => {
        // console.log(response);
        setFeedback(
          feedback.map((item) =>
            item.id === id ? { ...item, ...response } : item
          )
        );
        setFeedbackEdit({ ...feedbackEdit, edit: false });
      })
      .catch((erros) => {
        console.log(erros);
      });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteCard,
        feedBackAdd,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
