function App() {
  const handleClick = (name) => {
    return alert(`Hello Dear, ${name}`);
  };

  return (
    <>
      <button onClick={() => handleClick('Jomer')}>Click Me!</button>
    </>
  );
}
export default App;
