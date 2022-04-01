import Mock from 'mockjs';

import banner from './banner.json';
import floor from './floor.json';
import user from './user.json';

Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });
Mock.mock("/mock/user", { code: 200, data: user });