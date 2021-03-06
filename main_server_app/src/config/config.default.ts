import { EggAppConfig, EggAppInfo, PowerPartial } from 'midway';

export type DefaultConfig = PowerPartial<EggAppConfig>

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  // add your config here
  config.middleware = [
  ];

  config.security = {
    // 跨域
    csrf: {
      enable: false
    },
    // 白名单
    domainWhiteList: ['*']
  };

  config.auth = {
    secret: 'qiankun',
  };

  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'test'
    },
    app: true
  }

  return config;
};
