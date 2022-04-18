import styled from '@emotion/styled';

export const Container = styled.div`
    width: 70vw;
    @media only screen and (max-width: 720px) {
        width: 85vw;
    }
`

export const CreatePage = styled.div`
    background-color: rgba(255, 255, 255, 0.904);
    box-shadow: 0 5px 16px rgba(0, 0, 0, .3);
    border-radius: 8px;
    padding: 3rem;
    .titleDiv {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .closeButton {
            background-color: rgb(228, 48, 48);
            padding: 15px 25px;
            &:hover {
                background-color: rgb(211, 0, 0);
            }
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
    input {
        height: 40px;
        border-radius: 7px;
        border: none;
        margin-bottom: 1rem;
        padding: 15px;
        &:focus-visible {
            box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
            outline: none;
        }
    }
`

