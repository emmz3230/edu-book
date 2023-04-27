// function Greeting(){
//  return <h2> My first Component</h2>
// }

// arrow function also works in react
// const Greeting = () => {
//     return <h2>My First Component</h2>
// }
// always Start a react with capital letters
// must always return jsx Element(html)
// and the last but not the least always close the tag


// typical component 

// const Greeting = () => {
//     return <h2>My First Component</h2>
// }
// export default Greeting;


// root component (only one)

// import React from 'react';
// import ReactDOM  from 'react-dom/client';

// function Greeting() {
//     return <h2>My First Component</h2>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Greeting/>);

// const Capital = () => {
//     // return <h2>figure</h2>
//     return <div>something</div>
// }

// import React from 'react';
// import ReactDOM  from 'react-dom/client';


// const Greeting = () => {
//     return React.createElement('h2',{}, 'hello world')
// }

// const Greeting(){
//     return (
//         <div>
//             <h2>hello world</h2>
//         </div>
//     )
// }

// the different between this and the first code is that 
// this have a general parent elements
// const Greeting = () => {
//     return React.createElement(
//         'div',{},
//         React.createElement('h2',{},'hello world')
//     )
// }

// const Greeting(){
//     return (
//     <React.Fragment>
//         rest of the return
//     </React.Fragment>
//     ) 
// }



// const Greeting = () => {
//     return (
//     <>
//         rest of the return
//     </>
//     ) 
// }


// camelCase property naming convention


// const Greeting = () => {
//      const myFunction = () => {

//      }
//     return (
//         <div  tabIndex={1}>
//         <button onClick={myFunction}> click me</button>
//         <label htmlFor='name'>Name</label>
//         <input readOnly = {true} id='name' />
//         </div>
//     )
//     // in html 
//     // <div tabindex= "1">
//     //     <button onclick = "myFunction()" >click me</button>
//     //     <label for= 'name'>Name</label>
//     //     <input readonly id ="name" /> 
//     // </div>
// }


// clasName  instead of class
// return <div classNmae = "somevalue">hello</div>

// close every Element
// return <img />
// return <input />


// always make sure u have the opening tag in the same line as return or ()
// u either use () or when u use the return  make sure they are in hte same 
// line with  the return key word


// function Greeting (){
//     return (
//         <>
//         <div className='someValue'>
//         <h3>hello people</h3>
//         <ul>
//             <li>
//                 <a href='Greeting'> hello world</a>
//             </li>
//         </ul>
//         </div>
//         <h2> hello world</h2>
//         <input type="text" name="" id="" />
//         </>
//     )
// }

// function Greeting() {
//     return(
//         <div>
//             <Person />
//             <Message />
//         </div>
//     )
// }

// const Person = () => <h2>John doe</h2>
// const Message = () => {
//     return <p> this is my Message</p>
// }


// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Greeting/>);

// import React from 'react';
// import ReactDom from 'react-dom/client'

// function BookList() {
//     return (
//         <section>
//             <Book />
//             <Book />
//             <Book />
//             <Book />

//         </section>
//     )

// }

// const Book = () => {
//     return(
//         <article>
//             <Image />
//             <Title />
//             <Author />
//         </article>
//     )
// }

// const Image = () => <h2>image placeholder</h2>
// const Title = () => {
//     return <h2>Book Title</h2>
// }
// const Author = () => <h4>Author</h4>

// const root = ReactDom.createRoot(document.getElementById('root'));

// root.render(<BookList />)


// import React from 'react';
// import ReactDom from 'react-dom/client'
// import './index.css'

// function BookList() {
//     return (
//         <section  className='booklist'>
//             <Book />
//             <Book />
//             <Book />
//             <Book />

//         </section>
//     )

// }

// const Book = () => {
//     return(
//         <article className='book'>
//             <Image />
//             <Title />
//             <Author />
//         </article>
//     )
// }

// const Image = () => <img 
// src='https://images-na.ssl-images-amazon.com/
// images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg' 
// alt='Interesting Facts for Curiious Minds'/>
// const Title = () => {
//     return <h2>Interesting fact for curious Minds</h2>
// }
// const Author = () => {
//     const inlineHeadingStyles = {
//       color: '#617d98',
//       fontSize: '0.75rem',
//       marginTop: '0.5rem',
//     };
//     // inline css will have power over external css 
//     // check index.css file
//     return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
//   };

// const root = ReactDom.createRoot(document.getElementById('root'));

// root.render(<BookList />)



import React from 'react';
import ReactDom from 'react-dom/client'
import './index.css'

function BookList() {
    return (
        <section  className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />

        </section>
    )

}

// const Book = () => {
//     return(
//         <article className='book'>
//             <img 
//             src='https://images-na.ssl-images-amazon.com/
//             images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg' 
//             alt='Interesting Facts for Curiious Minds'/>
//             <h2>Interesting fact for curious Minds</h2>
//             <h4 >Jordan Moore </h4>
//         </article>
//     )
// }

// {} in jsx means going back to jsland
// value inside must be an expression (return value),
// can't be a statement


const Book = () => {
    const  title = 'Interesting Facts For Curious Mindsssss'
    return(
        <article className='book'>
            <img 
            src='https://images-na.ssl-images-amazon.com/
            images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg' 
            alt='Interesting Facts for Curiious Minds'/>
            <h2>{title}</h2>

            <h4 >Jordan Moore </h4>
            <p>{6 + 6}</p>
        </article>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList />)

