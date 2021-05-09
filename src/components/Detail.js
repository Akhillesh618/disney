import React from 'react'
import styled from 'styled-components'
export default function Detail() {
    return (
        <Container>
            <Background>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5163/875163-v' alt=''/>
            </Background>
            <ImageTitle>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5163/875163-v' alt='' />
            </ImageTitle>
            
            {/* controls part */}
            
              
            
        </Container>
    )
}

const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
`

const Background = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.5;

    img{
        width:100%;
        height: 100%;
        object-fit:cover;
    }

`

const ImageTitle = styled.div`
    height: 30vh;
    min-height:170px;
    width: 35vw;
    min-width:200px;

    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }

`