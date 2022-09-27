//即将要被劫持的数组
let arr = [1, 2, 3];

//先把要劫持的方法列出来
let methods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'reverse',
  'sort',
  'splice'
]

//既然要劫持原型，就要先把原型拿过来
let arrayProto = Array.prototype;
//创建一个我们自己的原型方法
let arrayMethods = Object.create(Array.prototype);

//遍历方法
methods.forEach(method => {
  //给每个方法做切片
  arrayMethods[method] = function (...args) {
    //还是先调用真正的原型方法获得正常的返回值
    const result = arrayProto[method].apply(this, args)
    //模拟插入切片
    console.log(`调用了${method}方法`)

    return result
  }
})
arr.__proto__ = arrayMethods

console.log(arr.push(4))
console.log(arr.splice(0, 1))