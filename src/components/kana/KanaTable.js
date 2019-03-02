import React from 'react';


function KanaTable({ transcription, mapping }) {
    return (
        <table className="kanaTable">
            <tbody>
                {transcription.map((values, index) => {
                    return (
                        <tr key={index}>
                            {values.map((value, index) => {
                                if (value === null) {
                                    return <td key={index} />;
                                }
                                return (
                                    <td key={index}>
                                        {value.replace('_', '')} {mapping.getByTranscription(value)}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default KanaTable;
