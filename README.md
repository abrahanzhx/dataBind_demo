## Vue2.x是使用Object.defineProperty来做数据劫持的，但是它有以下三个缺点：

1.不能劫持数组的变化，需要做特殊处理（通过劫持数组的push、splice等方法实现的）
2.必须深度遍历对象的每个属性
3.无法监听属性的新增和删除操作（通过Vue.set 和 Vue.delete实现的）

## Vue3 Proxy代理的是整个对象，而不是对象的某个特定属性，不需要我们通过遍历来逐个进行数据绑定，因此解决了Object.defineProperty的不足：

1.对于一个对象，不需要要遍历来对所有属性监听
2.对于对象的新增属性，也能监听
3.对于数组通过push、unshift等操作方法和索引操作，也能监听
4.访问不存在的属性，仍然可以被get拦截到

![img](http://upload-images.jianshu.io/upload_images/23546262-8219078d35b0b62f.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp)