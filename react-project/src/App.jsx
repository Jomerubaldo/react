import Input from './components/Input';

function App() {
  return (
    //Here is component u can paste this your component then edit it using props tobe dynamic//
    <>
      <Input name="Button1" color="bg-green-500 px-10 py-2 text-red-500" />
      <Input name="Button2" color="bg-red-500 px-10 py-2 text-blue-500" />
      <Input name="Button2" color="bg-indigo-500 px-10 py-2 text-green-500" />
    </>
  );
}

export default App;
