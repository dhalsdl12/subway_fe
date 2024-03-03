import React from 'react';
import { Link } from 'react-router-dom';
import './MainScreen.css';

function ToWork() {
  return (
    <div className="main-screen-container"> {/* 스타일을 적용하기 위해 클래스를 추가합니다. */}
      <h1>Ming's Subway To Home</h1>
      <div className="button-container"> {/* 버튼을 감싸는 컨테이너를 추가합니다. */}
        <Link to="/to-home-munjung">
          <button className="custom-button">문정역</button> {/* 커스텀 버튼 클래스를 추가합니다. */}
        </Link>
        <Link to="/to-home-jamsil-konkuk">
          <button className="custom-button">잠실역 - 건대입구역</button> {/* 커스텀 버튼 클래스를 추가합니다. */}
        </Link>
        <Link to="/to-home-jamsil-sadang">
          <button className="custom-button">잠실역 - 사당역</button> {/* 커스텀 버튼 클래스를 추가합니다. */}
        </Link>
        <Link to="/">
          <button className="custom-button">뒤로가기</button> {/* 커스텀 버튼 클래스를 추가합니다. */}
        </Link>
      </div>
    </div>
  );
}

export default ToWork;
