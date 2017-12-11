const app = function () {

  const catList = document.createElement('ul');
  catList.classList.add('cat');

  const listItemName = document.createElement('li');
  listItemName.innerText = "Smelly";

  const listItemFavouriteFood = document.createElement('li');
  listItemFavouriteFood.innerText = "Old fish";

  const catImage = document.createElement('li');
  const img = document.createElement('img');
  catImage.appendChild(img);
  img.src = "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg";


  catList.appendChild(listItemName);
  catList.appendChild(listItemFavouriteFood);
  catList.appendChild(catImage);



  const cats = document.querySelector('#cats');
  cats.appendChild(catList);



};


const addCat = function(author, text) {
  const article = createArticle();
  const blockquote = createBlockquote(text);
  const cite = createCite(author);


  appendElements(article, blockquote, cite);
}

document.addEventListener('DOMContentLoaded', app);
