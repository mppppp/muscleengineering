/*
*  計算処理系
*/

var totalIntakeCal = 0;
var totalIntakeProtein = 0;


// 計算処理
function UpdateIntakeDataFromMealAmount(meal, amount){
    var intakeCal = CalcMealCalFromAmount(meal, amount);
    var intakeProtein = CalcMealProteinFromAmount(meal, amount);
    totalIntakeCal += intakeCal;
    totalIntakeProtein += intakeProtein;
}

function UpdateIntakeDataFromMealGram(meal, gram){
    var intakeCal = CalcMealCalFromGram(meal, gram);
    var intakeProtein = CalcMealProteinFromGram(meal, gram);
    totalIntakeCal += intakeCal;
    totalIntakeProtein += intakeProtein;
}

function UpdateIntakeDataFromFoodGram(food, gram){
    var intakeCal = CalcFoodCalFromGram(food, gram);
    var intakeProtein = CalcFoodProteinFromGram(food, gram);
    totalIntakeCal += intakeCal;
    totalIntakeProtein += intakeProtein;
}


// 裏処理
function CalcMealCalFromAmount(meal, amount){
  var baseCal = MealCalList[meal];
  var cal = 0.0;

  if (amount == 0){
    // 小盛り
    cal = baseCal * 0.8;
  } else if (amount == 1) {
    // 普通サイズ
    cal = baseCal;
  } else {
    // 大盛り
    cal = baseCal * 1.2;
  }

  return cal;
}

function CalcMealCalFromGram(meal, gram){
  var baseCal = MealCalListPerGram[meal];
  return baseCal * gram;
}

function CalcMealProteinFromAmount(meal, amount) {
  var baseProtein = MealProteinList[meal];
  var protein = 0.0;

  if (amount == 0){
    // 小盛り
    protein = baseProtein * 0.8;
  } else if (amount == 1) {
    // 普通サイズ
    protein = baseProtein;
  } else {
    // 大盛り
    protein = baseProtein * 1.2;
  }

  return protein;
}

function CalcMealProteinFromGram(meal, gram){
  var baseProtein = MealProteinListPerGram[meal];
  return baseProtein * gram;
}

function CalcFoodCalFromGram(food, gram){
  var baseCal = FoodCalListPerGram[food];
  return baseCal * gram;
}

function CalcFoodProteinFromGram(food, gram){
  var baseProtein = FoodProteinListPerGram[meal];
  return baseProtein * gram;
}

// 食事系の定義

var MealList = {
  "ラーメン",
  "つけ麺",
  "カレーライス",
  "うどん",
  "ざるそば",
  "チャーハン",
  "カツ丼",
  "天丼",
  "親子丼"
}

var MealCalList = {
  "ラーメン":568
  "つけ麺":647
  "カレーライス":862
  "うどん":320
  "ざるそば":275
  "チャーハン":673
  "カツ丼":795
  "天丼":642
  "親子丼":684
}

var MealCalListPerGram = {
  "ラーメン":0.85
  "つけ麺":1.12
  "カレーライス":1.67
  "うどん":0.79
  "ざるそば":0.90
  "チャーハン":1.81
  "カツ丼":2.00
  "天丼":1.69
  "親子丼":1.46
}

var MealProteinList = {
  "ラーメン":22.4
  "つけ麺":26.4
  "カレーライス":21.01
  "うどん":9.76
  "ざるそば":12.24
  "チャーハン":15.43
  "カツ丼":24.33
  "天丼":22.95
  "親子丼":31.95
}

var MealProteinListPerGram = {
  "ラーメン":0.0335
  "つけ麺":0.0457
  "カレーライス":0.0407
  "うどん":0.0241
  "ざるそば":0.04
  "チャーハン":0.0415
  "カツ丼":0.0612
  "天丼":0.0604
  "親子丼":0.0682
}

// 食材系の定義

var FoodList = {
  "白米",
  "玄米",
  "鶏肉",
  "豚肉",
  "牛肉",
  "枝豆",
  "トマト",
  "ニンジン"
}

/*
var FoodCalList = {
  "白米":,
  "玄米":,
  "鶏肉":,
  "豚肉":,
  "牛肉":,
  "枝豆":,
  "トマト":,
  "ニンジン":
}
*/

var FoodCalListPerGram = {
  "白米":3.56,
  "玄米":2.64,
  "鶏肉":2.00,
  "豚肉":3.86,
  "牛肉":3.71,
  "枝豆":1.35,
  "トマト":0.19,
  "ニンジン":0.37
}

/*
var FoodProteinList = {
  "白米":,
  "玄米":,
  "鶏肉":,
  "豚肉":,
  "牛肉":,
  "枝豆":,
  "トマト":,
  "ニンジン":
}
*/

var FoodProteinListPerGram = {
  "白米":0.061,
  "玄米":0.0448,
  "鶏肉":0.16,
  "豚肉":0.142,
  "牛肉":0.144,
  "枝豆":0.117,
  "トマト":0.007,
  "ニンジン":0.006
}
