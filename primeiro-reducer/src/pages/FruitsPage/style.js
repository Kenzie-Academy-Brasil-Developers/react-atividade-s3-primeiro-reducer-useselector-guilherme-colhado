import styled from 'styled-components'

export const FruitsHomeStyle = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 30px;
    box-sizing: border-box;
    background-color: antiquewhite;
    div{
        font-size: 20px;
        width: 30%;
        display: flex;
        padding: 20px 0;
        border: 1px solid black;
        justify-content: center;
        align-items: center;
        transition: all .25s ease-in;
        &:hover{
            background-color: white;
        }
    }
`

