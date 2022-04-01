import React from 'react'
import logo from '../logo.svg';
import github from './assets/github.png'

export const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="inner-content">
                <div className="logo">
                    <img src={logo} alt="logo do projeto"></img>
                    <a href='/read-books/' alt='page'>Read Books</a>
                </div>

                <div className='menu'>
                    <a href="https://github.com/gabrielforster/" target='_blank' rel='noreferrer' alt='link para projeto no github'><img src={github} alt="imagem github" /></a>
                </div>  
            </div>
        </div>
    </header>
  )
}
