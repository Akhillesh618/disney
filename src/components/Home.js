import React from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';

export default function Home() {
    return (
        <Contaier>
            <ImgSlider />   {/* 3rd component ImageSlider.js  rendering in Home.js */}
            <Viewers />     {/* 4th component Viewers.js  rendering in Home.js */}
            <Movies />      {/* 5th component Movies.js  rendering in Home.js */}
        </Contaier>
    )
}

const Contaier = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x:hidden;

    &:before{
        background: url('/images/home-background.png') center center / cover
        no-repeat fixed;
        content:"";
        position:absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;


    }
`