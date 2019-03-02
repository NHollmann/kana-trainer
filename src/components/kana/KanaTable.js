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
                                        {mapping.getByTranscription(value)}
                                        <br/><span>{value.replace('_', '')}</span>
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
