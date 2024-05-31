import { useState } from "react";
import BloodDonor from "./assets/doacao-de-sangue.png";
import Hearth from "./assets/doacao-coracao.jpg";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import axios from "axios";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const ImageTop = styled.div`
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

const Title = styled.div`
    width: 100%;
    text-align: start;
    color: white;
    padding: 1em;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    background: linear-gradient(
        90deg,
        rgba(253, 86, 29, 1) 0%,
        rgba(252, 134, 69, 1) 100%
    );
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
    display: flex;
    width: 95vw;
    align-items: flex-start;
`;

const Aside = styled.aside`
    width: 20vw;
    min-height: 40vh;
    margin-right: 1.5em;
    // background: radial-gradient(
    //     circle,
    //     rgba(252, 134, 69, 1) 25%,
    //     rgba(253, 105, 29, 1) 85%
    // );
    // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 4em;
    position: sticky;
    top: 0;
    height: fit-content;
`;

const Logo = styled.img`
    width: 85%;
    display: block;
`;
const ComponentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const ContainerInput = styled.div`
    padding: 10px;
    border-radius: 8px;
`;
const FileInput = styled.input`
    display: none;
`;

const FileLabel = styled.label`
    background: linear-gradient(
        90deg,
        rgba(253, 86, 29, 1) 0%,
        rgba(252, 134, 69, 1) 100%
    );
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
    font-weight: 400;
    font-size: 0.9em;
    color: white;
`;

const Card = styled.div`
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
    padding: 10px;
    border: 1px solid #ddd;
`;

const Bottom = styled.div`
    width: 100%;
    text-align: start;
    color: white;
    padding: 1em;
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
    background: linear-gradient(
        90deg,
        rgba(252, 134, 69, 1) 0%,
        rgba(253, 86, 29, 1) 100%
    );
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function App() {
    const [data, setData] = useState([]);

    const [people, setPeople] = useState([]);

    const fetchData = async () => {
        try {
            fetch("http://localhost:3000/donors")
                .then((resp) => resp.json())
                .then((data) => setPeople(data));
            console.log(people);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };
    return (
        <>
            <GlobalStyle />
            <PageContainer>
                <ImageTop image={Hearth} />
                <Title> Insera sua lista de doadores </Title>
                <Container>
                    <Aside>
                        <Logo src={BloodDonor} alt="imagem bolsa com coracao" />
                    </Aside>
                    <ComponentContainer>
                        <ContainerInput>
                            <FileInput
                                type="file"
                                id="file"
                                onClick={fetchData}
                            />
                            <FileLabel htmlFor="file">
                                Selecione um arquivo
                            </FileLabel>
                        </ContainerInput>
                        <Card>
                            <ul>
                                {people.map((person, index) => (
                                    <li key={index}>
                                        Nome: {person.nome}, CPF: {person.cpf}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </ComponentContainer>
                    );
                </Container>
                <Bottom />
            </PageContainer>
        </>
    );
}

export default App;
