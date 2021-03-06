/***
 *
 *
 * 工厂模式
 *
 * 与创建型模式类似，工厂模式创建对象（视为工厂里的产品）时无需指定创建对象的具体类
 * 工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类
 * 该模式使一个类的实例化延迟到了子类
 * 而子类可以重写接口方法以便于创建的时候指定自己的对象类型
 *
 * 什么时候使用工厂模式？
 * 1. 对象的创建十分复杂
 * 2. 需要依赖具体环境创建不同实例
 * 3. 处理大量具有相同属性的小属性
 */
let Car = (function() {
  let Car = function(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  };

  return function(model, year, miles) {
    return new Car(model, year, miles);
  };
})();

let tom = new Car("tom", "2019", 20000);
let dudu = new Car("dudu", "2010", 20000);
