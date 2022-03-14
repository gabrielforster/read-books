import React,{useState} from 'react'
import { BookModal } from './BookModal'

export const BookCard = ({ book }) => {
    const[showModal, setShowModal] = useState(false)
    const[bookItem, setBookItem] = useState()
    
   return(
       <>
    {
        book.map((item)=>{
            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
            if(thumbnail !== undefined)
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
                            
                            <div className="controls">
                                <button 
                                className='btn'
                                onClick={()=>{setShowModal(true);setBookItem(item)}}
                                >
                                    Descrição
                                </button> 
                            </div>
                            
                        </div>
                    </div>
                    <BookModal show={showModal} item={bookItem} onClose={()=>setShowModal(false)} />
                </>
            )
            return null
        })
    }
    </>
   )

}