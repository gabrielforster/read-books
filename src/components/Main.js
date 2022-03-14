import React, {useState} from 'react'
import axios from 'axios'
import { BookCard } from './BookCard'

export const Main = () => {
    const [search, setSearch] = useState("")
    const [bookData, setData] = useState([])
    let books = bookData
    const searchBook=(evt) => {
      if(evt.key === "Enter")
      {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search +'&key=AIzaSyAjxRebhAJBpbVFloaCOeiV5sDUosoJtEk&maxResults=40')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
    }
    }
  
    return (
        <main>
            <div className='add-content'>
                <div className='search-book'>
                    <input value={search} 
                    onChange={e=>setSearch(e.target.value)}
                    onKeyPress={searchBook} 
                    type='text' 
                    placeholder='Pesquise um livro!' 
                    id='search-content'
                    autoComplete="off"
                    >
                    </input>
                
                    <div className='content'>
                        {
                            <BookCard book={books}/>
                        }
                    </div>
                </div>
            </div>
        </main>
  )
}
