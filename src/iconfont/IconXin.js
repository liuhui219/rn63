/* eslint-disable */

import React from 'react';
import { SvgCss } from 'react-native-svg';

const xml = `
<svg t="1607506728330" class="icon" viewBox="0 0 1268 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="861" xmlns:xlink="http://www.w3.org/1999/xlink" width="247.65625" height="200"><defs><style type="text/css"></style></defs><path d="M1268.310479 414.850711c-10.11831-109.508292-104.769337-321.736643-224.652099-391.924414-43.803317-25.615975-88.118953-29.842611-128.079874-12.039508-18.699662 8.453272-85.301196 55.714745-183.666539 126.927155C691.951046 166.503836 654.295563 193.784849 634.315103 207.489396c-20.10854-13.704546-57.635943-40.98556-97.596864-69.675452C438.224816 66.601534 371.751362 19.340061 353.43594 10.886789c-39.960921-17.803102-84.148477-13.704546-128.079874 12.039508C105.473304 93.114068 10.694198 305.342419 0.319728 414.850711-3.906908 465.058022 31.443137 640.399369 247.001565 784.873467 315.396217 830.597982 403.387091 879.268334 474.215261 918.332695c22.542058 12.807987 43.675237 24.079016 61.990659 34.581566a25.615975 25.615975 0 1 0 25.615975-44.571796c-18.571582-10.50255-39.704761-22.285898-62.502979-34.837726-69.931611-38.423962-156.897845-86.710075-223.49938-131.15379C79.21693 610.940998 48.73392 451.865795 51.551677 419.461587c8.965591-97.853024 98.749583-293.302911 199.548444-352.347733 29.842611-17.546943 56.355144-20.62086 81.33072-9.477911 15.497665 6.916313 110.917171 75.951365 174.188628 121.67588 49.054592 35.478125 91.57711 66.217295 108.483653 76.847925l6.403994 4.098556h25.615975L653.527084 256.159748c16.906543-10.886789 59.300982-41.625959 108.483653-76.847925 63.143378-45.724515 158.690964-115.271886 174.188629-121.67588 24.847496-11.142949 51.23195-8.069032 81.33072 9.477911C1118.200866 126.158676 1207.856778 321.608563 1217.078529 419.461587c2.945837 32.404208-27.537173 192.119811-223.883619 322.889362-91.83327 61.478339-200.188843 124.621717-274.85941 166.503836a25.615975 25.615975 0 0 0 12.807988 47.901872 24.591336 24.591336 0 0 0 12.807987-3.330076c75.567126-42.522518 185.075418-106.434375 278.317566-168.809274C1237.187069 640.399369 1272.537114 465.058022 1268.310479 414.850711z" p-id="862"></path><path d="M931.46041 735.306556c165.479197-110.661011 193.400609-246.297597 190.326693-280.494924-10.63063-115.271886-140.887861-361.953723-256.159748-310.081375-23.822857 10.50255-197.883405 140.887861-231.824571 162.40528h-8.325192c-33.941167-21.773579-208.001715-151.90273-231.824572-162.40528-116.168446-51.872349-245.913358 194.553328-256.159747 310.081375-3.073917 34.197326 24.847496 169.833913 190.454772 280.494924C399.160455 783.592668 498.166197 835.593097 560.028776 870.943142h147.419935c62.246819-34.837726 149.597293-85.813515 224.011699-135.636586zM639.310218 923.32781A50.33539 50.33539 0 1 0 689.645609 973.407041a50.079231 50.079231 0 0 0-50.335391-50.079231z" fill="#C1272D" p-id="863"></path></svg>
`

let IconXin = ({ size, color, ...rest }) => {
  return (
    <SvgCss xml={xml}  width={size} height={size} {...rest} />
  );
};

IconXin.defaultProps = {
  size: 18,
};

IconXin = React.memo ? React.memo(IconXin) : IconXin;

export default IconXin;