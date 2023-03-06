import React from 'react'
import styled from "styled-components"

function Detail() {
  return (
    <Container>
        <Background>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
        </Background>

        <Infoimg>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
        </Infoimg>

        <Buttoncontrols>
            <Play>
                <img src="/images/play-icon-black.png" />
                <span>PLAY</span>
            </Play>
            <Trailer>
                <img src="/images/play-icon-white.png" />
                <span>TRAILER</span>
            </Trailer>
            <Add>
                <span>+</span>
            </Add>
        </Buttoncontrols>

        <Theme>
            2018 • 7m • Family, Fantasy, Kids, Animation
        </Theme>
        <Info>
            A Chinese mom who’s sad when her grown son leaves home 
            gets another chance at motherhood when one of her dumplings springs to life. 
            But she finds that nothing stays cute and small forever.
        </Info>
    </Container>
  )
}

export default Detail

const Container = styled.div `
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 30px);
    position: relative;
    
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    filter: brightness(70%);

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
/* *************************************** */
const Infoimg = styled.div`
    height: 18vh;
    min-height: 180px;
    width: 23vw;
    min-width: 300px;
    margin-top: 70px;
    
    img{
        heigth: 100%;
        width: 100%;
        object-fit: cover;
    }
`

const Buttoncontrols = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
`
const Play = styled.button`
    border-radius: 4px;
    border: none;
    padding: 0 20px;
    background: rgb(249, 249, 249);
    margin-right: 15px;
    font-size: 15px;
    display: flex;
    align-items: center;
    letter-spacing: 1.2px;
    height: 40px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`
const Trailer = styled(Play)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const Add = styled.button`
    height: 38px;
    width: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgb(249, 249, 249);
    border-radius: 50%;
    background: rgb(0, 0, 0, 0.7);
    cursor: pointer;

    span{
        font-size: 25px;
        color: rgb(249, 249,249);
    }
`

const Theme = styled.div`
    font-size: 13px;
    letter-spacing: 1px;
    margin-top: 20px;
`

const Info = styled.div`
    margin-top: 18px;
    width: 670px;
    letter-spacing: 1.2px;
    line-height: 1.3;
`