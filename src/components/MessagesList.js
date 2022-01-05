import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

export function MessagesList() {
  const db = getFirestore();
  const messagesRef = collection(db, "Messages");
  // eslint-disable-next-line no-unused-vars
  const [value, loading, error] = useCollection(messagesRef);
  console.log(error);
  return (
    <div className={"messages"}>
      <h2> Messages:</h2>
      {value &&
        value.docs.map((doc) => (
          <>
            <div className="message">{JSON.stringify(doc.data())}</div>
          </>
        ))}
    </div>
  );
}
