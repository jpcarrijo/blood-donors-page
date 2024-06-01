import PropTypes from "prop-types";
import {
    ContainerInput,
    FileInput,
    FileLabel,
    Icon,
    SuccessIcon,
    ErrorIcon,
} from "./styles";
import {
    faCheckCircle,
    faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";


const FileUpload = ({
    handleFileChange,
    handleFileClear,
    file,
    fileStatus,
}) => {
    return (
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
    );
};

FileUpload.propTypes = {
    handleFileChange: PropTypes.func.isRequired,
    handleFileClear: PropTypes.func.isRequired,
    file: PropTypes.any,
    fileStatus: PropTypes.oneOf(["success", "error"]),
};

export default FileUpload;
