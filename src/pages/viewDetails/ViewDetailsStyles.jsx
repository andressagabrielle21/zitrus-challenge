import styled from '@emotion/styled'

export const Container = styled.div`
    width: 60vw;
    background-color: #fff;
    padding: 3rem;
    box-shadow: 0 5px 16px rgba(0, 0, 0, .3);
    border-radius: 8px;
    p {
        font-size: 20px;
        line-height: 25px;
        span{
            font-weight: bold;
        }
    }
    // MOBILE
    @media only screen and (max-width: 720px) {
        width: 85vw;
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`