function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.fname.value);
    console.log(event.target.elements.lname.value);
  };

  return (
    <>
      <form className="w-25 p-5" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="fname"
            placeholder="enter firstname"
            className=""
          />
        </div>
        <div>
          <input
            type="text"
            name="lname"
            placeholder="enter lastname"
            className=""
          />
        </div>
        <button className="bg-indigo-500 px-10 py-2" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
