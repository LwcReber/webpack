import Greeter from './Greeter';
import React from 'react';
import {render} from 'react-dom';

import './main.css'; // 使用require导入css文件

render(<Greeter/>, document.getElementById('root'));
