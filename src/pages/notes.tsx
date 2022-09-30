import { useState } from "react";

export default function Notes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const dataObj = Object.fromEntries(data);
    setLoading(true);
    const response = await fetch("/api/createNote", {
      method: "POST",
      body: JSON.stringify({ title: dataObj.title, body: dataObj.body }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    setData(result);
    setLoading(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="body" placeholder="Body" />
        <button type="submit">Submit</button>
        {loading ? (<p>Loading...</p>):(
          data.map((item: any) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          ))
        )}
      </form>
    </div>
  );
}
