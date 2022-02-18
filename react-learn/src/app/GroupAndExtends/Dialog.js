/*
 * @Author: HuangRichao 
 * @Date: 2019-10-06 21:31:12 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-06 21:51:06
 */

import  React from 'react';
import { FancyBorder } from './FancyBorder';

function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
  }

  export {Dialog}