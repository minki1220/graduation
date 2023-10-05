'use client'

import { useState, useEffect } from "react";

export default function Check() {
  const 상품들 = ['#감성', '#라떼맛집', 'Coconut'];
  const [isChecked, setIsChecked] = useState({});

  const handleCheckboxChange = (productName) => {
    setIsChecked((prevChecked) => ({
      ...prevChecked,
      [productName]: !prevChecked[productName],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 선택된 항목을 처리하고 상태를 업데이트합니다.
    const 선택된상품들 = Object.keys(isChecked).filter((product) => isChecked[product]);
    console.log("선택된 상품들:", 선택된상품들);

    // 여기에서 선택된 항목을 처리하는 로직을 추가하세요.
    // 예를 들어, 서버로 선택된 항목을 보내고 처리할 수 있습니다.
    try {
        const response = await fetch('/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ selectedItems: 선택된상품들 }),
        });
    
        if (response.ok) {
          // 서버로부터 응답을 받았을 때의 처리
          const responseData = await response.json('응답완료.');
          console.log(responseData.message);
    
          // 선택 상태 초기화
          setIsChecked({});
        } else {
          // 서버로부터 오류 응답을 받았을 때의 처리
          console.error('서버 응답 오류');
        }
      } catch (error) {
        // 네트워크 오류 등의 예외 처리
        console.error('서버 요청 중 오류:', error);
      }

    // 선택이 처리되었으므로 선택 상태를 초기화합니다.
    setIsChecked({});
  };

  useEffect(() => {
    // 버튼의 너비를 텍스트 길이에 따라 동적으로 설정
    const buttons = document.querySelectorAll('.inner-container');
    buttons.forEach((button) => {
      const textSpan = button.querySelector('.name-span');
    });
  }, [isChecked]);

  return (
    <div>
      <form method="POST" action="/api/data">
        <input type="hidden" />
        {상품들.map((productName) => (
          <div
            key={productName}
            className={`inner-container ${isChecked[productName] ? 'checked' : ''}`}
            onClick={() => handleCheckboxChange(productName)}
          >
            <label htmlFor={`checkbox-${productName}`}>
              <input
                type="checkbox"
                id={`checkbox-${productName}`}
                style={{ display: 'none' }}
                checked={isChecked[productName] || false}
                onChange={() => handleCheckboxChange(productName)}
              />
              <span className="name-span">{productName}</span>
            </label>
          </div>
        ))}
      </form>
      {/* 제출 버튼을 추가 */}
      <form onSubmit={handleSubmit} method="POST">
        <input type="submit" value="제출" className="signup-btn" style={{ display: 'block' }} />
      </form>
    </div>
  );
}
