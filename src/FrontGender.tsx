import React from "react";
import "./css/FrontGender.css";
/*import "./css/Product.css";*/
import {ProductListBottom, ProductListTop} from "./Product";

function FrontGender(){
    return(
        <>
        <header>
          <p id={"header"}>상단 헤드</p>
        </header>
        <div id={"wrap"}>
          <div>여긴 무엇을 넣을까요?</div>
          <div>
            <ProductListTop></ProductListTop>
            <ProductListBottom></ProductListBottom>
            <ProductListBottom></ProductListBottom>
            <ProductListBottom></ProductListBottom>
            <ProductListBottom></ProductListBottom>
            <ProductListBottom></ProductListBottom>
            <ProductListBottom></ProductListBottom>
            <ProductListBottom></ProductListBottom>
          </div>
        </div>
        </>
    );
}

export default FrontGender;
