import React from 'react'
import styled from'styled-components'

function Header() {
  return (
    <Nav>
        <Logo src='/images/logo.svg' />

        <Navmenu>
            <a>
                <img src='/images/home-icon.svg' />
                <span>HOME</span>
            </a>
            <a>
                <img src='/images/search-icon.svg' />
                <span>SEARCH</span>
            </a>
            <a>
                <img src='/images/watchlist-icon.svg' />
                <span>WATCHLISTIUMASCKN</span>
            </a>
            <a>
                <img src='/images/original-icon.svg' />
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src='/images/movie-icon.svg' />
                <span>MOVIES</span>
            </a>
            <a>
                <img src='/images/series-icon.svg' />
                <span>SERIES</span>
            </a>
        </Navmenu>

        <Navimg src='/images/login-icon.jpg' />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 40px;
    overflow-x: hidden;
`
const Logo = styled.img`
    width: 90px;
`
const Navmenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 25px;
        cursor: pointer;
        
        img{
            height: 18px;
        }
        span
        {
            font-size: 15px;
            letter-spacing: 1.5px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left:0;
                right:0;
                bottom:-5px;
                opacity:0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms ease-out;
            }
        }

        &:hover {
            span:after{
                opacity: 1;
                transform: scaleX(1);
            }
        }
        
    }

`

const Navimg = styled.img`
    height: 48px;
    width: 48px;
    border-radius: 70%;
    cursor: pointer;
`