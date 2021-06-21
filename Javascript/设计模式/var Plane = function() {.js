function Person( name ){
  this.name = name;
}

Person.prototype.getName = function(){
  return this.name;
}

var objectFactory = function() {
  var obj = new Object(); // 从Object.prototype上克隆一个空对象
  var Constructor = [].shift.call( arguments ); // 取得外部传入的构造器，此例是Person
  obj.__proto__ = Constructor.prototype; // 指向正确的原型
  var ret = Constructor.apply( obj, arguments ); // 借用外部传入的构造器给obj设置属性
  return typeof ret === 'object' ? ret : obj; // 确保构造器总是会返回一个对象
}

var a = objectFactory(A, 'seven');
console.log( a.name ); // seven
console.log( a.getName() ); // seven
console.log( Object.getPrototypeOf(a) === Person.prototype ); // true

//分别调用下面两句代码产生了一样的结果：
var a = objectFactory(A, 'seven');
var b = new A('b');