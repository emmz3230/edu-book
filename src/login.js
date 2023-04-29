import React from "react";
import ReactDOM from 'react-dom/client'



const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    // console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/* alternative approach */}
        {/* <button type='submit' onClick={handleFormSubmission}>
          submit form
        </button> */}
        {/* <button type="submit" onClick={()=> {
          console.log('hello there')
        }} >click me</button> */}
        {/* add button with type='submit' */}
        <button type='submit'>submit form</button>
      </form>
      {/* <button type="submit" onClick={()=> {
          console.log('hello there')
        }} >click me</button> */}
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <EventExamples />
)
















