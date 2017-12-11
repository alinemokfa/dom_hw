const cats_array = [
  { name: "Cat1", favouriteFood: "Strawberry", image: "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg"},
  { name: "Cat2", favouriteFood: "Banana", image: "https://1.bp.blogspot.com/_9AVkl8VqlSk/S-v56P1XEMI/AAAAAAAAANQ/UiSXJ3_OcWM/s1600/getty_rm_photo_of_cat_staring_close_up.jpg" },
  { name: "Cat3", favouriteFood: "Peach", image: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" }
];

const app = function () {

  for(let cat of cats_array){
    addCat(cat.name, cat.favouriteFood, cat.image);
  }

  // const catList = document.createElement('ul');
  // catList.classList.add('cat');
  //
  // const listItemName = document.createElement('li');
  // listItemName.innerText = "Smelly";
  //
  // const listItemFavouriteFood = document.createElement('li');
  // listItemFavouriteFood.innerText = "Old fish";
  //
  // const catImage = document.createElement('li');
  // const img = document.createElement('img');
  // catImage.appendChild(img);
  // img.src = "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg";
  //
  //
  // catList.appendChild(listItemName);
  // catList.appendChild(listItemFavouriteFood);
  // catList.appendChild(catImage);
  //
  //
  //
  // const cats = document.querySelector('#cats');
  // cats.appendChild(catList);



};


const addCat = function(name, favouriteFood, image) {
  const catList = createCatList();
  const listItemName = createListItemName(name);
  const listItemFavouriteFood = createListItemFavouriteFood(favouriteFood);
  const catImage = createCatImage(image);
  const cats = document.querySelector('#cats');
  appendElements(cats, catList, listItemName, listItemFavouriteFood, catImage);
}

const createCatList = function(){
  const catList = document.createElement('ul');
  catList.classList.add('cat');
  return catList;
}

const createListItemName = function(name){
  const listItemName = document.createElement('li');
  listItemName.innerText = name;
  return listItemName;
}

const createListItemFavouriteFood = function(favouriteFood){
  const listItemFavouriteFood = document.createElement('li');
  listItemFavouriteFood.innerText = favouriteFood;
  return listItemFavouriteFood;
}

const createCatImage = function(url){
  const catImage = document.createElement('li');
  const img = document.createElement('img');
  catImage.appendChild(img);
  img.src = url;
  return catImage;
}

const appendElements = function(cats, catList, listItemName, listItemFavouriteFood, catImage) {
  catList.appendChild(listItemName);
  catList.appendChild(listItemFavouriteFood);
  catList.appendChild(catImage);
  cats.appendChild(catList);
}


document.addEventListener('DOMContentLoaded', app);
