import React, { useEffect, useState } from 'react'
import { getActions } from '../../apis/actionApi';

const ActionLogs = ({ data }) => {
    const [actionData, setActionData] = useState([]);
    const sessionId = data.id;
    const token = localStorage.getItem('token');

    const fetchActions = async () => {
        try {
            const response = await getActions(token, sessionId);
            setActionData(response);
        } catch (error) {
            console.error('Error fetching actions:', error);
        }
    }

    useEffect(() => {
        fetchActions();
    }, [sessionId, token]);

    return (
        <div>
            <ul>
                <table className='table'>
                    <th>
                        <td>Action ID</td>
                        <td>Action Type</td>
                        <td>Timestamp</td>
                    </th>
                    {actionData.map((action, index) => (
                        <tbody>
                            <tr>
                                <td>{action.id}</td>
                                <td>{action.action_type}</td>
                                <td>{new Date(action.timestamp).toLocaleString()}</td>
                            </tr>
                        </tbody>

                    ))}
                </table>
            </ul>
        </div>
    )
}

export default ActionLogs
