import styled from "@emotion/styled";

export const Container = styled.div`
    min-width: 550px;
`

export const LoginPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .loginBox {
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
        h1 {
            margin-bottom: 12px;
        }
        .error {
            margin: 12px 0;
            color: red;
            font-weight: 600;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #fff;
        border-radius: 1rem;
        padding: 3rem;
        .formContent {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            input {
                height: 40px;
                margin-bottom: 1rem;
                padding: 9px;
                border-radius: 1em;
                border: none;
                font-size: 15px;
                &:focus-visible {
                    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
                    outline: none;
                }
            }
            button {
                background-color: rgb(236, 160, 160);
                padding: 15px 40px;
                border: none;
                border-radius: 2rem;
                font-size: 15px;
                &:hover {
                    transition: 1s;
                    transform: scale(.9,.9);
                    background-color: rgb(241, 126, 126);
                }
            }
        }
    }
    // MOBILE
    @media only screen and (max-width: 720px) {
        display: block;
        img {
            display: none;
        }
        .loginBox {
            margin: 50% 17%;
        }
    }
`

export const Button = styled.button`
    background-color: rgb(236, 160, 160);
    padding: 15px 40px;
    border: none;
    border-radius: 2rem;
    font-size: 15px;
    font-weight: 600;
    &:hover {
        transition: 1s;
        transform: scale(.9,.9);
        background-color: rgb(241, 126, 126);
    }
    &&&.addButton {
        position: fixed;
        border-radius: 66px;
        bottom: 1rem;
        right: 1rem;
        padding: 18px 32px;
        font-size: 36px;
    }
`
// In Styled Components, you don't use '!important', you use '&&&' alongside the class name