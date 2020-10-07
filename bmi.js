//  #!/usr/bin/env node
//用变量存储Mark和John的体重以及身高
let MarkHeight = h1 = 1.80;
let JohnHeight = h2 = 1.75;
let MarkMass = m1 = 70;
let JohnMass = m2 = 60;


//计算二人的BMI；
let MarkBmi = B1;
let JohnBmi = B2;
var B1 = m1 / (h1 * h1);
var B2 = m2/ (h2 * h2);
console.log("MarkBmi: "+B1, "JohnBmi: "+B2);

//创建一个布尔变量，用来包含Mark的BMI是否比John更高；
let X = (B2 > B1) ? true : false;
console.log(X);

//打印一个字符串到控制台，包含第三步的变量（比如"Mark的BMI是否比John更高？true"）
console.log("Mark的BMI是否比John更高？"+String(X));