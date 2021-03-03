/* eslint-disable */

import React from 'react';

import Icon001Cangku from './Icon001Cangku';
import Icon002Jiaohuoshijian from './Icon002Jiaohuoshijian';
import Icon004Quqian from './Icon004Quqian';
import Icon003Cuxiao from './Icon003Cuxiao';
import Icon007Huocang from './Icon007Huocang';
import Icon009Songhuo from './Icon009Songhuo';
import Icon008Tuihuo from './Icon008Tuihuo';
import Icon006Kuaidiyuan from './Icon006Kuaidiyuan';
import Icon010Dingdan from './Icon010Dingdan';
import Icon012Fukuan from './Icon012Fukuan';
import Icon013Baoxian from './Icon013Baoxian';
import Icon005Huodaofukuan from './Icon005Huodaofukuan';
import Icon020Fahuo from './Icon020Fahuo';
import Icon011Guojiwuliu from './Icon011Guojiwuliu';
import Icon017Tuihuo from './Icon017Tuihuo';
import Icon025Qingfang from './Icon025Qingfang';
import Icon015Yunshu from './Icon015Yunshu';
import Icon022Zhixiao from './Icon022Zhixiao';
import Icon024Xiehuo from './Icon024Xiehuo';
import Icon023Fuhe from './Icon023Fuhe';
import Icon021Gongchang from './Icon021Gongchang';
import Icon018Baoyou from './Icon018Baoyou';
import Icon016Kuaidixiaoge from './Icon016Kuaidixiaoge';
import Icon014Wuliu from './Icon014Wuliu';
import IconTubiao25 from './IconTubiao25';
import IconTubiao24 from './IconTubiao24';
import IconTubiao23 from './IconTubiao23';
import IconTubiao14 from './IconTubiao14';
import IconTubiao16 from './IconTubiao16';
import IconTubiao11 from './IconTubiao11';
import IconTubiao13 from './IconTubiao13';
import IconXin from './IconXin';

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case '001-cangku':
      return <Icon001Cangku key="1" {...rest} />;
    case '002-jiaohuoshijian':
      return <Icon002Jiaohuoshijian key="2" {...rest} />;
    case '004-quqian':
      return <Icon004Quqian key="3" {...rest} />;
    case '003-cuxiao':
      return <Icon003Cuxiao key="4" {...rest} />;
    case '007-huocang':
      return <Icon007Huocang key="5" {...rest} />;
    case '009-songhuo':
      return <Icon009Songhuo key="6" {...rest} />;
    case '008-tuihuo':
      return <Icon008Tuihuo key="7" {...rest} />;
    case '006-kuaidiyuan':
      return <Icon006Kuaidiyuan key="8" {...rest} />;
    case '010-dingdan':
      return <Icon010Dingdan key="9" {...rest} />;
    case '012-fukuan':
      return <Icon012Fukuan key="10" {...rest} />;
    case '013-baoxian':
      return <Icon013Baoxian key="11" {...rest} />;
    case '005-huodaofukuan':
      return <Icon005Huodaofukuan key="12" {...rest} />;
    case '020-fahuo':
      return <Icon020Fahuo key="13" {...rest} />;
    case '011-guojiwuliu':
      return <Icon011Guojiwuliu key="14" {...rest} />;
    case '017-tuihuo':
      return <Icon017Tuihuo key="15" {...rest} />;
    case '025-qingfang':
      return <Icon025Qingfang key="16" {...rest} />;
    case '015-yunshu':
      return <Icon015Yunshu key="17" {...rest} />;
    case '022-zhixiao':
      return <Icon022Zhixiao key="18" {...rest} />;
    case '024-xiehuo':
      return <Icon024Xiehuo key="19" {...rest} />;
    case '023-fuhe':
      return <Icon023Fuhe key="20" {...rest} />;
    case '021-gongchang':
      return <Icon021Gongchang key="21" {...rest} />;
    case '018-baoyou':
      return <Icon018Baoyou key="22" {...rest} />;
    case '016-kuaidixiaoge':
      return <Icon016Kuaidixiaoge key="23" {...rest} />;
    case '014-wuliu':
      return <Icon014Wuliu key="24" {...rest} />;
    case 'tubiao-25':
      return <IconTubiao25 key="25" {...rest} />;
    case 'tubiao-24':
      return <IconTubiao24 key="26" {...rest} />;
    case 'tubiao-23':
      return <IconTubiao23 key="27" {...rest} />;
    case 'tubiao-14':
      return <IconTubiao14 key="28" {...rest} />;
    case 'tubiao-16':
      return <IconTubiao16 key="29" {...rest} />;
    case 'tubiao-11':
      return <IconTubiao11 key="30" {...rest} />;
    case 'tubiao-13':
      return <IconTubiao13 key="31" {...rest} />;
    case 'xin':
      return <IconXin key="L1" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
