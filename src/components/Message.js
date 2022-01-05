import { useState } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";

function Message() {
  const db = getFirestore();
  const [state, setState] = useState({
    messageTitle: "Title",
    message: "Hello!",
  });
  const handleInput = (prevState, setter) => (event) => {
    setter({
      ...prevState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { message, messageTitle } = event.target;
    await addDoc(collection(db, "Messages"), {
      Title: messageTitle.value,
      Message: message.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name={"messageTitle"}
        onChange={handleInput(state, setState)}
        value={state.messageTitle}
      />
      <input
        name={"message"}
        onChange={handleInput(state, setState)}
        value={state.message}
      />
      <button type={"submit"}>Submit Message</button>
    </form>
  );
}

export default Message;
