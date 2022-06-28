let menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  addDishToCourse (courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this.courses[courseName].push(dish)
  }, 
  getRandomDishFromCourse: function (courseName){
    let dishes = this.courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal: function (){
  let randApp = this.getRandomDishFromCourse('appetizers')
  let randMain = this.getRandomDishFromCourse('mains')
  let randDess = this.getRandomDishFromCourse('desserts')
  
  let TotalPrice = randApp.price + randMain.price + randDess.price
    return `Your meal is ${randApp.name}, ${randMain.name} and ${randDess.name}. The total price is ${TotalPrice}`
  },
};

menu.addDishToCourse('appetizers', 'Buffalo Wings', 12);
menu.addDishToCourse('mains', 'Pasta Primavera', 17);
menu.addDishToCourse('desserts', 'Cheesecake', 8);

menu.addDishToCourse('appetizers', 'Calamari', 9);
menu.addDishToCourse('mains', 'Chicken Marsala', 19);	
menu.addDishToCourse('desserts', 'Brownie', 7);

menu.addDishToCourse('appetizers', 'Potato Skins', 10);
menu.addDishToCourse('mains', 'Hamburger', 16);
menu.addDishToCourse('desserts', 'Key Lime Pie', 8);

let meal = menu.generateRandomMeal();
console.log(meal);
