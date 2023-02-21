import React from 'react';
import style from "./TodaysDeal.module.css"

function TodaysDeals() {
  return (
    <div>
      <section className={style.today_deals_container}>
        <div className={style.today_deals_heading}>
            <h1>Today's Deals</h1>
            <p><a href="#">See all deals</a></p>
        </div>

        <div className={style.today_deals_product_container}>
            <div className={style.today_deals_btn_container}>
                <button className={style.today_deal_btn}>
                    xyz
                </button>
                <button className={style.today_deal_btn} >
                   xyz
                </button>
            </div>

            <div className={style.today_deals_product_list}>
                <div className={style.today_deals_product_item}>
                    <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"></img>
                    <div className={style.discount_Contaienr}>
                        <a href="#">Up to 52% off</a>
                        <a href="#">Deal of the day</a>
                    </div>
                    <p>adidas and Campus Footwear</p>
                </div>

                <div className={style.today_deals_product_item}>
                    <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"></img>
                    <div className={style.discount_Contaienr}>
                        <a href="#">Up to 52% off</a>
                        <a href="#">Deal of the day</a>
                    </div>
                    <p>adidas and Campus Footwear</p>
                </div>

                <div className={style.today_deals_product_item}>
                    <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"></img>
                    <div className={style.discount_Contaienr}>
                        <a href="#">Up to 52% off</a>
                        <a href="#">Deal of the day</a>
                    </div>
                    <p>adidas and Campus Footwear</p>
                </div>

               
                <div className={style.today_deals_product_item}>
                    <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"></img>
                    <div className={style.discount_Contaienr}>
                        <a href="#">Up to 52% off</a>
                        <a href="#">Deal of the day</a>
                    </div>
                    <p>adidas and Campus Footwear</p>
                </div>

               
                <div className={style.today_deals_product_item}>
                    <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"></img>
                    <div className={style.discount_Contaienr}>
                        <a href="#">Up to 52% off</a>
                        <a href="#">Deal of the day</a>
                    </div>
                    <p>adidas and Campus Footwear</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default TodaysDeals
