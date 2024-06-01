import PropTypes from "prop-types";
import { Table, Th, Td, Title } from "./styles";
import { StateNames } from "../States/StatesMapping";


function formatNumber(number) {
    return parseFloat(number).toFixed(1).replace(".", ",");
}

const DataDisplay = ({ data }) => {
    if (!data) return null;

    const totalByState = data.totalByState.byState;
    const averageIMC = data.averageIMC.average;
    const obesePercentageList = data.obesePercentageList.sort((a, b) =>
        a.gender.localeCompare(b.gender)
    );
    const averageByAge = data.averageByAge.averageByAge;
    const receivers = data.receivers.receivers;

    const stateArray = Object.entries(totalByState);
    const bloodTypeAverage = Object.entries(averageByAge);
    const bloodTypeReceivers = Object.entries(receivers);

    stateArray.sort((a, b) => {
        const stateNameA = StateNames[a[0]] || a[0];
        const stateNameB = StateNames[b[0]] || b[0];
        return stateNameA.localeCompare(stateNameB);
    });

    bloodTypeAverage.sort((a, b) => a[0].localeCompare(b[0]));
    bloodTypeReceivers.sort((a, b) => a[0].localeCompare(b[0]));

    return (
        <div>
            <Title>Total de doadores por estado</Title>
            <Table>
                <thead>
                    <tr>
                        <Th>Estado</Th>
                        <Th>Total</Th>
                    </tr>
                </thead>
                <tbody>
                    {stateArray.map(([state, total]) => (
                        <tr key={state}>
                            <Td>{StateNames[state] || state}</Td>
                            <Td>{total} doadores</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Title>Média de IMC por faixa etária</Title>
            <Table>
                <thead>
                    <tr>
                        <Th>Grupo</Th>
                        <Th>Média IMC</Th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(averageIMC).map(([ageGroup, imc]) => (
                        <tr key={ageGroup}>
                            <Td>{ageGroup}</Td>
                            <Td>{formatNumber(imc)} de média</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Title>Percentual de obesos por gênero</Title>
            <Table>
                <thead>
                    <tr>
                        <Th>Gênero</Th>
                        <Th>Total de doadores</Th>
                        <Th>Percentual de obesos</Th>
                    </tr>
                </thead>
                <tbody>
                    {obesePercentageList.map(({ gender, obesityStats }) => (
                        <tr key={gender}>
                            <Td>{gender}</Td>
                            <Td>{obesityStats.totalPeople} doadores</Td>
                            <Td>
                                {formatNumber(obesityStats.obesePercent)}% de
                                obesos
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Title>Média de idade para cada tipo sanguíneo</Title>
            <Table>
                <thead>
                    <tr>
                        <Th>Tipo sanguíneo</Th>
                        <Th>Média de idade</Th>
                    </tr>
                </thead>
                <tbody>
                    {bloodTypeAverage.map(([bloodType, age]) => (
                        <tr key={bloodType}>
                            <Td>Tipo {bloodType}</Td>
                            <Td>{formatNumber(age)} de média</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Title>
                Quantidade de possíveis doadores para cada tipo sanguíneo
                receptor
            </Title>
            <Table>
                <thead>
                    <tr>
                        <Th>Tipo sanguíneo</Th>
                        <Th>Receptores</Th>
                    </tr>
                </thead>
                <tbody>
                    {bloodTypeReceivers.map(([bloodType, total]) => (
                        <tr key={bloodType}>
                            <Td>Tipo {bloodType}</Td>
                            <Td>{total} receptores</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

DataDisplay.propTypes = {
    data: PropTypes.shape({
        totalByState: PropTypes.shape({
            byState: PropTypes.object.isRequired,
        }).isRequired,
        averageIMC: PropTypes.shape({
            average: PropTypes.object.isRequired,
        }).isRequired,
        obesePercentageList: PropTypes.arrayOf(
            PropTypes.shape({
                gender: PropTypes.string.isRequired,
                obesityStats: PropTypes.shape({
                    totalPeople: PropTypes.number.isRequired,
                    obesePercent: PropTypes.number.isRequired,
                }).isRequired,
            }).isRequired
        ).isRequired,
        averageByAge: PropTypes.shape({
            averageByAge: PropTypes.object.isRequired,
        }).isRequired,
        receivers: PropTypes.shape({
            receivers: PropTypes.object.isRequired,
        }).isRequired,
    }).isRequired,
};

export default DataDisplay;
