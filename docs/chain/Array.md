## 数组相关
 1. Array.from()用于将类数组转为真正的数组（***所谓类似数组的对象，本质特征只有一点，即必须有length属性***）
    常见的类似数组的对象是 DOM 操作返回的 NodeList 集合，以及函数内部的arguments对象
    - 判断是否转成真正的数组方法： Object.prototype.toString.call(obj)
    ```
    let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
    };

    // ES6的写法
    let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
    ```
2. Array.of()用于将一组值转换为数组，主要是为了弥补数组构造函数Array()和new Array()的不足，
    ```
    Array.of() // []
    Array.of(undefined) // [undefined]
    Array.of(1) // [1]
    Array.of(1, 2) // [1, 2]
    ```

3. Array.copyWithin()在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
```
Array.prototype.copyWithin(target, start = 0, end = this.length)
```
   - 它接受三个参数。

        - target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
        - start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
        - end（可选）：****到该位置前停止读取数据****，默认等于数组长度。如果为负值，表示从末尾开始计算。
```
[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]
```
4. find()和findIndex():
 - 数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
 - 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
 ```
 [1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
  }) // 10
  [1, 5, 10, 15].findIndex(function(value, index, arr) {
    return value > 9;
  }) // 2
 ```
 5. fill方法使用给定值，填充一个数组。有3个参数，后两个可选（1: 要填充的值 23:用于指定填充的起始位置和结束位置）
```
['a', 'b', 'c'].fill(7)
// [7, 7, 7]

new Array(3).fill(7)
// [7, 7, 7]
['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']

```
6. 数组实例的 entries()，keys() 和 values()
ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
    ```
    for (let index of ['a', 'b'].keys()) {
    console.log(index);
    }
    // 0
    // 1

    for (let elem of ['a', 'b'].values()) {
    console.log(elem);
    }
    // 'a'
    // 'b'

    for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
    }
    // 0 "a"
    // 1 "b"
    ```
7. Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值
    ```
    [1, 2, 3].includes(2)     // true
    [1, 2, 3].includes(4)     // false
    [1, 2, NaN].includes(NaN) // true
    ```

8. Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。

```
[1, 2, [3, 4]].flat()
// [1, 2, 3, 4]

```