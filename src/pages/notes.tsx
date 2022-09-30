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
      <form onSubmit={handleSubmit} className='flex justify-center flex-row mt-[5rem] flex-wrap'>
        <input type="text" name="title" placeholder="Title" className="my-5 mx-5" />
        <input type="text" name="body" placeholder="Body"  className="my-5 mx-5" />
        <button type="submit" className="my-5 mx-5  text-xl bg-white text-black border-2 border-white font-semibold py-3 px-7 rounded-full hover:bg-black hover:text-white">Submit</button>
        </form>
        <div className="text-center mt-5">
        {loading ? (<p>Loading...</p>) : (
          data.map((item: any) => (
            <div key={item.id} className='mt-[2rem] px-5 py-3'>
              <h1 className="text-xl">{item.title}</h1>
              <p className="text-xl">{item.body}</p>
            </div>
          ))
        )}
        </div>
    </div>
  );
}
