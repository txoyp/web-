const BASE_URL = {
  dev:'//www.dev.com/',//开发环境测试地址
  pro:'//www.pro.com/'//生产环境网址
}

//自定义全局变量例子:
//第一步 创建全局变量

// const testString = 'a' 测试变量
// const testObject = {   测试对象  
//   name:"objName",
//   age:"objAge"
// }

const globalUrl = BASE_URL.dev;//默认情况下使用开发环境地址

export default {
  globalUrl
  // 第二步抛出变量
  // testString
  // testObject
}

// 第三步引用全局变量
// 在任何可this指向Vue的组件内部使用：
// this.defaultSetting.xxx 例：this.defaultSetting.testString