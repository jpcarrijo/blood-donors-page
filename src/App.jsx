import { useState } from "react";
import axios from "axios";
import GlobalStyle from "./styles/GlobalStyle";
import FileUpload from "./components/FileUpload/FileUpload";
import DataForm from "./components/DataForm/DataForm";
import DataDisplay from "./components/DataDisplay/DataDisplay";
import {
    PageContainer,
    ImageTop,
    Title,
    Container,
    Aside,
    Logo,
    ComponentContainer,
    Bottom,
} from "./styles/MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import BloodDonor from "./assets/doacao-de-sangue.png";
import Hearth from "./assets/doacao-coracao.jpg";


function App() {
    const [file, setFile] = useState(null);
    const [fileStatus, setFileStatus] = useState(null);
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);

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
    };

    console.log(file);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        setLoading(true);

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
        } finally {
            setLoading(false);
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
                        <FileUpload
                            handleFileChange={handleFileChange}
                            handleFileClear={handleFileClear}
                            file={file}
                            fileStatus={fileStatus}
                        />
                        <DataForm
                            handleSubmit={handleSubmit}
                            loading={loading}
                            responseData={responseData}
                        />
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
