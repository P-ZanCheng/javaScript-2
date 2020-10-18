`*/**

*基础数据类型储存在栈（先进后出）中*

*引用数据类型储存在堆中*



*JS中的数据结构：*

*对象：储存属性和属性的值*

*数组：存储有序的东西*

*set:储存唯一值的集合*

*WeakSet:*

*Map:储存键值对*

*WeakMap:*

**/*

let person = new **Object**();

person.name = 'pangzancheng';

person.age = 20;

console.**log**(person.name);



let person1 = {};

person.name = "pangzancheng";

person.age = 20;



let person2 = {

  name:'pangzancheng',

  age:20

};

console.**log**(person2.name);

console.**log**(typeof person2);*//返回值为Object*



*//数组*

const oArray = new **Array**();



const oArray = [];*//数组*

*//let a = '';模板字符串*

console.**log** = (typeof oArray);

 



*//数组初始化*

const heroes = [];

console.**log**(heroes[0]);

heroes[0] = '蝙蝠侠';

heroes[1] = '神奇女侠';

heroes[2] = '闪电侠';

heroes[3] = '海王';

console.**log**(heroes);



*//数组字面集*

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];

console.**log**(avengers);

delete avengers[3];

console.**log**(avengers);



*//不使用解构语法*

const array1 = [1,2,3];

let a = array1[0];

let b = array1[1];

let c = array1[2];

*//使用解构语法*

const [a,b,c] = [1,2,3];

console.**log**('a=${a}, b=${b}, c=${c}');



const [a,b] = [1,2,3];

console.**log**(a); 



*//length用法*

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];

console.**log**(avengers.length);

avengers.length = 6;*//慎用，不可逆*

console.**log**(avengers);



*//数组的属性和方法*

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];

avengers.**pop**();*//删除数组最后一个元素,返回值是删除的元素*

console.**log**(avengers);



const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];

avengers.**push**('黑寡妇');*//在数组最后添加一个元素,返回值是添加的元素*

console.**log**(avengers);



const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];

console.**log**(avengers.**shift**());*//删除数组的第一个元素，返回值是删除的元素*



const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];

avengers.**unshift**('快银');*//在数组前面添加一个元素,返回值是添加的元素*

console.**log**(avengers);



*//数组合并*

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];

const heroes = ['蝙蝠侠','神奇女侠','闪电侠','海王'];

const oArray = avengers.**concat**(heroes);

console.**log**(avengers);

console.**log**(oArray);



const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];

const heroes = ['蝙蝠侠','神奇女侠','闪电侠','海王'];

const oArray = [...avengers,...heroes];

console.**log**(oArray);



*//将数组变成一个字符串*

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];

const a = avengers.**join**();

console.**log**(a);



*//切片，成一个新的数组，不改变原来的数组*

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];

const b = avengers.**slice**(2,3);

console.**log**(b);



const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];

const c = avengers.**splice**(2,2,'pangzancheng',2,3);*//改变原来的数组*

console.**log**(c);

console.**log**(avengers);



*//逆转*

const d = ['a','b','c','d'];

const e = d.**reverse**();

console.**log**(e,d);



*//排序（按照字母顺序排）*

const f = [1,2,10,1,2,3];

const g = f.**sort**();

console.**log**(g,f);





*//判断数组里是否包含某个元素1*

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];

const a1 = avengers.**indexOf**('美国队长');

console.**log**(a1);





const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];

const a2 = avengers.**includes**('美国队长');

console.**log**(a2);





*//多维数组*

const ma = [[1,2],[1,2,3,4]];

console.**log**(ma[0][0]);*//第一个数组的第一个元素*





*//set*

const list = new **Set**();

list.**add**(1);

list.**add**(2).**add**(3).**add**(4).**add**(5);

list.**add**(5);

console.**log**(list);



*//数组去重*

const a = new **Set**([1,2,12,1,2,12]);

const b = new **Set**(a);

console.**log**(b);



const c = new **Set**('hello');

console.**log**(c);



const list4 = new **Set**().**add**('the').**add**('quick').**add**('brown').**add**('fox');

console.**log**(list4.size);

list4.size = 3;

console.**log**(list4);



const list4 = new **Set**().**add**('the').**add**('quick').**add**('brown').**add**('fox');

console.**log**(list.**has**('brown'));

list4.**delete**('the');

console.**log**(list4);





list4.**clear**();

console.**log**(list4);



*//将数组转化成集合*

const list4 = new **Set**().**add**('the').**add**('quick').**add**('brown').**add**('fox');

const oArray = [...list4];

console.**log**(oArray);



const list4 = new **Set**().**add**('the').**add**('quick').**add**('brown').**add**('fox');

const oArray = **Array**.**from**(list4);

console.**log**(oArray);



*//weakset*

let array1 = [1,2,3];

let array2 = [3,4,5];

const weak = new **WeakSet**().**add**(array1).**add**(array2);

console.**log** = (weak);

array1 = null;

array2 = null;

const array3 = [...weak][0];

const array4 = [...weak][1];

console.**log**(array3,array4);





*//map*

const romanNumerals = new **Map**();

romanNumeral.**set**(1,'I');

romanNumeral.**set**(2,'II').**set**(3,'III').**set**(4,'IV').**set**(5,'V');

console.**log**(romanNumeral);

console.**log**(romanNumeral.size);

console.**log**(romanNumeral.**get**(3));

console.**log**(romanNumeral.**has**(5));

romanNumeral.**clear**();

console.**log**(romanNumeral);





const romanNumerals = new **Map**();

romanNumeral.**set**(1,'I').**set**(2,'II').**set**(3,'III').**set**(4,'IV').**set**(5,'V');

const oArray1 = [...romanNumerals];

const oArray2 = **Array**.**from**(romanNumerals);

console.**log**(oArray1);

console.**log**(oArray2);`