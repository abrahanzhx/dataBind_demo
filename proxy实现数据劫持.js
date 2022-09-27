/* 数据劫持: 
指的是在访问或修改对象的属性时,除了可以执行基本的数据获取和修改操作以外,还可以进行一系列额外的操作. */

// 采用 proxy 实现数据劫持
// 目标数据对象
let person = {
  name: '周鹤翔',
  age: '22'
}
// proxy 拦截目标对象的操作
let handle = {
  // 获取数据方法
  get (target, key) {
    // 额外操作
    console.log(key + '获取数据')
    return target[key]
  },
  // 修改数据方法
  set (target, key, newValue) {
    // 额外操作
    console.log(key + '属性被改变了')
    target[key] = newValue
  }
}
// 定义一个 proxy 对象
let proxyObj = new Proxy(person, handle)

console.log(proxyObj.name)
proxyObj.name = '周杰伦'
console.log(proxyObj.name) 
