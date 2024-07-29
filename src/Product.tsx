import React from 'react';

export const ProductListTop = () => {
  const numberOfDivs = 2; // 생성할 div의 개수를 설정합니다.
  const divs = Array.from({ length: numberOfDivs }, (_, index) => index + 1);
return (
    <div id="container1">
      {divs.map((num) => (
          <div id={"container_top"}>
            <div id={`product${num}`} className="product">
              product {num}
            </div>
            <div id={`id${num}`} className="explain">
              id {num}
            </div>
          </div>
            ))}
    </div>
);
};

export const ProductListBottom = () => {
  const numberOfDivs = 4; // 생성할 div의 총 개수를 설정합니다.
  const divs = Array.from({ length: numberOfDivs }, (_, index) => index + 1);

  return (
      <div id="container2">
        {divs.map((num) => (
            <div key={num} id="container_bottom">
              <div id={`product${num}`} className="product">
                product {num}
              </div>
              <div id={`id${num}`} className="explain">
                id {num}
              </div>
            </div>
        ))}
      </div>
  );
};