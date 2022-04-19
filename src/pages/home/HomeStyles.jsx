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
                &:hover {
                    cursor: pointer;
                    padding: 2px;
                    border: 2px solid red;
                    border-radius: 8px;
                    transition: .5s;
                }
                @media only screen and (max-width: 720px) {
                    width: 20px;
                }
            }
            // MOBILE
            @media only screen and (max-width: 720px) {
                margin-bottom: 5px;
                h1 {
                    font-size: 23px;
                }
            }
        }
        .details {
            display: flex;
            justify-content: flex-start;
            p {
                margin-right: 1rem;
            }
        }
    }
`