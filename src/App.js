import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [books, setBooks] = useState(data);
  const [showText, setShowText] = useState(false);
  const removeBook = (id) => {
    let newBooks = books.filter(book => book.id !== id);
    setBooks(newBooks);

  }
  const showTextClick = (item) => {
       item.showMore = !item.showMore;
       setShowText(!showText)  
      }
  return (
    <div> 
      <div className='container'>
        <h1>TOP {books.length} BOOKS TO READ IN  2023</h1>
      </div>

      {books.map((item) => {
        const {id, name, author, description, image, showMore} = item;
       
      
        return (
          <div key={id}>
            <div className='container'>
              <h2>{id} - {name}</h2>
            </div>
            <div className='container'>
              <h3><i>by {author}</i></h3>
            </div>
            <div className='container'>
              <img src={image} width="300px" alt="book"/>
            </div>
            <div className='container'>
              <p>{showMore ? description : description.substring(0,300) + "..."}
              <button className='btn' onClick = {() => showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button></p>
            </div>
            <div className='container'>
              <button onClick={() => removeBook(id)}>REMOVE</button>
            </div>
          </div>
        )
      })}

    </div>
  );
}

export default App;
