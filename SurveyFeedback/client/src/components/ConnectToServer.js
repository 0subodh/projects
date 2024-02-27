import { useEffect, useState } from "react";

export default function ConnectToServer() {
  const [message, setMessage] = useState([{}]);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {typeof message.users === "undefined" ? (
        <h1>Loading</h1>
      ) : (
        message.users.map((u, i) => {
          return <p key={i}>{u}</p>;
        })
      )}
    </div>
  );
}
