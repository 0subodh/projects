import { useEffect, useState } from "react";

export default function ConnectToUser() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return <div>{JSON.stringify(data)}</div>;
}
