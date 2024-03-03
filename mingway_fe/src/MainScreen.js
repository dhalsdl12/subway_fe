import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainScreen.css';

function MainScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // 여기에 검색 기능을 추가할 수 있습니다.
    console.log('검색어:', searchQuery);
  };

  const handleKeyPress = (event) => {
    // 엔터 키를 누를 때 검색 실행
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="main-screen-container">
      <h1>Ming's Subway</h1>
      <div className="search-container">
        <input
          id="search-input"
          type="text"
          placeholder="지하철 역을 입력하세요"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress} // 엔터 키 이벤트 처리
        />
        <button className="search-button" onClick={handleSearch}>검색</button>
      </div>
      <div className="button-container">
        <Link to="/to-work">
          <button className="custom-button">To Work</button>
        </Link>
        <Link to="/to-home">
          <button className="custom-button">To Home</button>
        </Link>
      </div>
    </div>
  );
}

export default MainScreen;
