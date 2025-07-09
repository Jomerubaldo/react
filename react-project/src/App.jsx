function App() {
  const studentInfo = {
    name: 'Jomer',
    age: 21,
    course: 'BSIT',
  };

  const myFormat = (studentInfo) => {
    // need pala maglagay ng parameter from variable ng object
    return studentInfo.name + ' ' + studentInfo.age + ' ' + studentInfo.course;
  };

  return (
    // copy paste lang yong variable name ng arrow function tapos yong parameter niya using curley braces
    <>
      <h1>{myFormat(studentInfo)}</h1>
    </>
  );
}

export default App;
