import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const ImageTop = styled.div`
    width: 100%;
    height: 50vh;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: white;
`;

export const Title = styled.div`
    width: 100%;
    text-align: center;
    color: white;
    padding: 1em;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    background: var(--linear);
    box-shadow: var(--box-shadow);
`;

export const Container = styled.div`
    display: flex;
    width: 95vw;
    align-items: flex-start;
`;

export const Aside = styled.aside`
    width: 20vw;
    min-height: 40vh;
    margin-right: 1.5em;
    // background: radial-gradient(
    //     circle,
    //     rgba(252, 134, 69, 1) 25%,
    //     rgba(253, 105, 29, 1) 85%
    // );
    // box-shadow: var(--box-shadow);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 4em;
    position: sticky;
    top: 0;
    height: fit-content;
`;

export const Logo = styled.img`
    width: 85%;
    display: block;
`;

export const ComponentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

export const Bottom = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1em;
    color: white;
    padding: 0.5em;
    margin-top: 20px;
    background: var(--linear);
    box-shadow: var(--box-shadow);
`;
