//1. 计算每队的平均分；
let John = (89 + 120 + 103) / 3;
let Mike = (116 + 94 + 123) / 3;
console.log("John队的平均分为： "+ John ,    "Mike队的平均分为： "+Mike);


//2. 决定哪支球队平均获胜（平均分最高），并将胜者打印到控制台。在输出中也包括平均分；
if (John > Mike){
    console.log("John的球队获胜: "+John);
}else if(John < Mike){
    console.log("Mike的球队获胜: "+Mike);
}else{
    console.log("平局");
}

//3. 然后改变分数来显示不同的赢家。别忘了考虑到可能会有平局（平均分相同）；
//4. Mary 也打篮球，她的队得了97分、134分和105分。像前面一样，把平均分胜出者记录到控制台；
let Mary = (97 + 134 + 105) / 3;
console.log("Mary队的平均分为： "+ Mary );


if (john > mike && john > mary) {
    console.log("John的球队获胜: "+John);
} else if (mike > john && mike > mary) {
    console.log("Mike的球队获胜: "+Mike);
} else if (mary > john && mary> mike) {
    console.log("Mike的球队获胜: "+Mike);
} else {
    console.log("平局");
}


//5. 像前面一样，改变分数以产生不同的赢家，记住可能会有平局。