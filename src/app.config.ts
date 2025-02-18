export default defineAppConfig({
  pages: ['pages/index/index', 'pages/telLogin/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
  // subPackages: [
  //   {
  //     root: 'userInfoPackage',
  //     pages: ['pages/telLogin/index']
  //   }
  // ],
  // preloadRule: {
  //   'pages/index/index': {
  //     network: 'all',
  //     packages: ['userInfoPackage']
  //   }
  // }
});
