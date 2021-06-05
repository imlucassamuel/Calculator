import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 30%;
    margin-left: 40rem;
`

export const PageName = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 8rem;
    color: #ffffff;
`


export const Display = styled.main`
    height: 7em;
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    border-radius: 10px;
    border: none;
    color: #ffffff;
    background-color: #232c43;
    overflow: hidden;
    text-overflow: clip ellipsis;
    padding: 3.5rem 1rem 1rem;
   

    p{
        width: 100%;
        font: 700 1.5rem 'Spartan', sans-serif;
    }   
`
export const SectionButton = styled.footer`
    margin: 2rem 0;
    padding: 0 1rem;
    border-radius: 10px;
    background-color: #182034;
    display: grid;
    grid-template-columns: repeat(4, 20%);
    grid-template-columns: repeat(4, 1fr);
    align-items: center;

    button{
        margin: 1rem 0 0.8rem 0.5rem;
        padding: 1rem;
        cursor: pointer;
        color: #444b5a;
        font: 700 1.5rem 'Spartan', sans-serif;
        border-radius: 10px;
        border: none;
        transform: scale(0.9);
    }

    button:active {
        background-color: #ccc;
    }

    .delete {
        background-color: #3a4764;
        color: #ffffff;
    }
    .reset{
        grid-column: span 2;
        background-color: #3a4764;
        color: #ffffff;
    }

    .equal{
        font-size: 1.6rem;
        grid-column: span 2;
        background-color: #93261a;
        color: #ffffff;
    }

`