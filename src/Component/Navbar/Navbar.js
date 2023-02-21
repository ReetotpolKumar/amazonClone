import React from 'react'
import styles from "./Navbar.module.css"
import image from "./amazon-png-logo-vector-6695.png"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Navbar() {
  return (
    <>
    <div className={styles.header}>
        <img src= {image}className={styles.header_logo}></img>

        <div className={styles.headerOption}>
                <span className={styles.headerOption1}>Hello</span>
                <span className={styles.headerOption2}>Select Your Address</span>

        </div>
        <div className={styles.headerSearch}>

            <input type="text"></input>
           

        </div>
        <div className={styles.headerNav}>
        <div className={styles.headerOption}>
                <span className={styles.headerOption2}>En</span>
        </div>        

            <div className={styles.headerOption}>
                <span className={styles.headerOption1}>Hello Reetotpol</span>
                <span className={styles.headerOption2}>Sign In</span>


            </div>
            <div className={styles.headerOption}>
                <span className={styles.headerOption1}>Return</span>
                <span className={styles.headerOption2}>& Orders</span>


            </div>
           
            <div className={styles.cardtIcon}>
                {/*<ShoppingCartIcon/>*/}

            </div>


        </div>
       
    </div>
    <div className={styles.bottomHeader}>
        <ul>
            <li>All</li>
            <li>Amazon miniTV</li>
            <li>Best Sellers</li>
            <li>Mobile</li>
            <li>Customer Service</li>
            <li>Today Deals</li>
            <li>Electronics</li>
            <li>Prime</li>
            <li>Amazon Pay</li>
            <li>Fassion</li>
            <li>New Release</li>
            <li className={styles.liImage}><img src="https://m.media-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"></img></li>
        </ul>



    </div>
     </>
  )
}

export default Navbar
