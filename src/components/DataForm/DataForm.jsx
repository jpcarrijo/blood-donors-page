import PropTypes from 'prop-types';
import { Form } from "./styles";
import DataButton from "../Button/DataButton";

const DataForm = ({ handleSubmit, loading, responseData }) => {
    return (
        <Form onSubmit={handleSubmit}>
           <DataButton loading={loading} responseData={responseData} />
        </Form>
    );
};

DataForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    responseData: PropTypes.any,
};

export default DataForm;
