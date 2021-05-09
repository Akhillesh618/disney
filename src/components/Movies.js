import React from 'react'
import styled from 'styled-components'

export default function Movies() {
    return (
        <Container>
            <h4>Recomended for You</h4>
            <Content>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6370/936370-v' alt='' />
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/219/860219-v' alt='' />
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v' alt='' />
                </Wrap>
                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5162/875162-v' alt='' />
                </Wrap>
                           
            </Content>
        </Container>
    )
}

const Container = styled.div``

const Content = styled.div`
    padding-bottom:10px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(6, minmax(0,1fr))
    

`

const Wrap = styled.div`
    border-radius:10px;
    overflow:hidden;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
     width:100%;
     height:100%;
     object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0/80%) 0px 40px 58px --16px,
        rgb(0 0 0 /72%) 0px 30px 22px --10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.5)
    }`