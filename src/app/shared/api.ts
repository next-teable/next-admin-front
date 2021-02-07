export const APIs = {
  getCaptcha: `common-api/auth/code?_allow_anonymous=true`,
  login: 'common-api/auth/login?_allow_anonymous=true',
  changePwd: 'common-api/sysusers/changeMyPassword',
  userInfo: 'common-api/auth/info',
  getMenus: 'common-api/menus/mine',
  sysusers: 'common-api/sysusers',
  roles: 'common-api/roles',
  user: 'common-api/user',
  organizations: 'common-api/organizations',
  dicts: 'common-api/dicts',
  dictItems: 'common-api/dictItems',
  auditLogs: 'common-api/auditLogs',
  dlq: 'common-api/dlq',
  paper: {
    messagePending: 'oa-api/papers/processing',
  }
};

export const AppInfo = {
  name: 'Teable',
  description: 'Teable',
};
