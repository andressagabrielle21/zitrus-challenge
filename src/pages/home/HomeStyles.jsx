import styled from '@emotion/styled';

export const Container = styled.div`
    width: 80vw;
    // MOBILE
    @media only screen and (max-width: 720px) {
        
        margin: 2rem;
    }
`

export const TitleHome = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ViewHome = styled.div`
    margin: 3rem 0;
    background-color: rgba(255, 255, 255, 0.733);
    padding: 20px;
    border-radius: 1rem;
    .userInfo {
        margin-bottom: 1rem;
        line-height: 32px;
        .titleInfo {
            display: flex;
            justify-content: space-between;
            align-items: center;
            h1:hover {
                text-decoration: underline;
                cursor: pointer;
            }
            img {
                width: 25px;
                margin-right: 1rem;
                &:hover {
                    cursor: pointer;
                    padding: 3px;
                    border: 3px solid red;
                    border-radius: 8px;
                    transition: .5s;
                }
            }
            // MOBILE
            @media only screen and (max-width: 720px) {
                flex-direction: column;
                h1 {
                    font-size: 20px;
                }
            }
        }
        .details {
            display: flex;
            justify-content: flex-start;
            p {
                margin-right: 1rem;
            }
            // MOBILE
            @media only screen and (max-width: 720px) {
                justify-content: center;
            }
        }
    }
`