import React from "react";
import "../css/FrontGender.css";
import {ProductListBottom, ProductListTop} from "./Product"

function FrontGender(){
    return(
        <>
        <div id={"wrap"}>
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
