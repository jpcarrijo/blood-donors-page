import PropTypes from 'prop-types';
import { Button } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";



const DataButton = ({ loading, responseData }) => {
    return (
        <Button type="submit" disabled={loading || !!responseData}>
            {loading ? (
                <FontAwesomeIcon icon={faSpinner} spin />
            ) : responseData ? (
                "Dados apresentados"
            ) : (
                "Clique para apresentar os dados"
            )}
        </Button>
    );
};

DataButton.propTypes = {
    loading: PropTypes.bool.isRequired,
    responseData: PropTypes.any,
};

export default DataButton;
