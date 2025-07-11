import Button from './components/Button';
import Input from './components/Input';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    //check if user is login before using boolean
    const boolean = true;
    return (condition =
      boolean === true
        ? alert(
            `Welcome Back, ${
              event.target.elements.firstname.value +
              ' ' +
              event.target.elements.lastname.value
            }`
          )
        : alert(
            `Welcome, ${
              event.target.elements.firstname.value +
              ' ' +
              event.target.elements.lastname.value
            }`
          ));
  };
  //onSubmit event handling
  //import components
  return (
    <div className="bg-[#222831] w-screen h-screen flex justify-center items-center">
      <div className="bg-[#00ADB5] w-96 h-96 rounded-md flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="flex-1 justify-center items-center">
            <Input />
            <div className="flex justify-center">
              <Button />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;

//add function if user enter the click without value alert please enter first value
