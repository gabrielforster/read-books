import React, {useState} from 'react'
import axios from 'axios'

export const Main = () => {
 
    const [search, setSearch] = useState("")
    const [bookData, setData] = useState([])
    let books = bookData
    const searchBook=(evt) => {
      if(evt.key === "Enter")
      {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search +'&key=AIzaSyAjxRebhAJBpbVFloaCOeiV5sDUosoJtEk&maxResults=40').then(res=>setData(res.data.items)).catch(err=>console.log(err))
      }
    }
  
    return (
        <main>
            <div className='container'>
                <div className='search-book'>
                    <input value={search} 
                    onChange={e=>setSearch(e.target.value)}
                    onKeyPress={searchBook} 
                    type='text' 
                    placeholder='Pesquise um livro!' 
                    id='search-content'
                    autocomplete="off"
                    >
                    </input>
                
                    <div className='content'>
                    {books.map((item)=>{
                        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
                        if(thumbnail !== undefined)
                        {
                            return(
                            <>
                                <div className='book-card'>
                                    <img className='book-poster' src={thumbnail} alt=""/>
                                    <div className="info">
                                        <div className='header'>
                                            <h3 className='title'>{item.volumeInfo.title}</h3>
                                            <p className='author'>{item.volumeInfo.authors}</p>
                                            <p className='author'>{item.volumeInfo.publishedDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                            )
                            }
                        return null
                        }
                    )
                    } 
                    </div>
                </div>
            </div>
        </main>
  )
}
