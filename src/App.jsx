import { useState } from "react";
import BloodDonor from "./assets/doacao-de-sangue.png";
import Hearth from "./assets/doacao-coracao.jpg";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import DataDisplay from "./components/DataDisplay/DataDisplay";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faTimesCircle,
    faCoffee,
} from "@fortawesome/free-solid-svg-icons";

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
    background: var(--linear);
    box-shadow: var(--box-shadow);
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
    display: flex;
    justify-content: flex-end;
`;

const FileInput = styled.input`
    display: none;
`;

const FileLabel = styled.label`
    position: relative;
    display: inline-block;
    background: var(--linear);
    padding: 10px 40px 10px 20px;
    border-radius: 3px;
    cursor: pointer;
    font-weight: 400;
    font-size: 0.9em;
    color: white;
    &:active {
        box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 1);
    }
`;

const Icon = styled.span`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
`;

const SuccessIcon = styled(FontAwesomeIcon)`
    color: green;
`;

const ErrorIcon = styled(FontAwesomeIcon)`
    color: red;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const Button = styled.button`
    padding: 10px;
    background: var(--linear);
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    &:active {
        box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 1);
    }
`;

const Bottom = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1em;
    color: white;
    padding: 0.5em;
    margin-top: 20px;
    background: var(--linear);
    box-shadow: var(--box-shadow);
`;

function App() {
    const [file, setFile] = useState(null);
    const [fileStatus, setFileStatus] = useState(null);
    const [responseData, setResponseData] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === "application/json") {
            setFile(selectedFile);
            setFileStatus("success");
        } else {
            setFile(null);
            setFileStatus("error");
        }
    };

    const handleFileClear = () => {
        setResponseData(null);
        setFileStatus("error")
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post(
                "http://localhost:8082/donors/save?",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setResponseData(response.data);
        } catch (error) {
            console.error("Error uploading file:", error);
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
                                accept=".json"
                                onChange={handleFileChange}
                            />
                            <FileLabel htmlFor="file" onClick={handleFileClear}>
                                Arquivos com extensão .json
                                <Icon visible={!!file}>
                                    {fileStatus === "success" && (
                                        <SuccessIcon icon={faCheckCircle} />
                                    )}
                                    {fileStatus === "error" && (
                                        <ErrorIcon icon={faTimesCircle} />
                                    )}
                                </Icon>
                            </FileLabel>
                        </ContainerInput>
                        <Form onSubmit={handleSubmit}>
                            <Button type="submit">
                                Clique para apresentar os dados
                            </Button>
                        </Form>
                        {responseData && <DataDisplay data={responseData} />}
                    </ComponentContainer>
                </Container>
                <Bottom>
                    Desenvolvido com <FontAwesomeIcon icon={faCoffee} /> por
                    João Paulo Carrijo
                </Bottom>
            </PageContainer>
        </>
    );
}

export default App;
