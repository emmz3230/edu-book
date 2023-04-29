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


// const Book = () => {
//     const  title = 'Interesting Facts For Curious Mindsssss'
//     return(
//         <article className='book'>
//             <img 
//             src='https://images-na.ssl-images-amazon.com/
//             images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg' 
//             alt='Interesting Facts for Curiious Minds'/>
//             <h2>{title}</h2>

//             <h4 >Jordan Moore </h4>
//             <p>{6 + 6}</p>
//         </article>
//     )
// }

// const root = ReactDom.createRoot(document.getElementById('root'));

// root.render(<BookList />)



// import React from 'react';
// import ReactDom from 'react-dom/client'
// import './index.css'

// const author = 'jordan moore';
// const title = 'Interesting Facts For Curious Minds';
// const img = 'images/book-1.jpg';



// function BookList() {
//     return (
//         <section  className='booklist'>
//             <Book />
//             <Book />
           

//         </section>
//     )

// }

// const Book = () => {
//     
//     return(
//         <article className='book'>
//             <img src={img} alt={title} />
//             <h2>{title}</h2>
//             <h4 >{author} </h4>
//             </article>
//     )
// }

// parameters
// const someFunc = (param1,param2) => {
//     console.log|(param1,param2)
// }
// someFunc('job',developer)


// function BookList() {
//     return (
//         <section  className='booklist'>
//             <Book job='developer' />
//             <Book  title='random title' number={22}/>
//         </section>
//     )

// }

// const Book = (props) => {
    
//     return(
//         <article className='book'>
//             <img src={img} alt={title} />
//             <h2>{title}</h2>
//             <h4 >{author} </h4>
//             <p>{props.job}</p>
//             <p>{props.title}</p>
//             <p>{props.number}</p>
//             </article>
//     )
// }


// function BookList() {
//     return (
//         <section  className='booklist'>
//             <Book author={author} title={title} img={img} />
//             <Book  title={title} img={img}/>
//         </section>
//     )

// }

// const Book = (props) => {
    
//     return(
//         <article className='book'>
//             <img src={props.img} alt={props.title} />
//             <h2>{props.title}</h2>
//             <h4 >{props.author} </h4>
//             </article>
//     )
// }



// const root = ReactDom.createRoot(document.getElementById('root'));

// root.render(<BookList />)

// props - somewhat dynamic setup

// import React from 'react';
// import ReactDOM from 'react-dom/client';
 
// const firstBook = {
//  author:'Jordan Moore',
//  title:'Interesting Facs for Curious Minds',
//  img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg'
// }
// const secondBook = {
//     author:'James Clear',
//     title:'Atomic Habits',
//     img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg'
// }

// function BookList() {
//     return(
//         <section  className='booklist'> 
//             < Book 
//             author={firstBook.author}
//             title={firstBook.title}
//             img={firstBook.img}
//             >
//                 <p>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
//             repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
//             </p>
//             <button>click me</button>
//             </Book>
//             <Book 
//              author={secondBook.author}
//              title={secondBook.title}
//              img={secondBook.img}            
//             />
//         </section>
//     )
// }

// const Book = (props) => {
//     console.log(props);
//     return(
//         <article className='book'>
//             <img src={props.img} alt={props.title}/>
//             <h2>{props.title}</h2>
//             <h4>{props.author}</h4>
//         </article>
//     )
// }

// destructuring

// const Book = (props) => {
//     const {img, title, author, children} = props;
//     console.log(props);
//     return(
//         <article className='book'>
//             <img src={img} alt={title}/>
//             <h2>{title}</h2>
//             <h4>{author}</h4>
//             {children}
//         </article>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<BookList />)



// import React from 'react';
// import ReactDOM from 'react-dom/client';


// const books =[
//     {
//     author:'Jordan Moore',
//     title:'Interesting Facs for Curious Minds',
//     img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg'
//    },
//     {
//        author:'James Clear',
//        title:'Atomic Habits',
//        img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg'
//    }
// ]

// function BookList(){
//     return (
    
//     <section className='booklist'>
//         {books.map((book) => {
//             console.log(book)
       
//     return (
//         <article >
//         <h2>{book.title}</h2>
//        </article>
//          );
//     })}
//     </section>
//      );               
// }


// removed name and newname
// const names = ['john','peter','susan'];
// const newNames = names.map((name) => {
//     console.log(name)
//     return <h2>{name}</h2>
// })

// function BookList(){
//     return <section className='booklist'>{newNames}</section>
// }


// const Book = (props) => {
//     const {img,title,author} = props;
//     return (
//        <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         <h4>{author}</h4>
//        </article>
//     )
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<BookList />)




// import React from 'react';
// import ReactDOM from 'react-dom/client';


// const books =[
//     {
//     author:'Jordan Moore',
//     title:'Interesting Facs for Curious Minds',
//     img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg'
//    },
//     {
//        author:'James Clear',
//        title:'Atomic Habits',
//        img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg'
//    }
// ]

// function BookList(){
//     return (
    
//     <section className='booklist'>
//         {books.map((book,index) => {
//             console.log(book)
//     const {img, title, author, id} = book;
//     // return <Book  book={book} key={id}/>
//     return <Book  book={book} key={index} />

//     })}
//     </section>
//      );               
// }

// const Book = (props) => {
//     const {img,title,author} = props;
//     return (
//        <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         <h4>{author}</h4>
//        </article>
//     )
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<BookList />)




// import React from 'react';
// import ReactDOM from 'react-dom/client';


// const books =[
//     {
//     author:'Jordan Moore',
//     title:'Interesting Facs for Curious Minds',
//     img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg'
//    },
//     {
//        author:'James Clear',
//        title:'Atomic Habits',
//        img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg'
//    }
// ]

// function BookList(){
//     return (
    
//     <section className='booklist'>
//         {books.map((book) => {
//         console.log(book)
//     const { img, title, author } = book;
//     // return <Book  book={book} key={id}/>
//     return <Book  book={book}  />

//     })}
//     </section>
//      );               
// }

// const Book = ({book: {img, title, author}}) => {
    
//     return (
//        <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         <h4>{author}</h4>
//        </article>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<BookList />)




// import React from 'react';
// import ReactDOM from 'react-dom/client';


// const friends = ['john', 'peter', 'anna'];
// const newFriends = [...friends, 'susan'];
 
// const someObject = {
//     name: 'Emmanuel',
//     job: 'Front-end WeB-developer',
// }

// const newObject = {...someObject, location:'Nigeria'}


// const books =[
//     {
//     author:'Jordan Moore',
//     title:'Interesting Facs for Curious Minds',
//     img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
//     id:1,
// },
//     {
//        author:'James Clear',
//        title:'Atomic Habits',
//        img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
//        id:2,
//     }
// ]


// function BookList(){
//     return (
    
//     <section className='booklist'>
//         {books.map((book) => {
//         console.log(book)
//     return <Book  {...book} key={book.id}  />

//     })}
//     </section>
//      );               
// }

// const Book = ({book: {img, title, author}}) => {
//     return (
//        <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         <h4>{author}</h4>
//        </article>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<BookList />)



// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const btn = document.getElementById(btn);
// btn.addEventListener('click', function(e){

// })

// const EventExamples = () => {
//     const handleButtonClick = () => {
//         alert('handle button click');
//     };
//     return(
//         <section>
//             <button onClick={handleButtonClick}> click me</button>
//         </section>
//     )
// }





// const books =[
//     {
//     author:'Jordan Moore',
//     title:'Interesting Facts for Curious Minds',
//     img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
//     id:1,
// },
//     {
//        author:'James Clear',
//        title:'Atomic Habits',
//        img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
//        id:2,
//     }
// ]
// function BookList() {
//     const someValue = 'shakeAndBake';
//     const displayValue = () => {
//         console.log(someValue)
//     }
//     return(
//         <section className='booklist' >
//             {/* <EventExamples /> */}
//             {books.map((book) => {
//                 return <Book {...book} key={book.id} 
//                 displayValue={displayValue}
//                 />
//             })}
//         </section>
//     )
// }


// const EventExamples = () => {

//     const handleFormInput = (e) => {

//         console.log(` Input Name:${e.target.name}`)
//         console.log(`Input Value : ${e.target.value}`)
//         console.log('handle form input')
//     }
//     const handleButtonClick = () => {
//         alert('handle button click');
//     };
//     const handleFormSubmission = (e) => {
//         e.preventDefault();
//         console.log('form submitted')
//     }
//     return(
//         <section>
//             <form onSubmit={handleFormSubmission}>
//                 <h2>Typical Form</h2>
//                 <input 
//                 type='text'
//                 name='example'
//                 onChange={handleFormInput}
//                 style={{margin: '1rem 0'}}
//                 />
//                 <button type='submit'>submit form</button>
//             </form>
//             <button onClick={handleButtonClick}> click me</button>
//         </section>
//     )
// }


// const Book = ({img,title,author}) => {
    // const { img,title,author } =props;
    // const displayTitle = () => {
    //     console.log(title)
    // }
//     const someValue = 'shakeAndBake';
//     const displayValue = () => {
//         console.log(someValue)
//     }
//     return (
//        <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         {/* <button onClick={displayTitle}>display title</button> */}
//         <button onClick={displayValue}>click me</button>
        
//         <h4>{author}</h4>
//        </article>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<BookList/>)


// 


// import React from 'react';
// import ReactDOM from 'react-dom/client';


// const books =[
//     {
//     author:'Jordan Moore',
//     title:'Interesting Facts for Curious Minds',
//     img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
//     id:1,
// },
//     {
//        author:'James Clear',
//        title:'Atomic Habits',
//        img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
//        id:2,
//     }
// ]
// function BookList() {
//         const getBook = (id) => {
//         const book = books.find((book) => book.id === id );
//         console.log(book)
//     }

//     return(
//         <section className='booklist' >
//             {/* <EventExamples /> */}
//             {books.map((book) => {
//                 return <Book {...book} key={book.id} getBook={getBook}
//                 />
//             })}
//         </section>
//     )
// }




// const Book = (props) => {
//     const{img,title,author,getBook,id} =props;

//     // const getSingleBook = () => {
//     //     getBook(id);
//     // }
   
// return (
//    <article className='book'>
//     <img src={img} alt={title} />
//     <h2>{title}</h2>
//     {/* <button onClick={displayTitle}>display title</button> */}
//     <button onClick={() => getBook(id)}>display title</button>
//     <h4>{author}</h4>
//    </article>
// )
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<BookList/>)


import React from 'react';
import ReactDOM from 'react-dom/client';
import { books } from './books';
import Book from './book';

function BookList() {
       
    return(
        <section className='booklist' >
            {/* <EventExamples /> */}
            {books.map((book) => {
                return <Book {...book} key={book.id}    />
            })}
        </section>
    )
}







const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)



















































