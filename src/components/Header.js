/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
export default function Header() {
    return (
        <Nav>
            <Logo src='https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg' />
            <Navmenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>

                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>

                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>

                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>

                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>

                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>

            </Navmenu>

            <UserImg src="https://avatars.githubusercontent.com/u/74185224?v=4" />
        </Nav>
    )
}

const Nav = styled.nav`
    height:70px;
    background:#090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;

`
const Logo = styled.img`
    width:130px;
         
`
const Navmenu = styled.div`

    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;

        }

        span {
            font-size: 13px;
            letter-spacing: 2px;
            position: relative;


            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scale(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
                
            }
        }
    }

`

const UserImg = styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    cursor:pointer;
`