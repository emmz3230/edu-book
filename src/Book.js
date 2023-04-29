
// export
  const Book = (props) => {
    const{img,title,author} =props;

    // const getSingleBook = () => {
    //     getBook(id);
    // }
   
return (
   <article className='book'>
    <img src={img} alt={title} />
    <h2>{title}</h2>
    <h4>{author}</h4>
   </article>
)
}

export default Book;
