import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <Content>
            <Logo src='/images/cta-logo-one.svg' />
            <SignUp>GET ALL THERE</SignUp>
            <Describe>Disney+ subscription video on-demand over-the-top streaming service 
                    owned by The Walt Disney, India, operated by Disney Entertainment, both 
                    divisions of The Walt Disney Company.
            </Describe>
            <LogoBottom src="/images/cta-logo-two.png" />
        </Content>
    </Container>
  )
}

export default Login

const Container = styled.div`
    min-height: calc(100vh - 70px);
    position: relative;
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        background-size: cover;
        background-image: url("/images/login-background.jpg");
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
`

const Content = styled.div`
    max-width: 800px;
    width: 60%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
`

const Logo = styled.img`
`
const LogoBottom = styled.img`
    width: 90%;
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5; 
    padding: 11px 0;
    text-align: center;
    border-radius: 4px;
    font-weight: bold;
    color: #f9f9f9;
    cursor: pointer;
    letter-spacing: 1.5px;
    transition: all 250ms;
    margin-top: 8px;
    
    &:hover {
        background: #0483ee;
    }
`

const Describe = styled.p`
    font-size: 12px;
    letter-spacing: 1.3px;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 18px;
`