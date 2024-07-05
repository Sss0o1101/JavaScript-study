// 変数
let unko = "hello world";

unko = "hello world2"

console.log(unko);


// 定数
const bigUnko = "Hello world";

console.log(bigUnko);

// 配列
let inoki =["いーち","にーい","さーん"];

console.log(inoki[1]);

// ループ文
let index =0;
while(index < 5){
    // ここに繰り返したい命令分
    console.log(index)
    index++;
}

// -----------------------------------------
const questions = ["現在の日本の総理大臣の名前は？","令和３年は西暦で言うと何年？","もっとも人口が多い国はどこ？"];

for(let i = 0; i < questions.length; i++){
    alert(questions[i])
}

// 条件文 if/else
if(inoki.length > 3){
   console.log("ボンバイエ！");
}else{
   console.log("ボンバ...");
}

// 関数
const test = () => {

};

test();


//オブジェクト
const test2 = {
    color: "pink",
    size: "large",
    purfume: "mit",
};

console.log(test2);