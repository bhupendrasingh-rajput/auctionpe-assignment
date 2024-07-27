import React, { useEffect, useState } from 'react';
import { getSessions } from '../../apis/sessionApi';
import ActionLogs from './ActionLogs';
import './Dashboard.css';

const Dashboard = () => {
  const [sessionData, setSessionData] = useState([]);
  const token = localStorage.getItem('token');

  const getData = async () => {
    try {
      const data = await getSessions(token);
      setSessionData(data);
    } catch (error) {
      console.error('Error fetching session data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='dashboard'>
      {sessionData.length > 0 ? (
        sessionData.map((data, index) => (
          <div key={index} className='sessionHead'>
            <div className='header'>
              <h2>Session ID : {data.id}</h2>
              <h2>Start Time : {new Date(data.start_time).toLocaleString()}</h2>
              <h2>End Time : {new Date(data.end_time).toLocaleString()}</h2>
            </div>
            <ActionLogs data={data} />
          </div>
        ))
      ) : (
        <p>No sessions found.</p>
      )}
    </div>
  );
};

export default Dashboard;
