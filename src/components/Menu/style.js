import styled from 'styled-components';
import Button from '../Button';

export const LogoImage = styled.img `
    max-width: 168px;
    @media(max-width: 800px){
        max-width: 105px;
    }
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;

    position: fixed;
    top: 0;
    left: 0;
    padding-left: 5%;
    padding-right: 5%;


    display: flex;
    justify-content: space-between; /* distribui horizontal */
    align-content: center; /* centraliza vertical */

    background: var(--black);
    border-bottom: 2px solid var(--primary);

    @media (max-width: 800px) {
        height: 40px; /* reifi */
        justify-content: center;

    }
`;

export const ButtonLink = styled(Button)`
    color: var(--white);
    border: 1px solid var(--white);
    padding: 16px 24px;
    font-size: 16px;
    border-radius: 4px;
    font-weight: bold;
    text-decoration: none;
    transition: opacity .3s;

    &:houver,
    &:focus {
        opacity: .5;
    }

    @media (max-width: 800px){
        background-color: var(--primary);
        border: 0;
        border-radius: 0;
        bottom: 0;
        color: var(--white);
        left: 0;
        outline: 0;
        position: fixed;
        right: 0;
        text-align: center;

    }
`;