import React, { useRef } from 'react';
import detail from '../../css/Detail.module.css';
import img from '../../images/main1.png';
import img1 from '../../images/main2.png';
import img2 from '../../images/shirt.svg';
import img3 from '../../images/pants.svg';
import img4 from '../../images/shoes.svg';

import CardSlider from './CardSlider';

const Detail = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 왼쪽으로 스크롤
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
  };

  // 오른쪽으로 스크롤
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <>
      {/* <div id="carouselExampleIndicators" className={detail.carousel_slide} data_bs_ride="carousel">
  <div className={detail.carousel_indicators}>
    <button type="button" data_bs_target="#carouselExampleIndicators" data_bs_slide_to="0" className={detail.active" aria_current="true" aria_label="Slide 1"></button>
    <button type="button" data_bs_target="#carouselExampleIndicators" data_bs_slide_to="1" aria_label="Slide 2"></button>
    <button type="button" data_bs_target="#carouselExampleIndicators" data_bs_slide_to="2" aria_label="Slide 3"></button>
  </div>
  <div className={detail.carousel_inner}>
    <div className={detail.carousel_item_active}>
      <img src={img1} className={detail.d_block} />
    </div>
    <div className={detail.carousel_item}>
      <img src={img} className={detail.d_block} alt="..."/>
    </div>
    <div className={detail.carousel_item}>
      <img src="..." className={detail.d_block} alt="..."/>
    </div>
  </div>
  <button className={detail.carousel_control_prev} type="button" data_bs_target="#carouselExampleIndicators" data_bs_slide="prev">
    <span className={detail.carousel_control_prev_icon} aria_hidden="true"></span>
    <span className={detail.visually_hidden}>Previous</span>
  </button>
  <button className={detail.carousel_control_next} type="button" data_bs_target="#carouselExampleIndicators" data_bs_slide="next">
    <span className={detail.carousel_control_next_icon} aria_hidden="true"></span>
    <span className={detail.visually_hidden}>Next</span>
  </button> 
</div>*/}

      <div className={detail.section1}>
        <div className={detail.profile}>이부분인데 왜 안뜨냐고</div>
      </div>
      <div className={detail.section2}>
        <CardSlider></CardSlider>
        {/* <div className={detail.section_img}>
          <img src={img} alt="main1" />
          <img src={img1} alt="main1" />
        </div> */}
        <div className={detail.info}>
          <div className={detail.info_in}>
            <img className={detail.img_1} src={img2} alt="profile" />
            <div className={detail.desc}>__옷 설명__</div>
          </div>

          <div className={detail.info_in}>
            <img className={detail.img_1} src={img3} alt="profile" />
            <div className={detail.desc}>__옷 설명__</div>
          </div>

          <div className={detail.info_in}>
            <img
              className={detail.img_1}
              id={detail.img4}
              src={img4}
              alt="profile"
            />
            <div className={detail.desc}>__옷 설명__</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
