/*
 * @Author: HuangRichao 
 * @Date: 2019-10-06 17:31:36 
 * @Last Modified by: HuangRichao
 * @Last Modified time: 2019-10-06 17:32:02
 */

import  React  from 'react';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

export {BoilingVerdict}