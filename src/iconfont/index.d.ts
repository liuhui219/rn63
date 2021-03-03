/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  name: '001-cangku' | '002-jiaohuoshijian' | '004-quqian' | '003-cuxiao' | '007-huocang' | '009-songhuo' | '008-tuihuo' | '006-kuaidiyuan' | '010-dingdan' | '012-fukuan' | '013-baoxian' | '005-huodaofukuan' | '020-fahuo' | '011-guojiwuliu' | '017-tuihuo' | '025-qingfang' | '015-yunshu' | '022-zhixiao' | '024-xiehuo' | '023-fuhe' | '021-gongchang' | '018-baoyou' | '016-kuaidixiaoge' | '014-wuliu' | 'tubiao-25' | 'tubiao-24' | 'tubiao-23' | 'tubiao-14' | 'tubiao-16' | 'tubiao-11' | 'tubiao-13' | 'xin';
  size?: number;
  color?: string | string[];
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
