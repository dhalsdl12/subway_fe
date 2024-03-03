import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ToHome.css';

function ToWorkSadang() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 초기 데이터를 가져오기 위해 한 번 호출
    fetchData('http://127.0.0.1:8000/ming/subway/home/jamsil-sadang');
  }, []);

  // 데이터를 가져오는 함수
  async function fetchData(url) {
    try {
      const response = await axios.get(url);
      setData(response.data.slice(1)); // 첫 번째 요소인 문자열은 제외하고 나머지 요소만 사용
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // 새로고침 버튼 클릭 시 데이터를 다시 가져오는 함수
  const handleRefresh = () => {
    fetchData('http://127.0.0.1:8000/ming/subway/home/jamsil-sadang');
  };

  return (
    <div className="to-work-container">
      <h1>Ming's Subway To Home</h1>
      {/* 새로고침 버튼 */}
      <button className="custom-button" onClick={handleRefresh}>새로고침</button>
      {/* 데이터를 보여주는 박스 */}
      <div className="data-box">
        {data.length > 0 ? (
          data.map((stationData, index) => (
            <div key={index} className="station-info">
              <h2>잠실역 - 사당방면</h2>
              <div className="arrival-info">
                {stationData['Jamsil To Sadang Station'].map((arrival, idx) => (
                  <div key={idx} className="arrival">
                    <p>도착시간: {arrival.arvlMsg2}</p>
                    <p>도착역: {arrival.arvlMsg3}</p>
                  </div>
                ))}
              </div>
              <p></p>
            </div>
          ))
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </div>
      {/* 뒤로가기 버튼 */}
      <Link to="/to-home">
        <button className="custom-button">뒤로가기</button> {/* 커스텀 버튼 클래스를 추가합니다. */}
      </Link>
    </div>
  );
}

export default ToWorkSadang;
