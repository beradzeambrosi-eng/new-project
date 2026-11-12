import React from 'react';
import styles from "./Footer.module.css";

const year = new Date().getFullYear();

const Footer = props => {
  return (
    <footer className= {styles.FooterCont}>"© All Rights Reserved | 0000"</footer>
  )
}

Footer.propTypes = {}

export default Footer