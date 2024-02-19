import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ToWork.css';

// 역 이름을 대표 이름으로 매핑하는 Map 객체 생성
const stationNameMapping = new Map([
  ['Konkuk Station', '건국대입구역'],
  ['Jamsil Station', '잠실역'],
  ['Sadang Station', '사당역'],
]);

function ToWork() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // 데이터를 다시 가져오는 함수
  async function fetchData() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/ming/subway/work');
      setData(response.data.slice(1)); // 첫 번째 요소인 문자열은 제외하고 나머지 요소만 사용
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // 역 이름을 대표 이름으로 변환하는 함수
  const mapStationName = name => stationNameMapping.get(name) || name;

  // 새로고침 버튼 클릭 시 데이터를 다시 가져오는 함수
  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div className="to-work-container">
      <h1>Ming's Subway To Work</h1>
      <button className="refresh-button" onClick={handleRefresh}>새로고침</button> {/* 새로고침 버튼 */}
      <div>
        {data.length > 0 ? (
          data.map((stationData, index) => (
            <div key={index}>
              {Object.keys(stationData).map(stationName => (
                <div key={stationName} className="station-info">
                  <h2>{mapStationName(stationName)}</h2>
                  <div className="arrival-info">
                    {stationData[stationName].map((arrival, idx) => (
                      <div key={idx} className="arrival">
                        <p>도착시간 : {arrival.arvlMsg2}</p>
                        <p>도착역 : {arrival.arvlMsg3}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default ToWork;
