import React from 'react'

export const BookModal = ({show, item, onClose}) => {

    if(!show){
        return null
    }

    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail

    return (
    <>
        <div className="overlay">
            <div className="overlay-inner">
                <button onClick={onClose} className='close'>X</button>
                <div className="inner-box">
                    <img src={thumbnail} alt="" />
                    <div className="info">
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors}</h3>
                        <h4>{item.volumeInfo.publisher}<span> - {item.volumeInfo.publishedDate}</span></h4>
                        <h4>N° de páginas: {item.volumeInfo.pageCount}</h4>
                        <a target='_blank' rel='noreferrer' href={item.volumeInfo.previewLink}>Mais</a>
                    </div>
                </div>
                <h4 className='description'>{item.volumeInfo.description}</h4>
            </div>
        </div>
    </>
  )
}
