let courses = [
        { name: "Courses in England", prices: [0, 100] }, 
        { name: "Courses in Germany", prices: [500, null] }, 
        { name: "Courses in Italy", prices: [100, 200] }, 
        { name: "Courses in Russia", prices: [null, 400] },
        { name: "Courses in China", prices: [50, 250] },
        { name: "Courses in USA", prices: [200, null] },
        { name: "Courses in Kazakhstan", prices: [56, 324] },
        { name: "Courses in France", prices: [null, null] }
    ]
 
    let requiredRange1 = [null, 200];
    let requiredRange2 = [100, 350];
    let requiredRange3 = [200, null];

function findCourses (input){
//проверка на непустые входящие значения    
  if(input == undefined || input == null || typeof(input) != 'object') {
  alert('Некорректные входящие данные!')
  return
  }
    
// проверка на количество входящих переменных
  if(input.length != 2) {
    alert('Неверное количество переменных!');
    return
    }
  var priceFrom = input[0];
  var priceTill = input[1];
  var filteredCourses = [];
      
  for (var i=0; i < courses.length; i++) {
    var price = courses[i]["prices"];

    if (priceFrom <= price[0] && priceTill >= price[0]){
        filteredCourses.push(courses[i]);
        continue;
    }
    if( priceFrom >= price[0] && priceFrom <= price[1]){
        filteredCourses.push(courses[i]);
        continue;
    }
    if (price[1]==null && (priceFrom >=price[0] || priceTill >= price[0])) {
        filteredCourses.push(courses[i]);
        continue;
    }    
    if (priceTill == null && (priceFrom <=price[0] || priceFrom <= price[1])) {
        filteredCourses.push(courses[i]);
        continue;
    }
  }

  if (filteredCourses.length > 0) {
    filteredCourses.sort(function (a, b) {
      if (a.prices[0] > b.prices[0]) {
        return 1;
      }
      if (a.prices[0] > b.prices[0]) {
        return -1;
      }
      return 0;
    })
    alert(filteredCourses)
  } else {
    alert('Нет подходящих Курсов!')
  }
  return filteredCourses
}
    
findCourses(requiredRange1);
findCourses(requiredRange2);
findCourses(requiredRange3);
