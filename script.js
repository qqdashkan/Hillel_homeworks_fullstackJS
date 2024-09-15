const categories = document.getElementById('categories');
const lengthOfCategories = categories.querySelectorAll(':scope > li');
console.log('Number of Categories: ', lengthOfCategories.length);

lengthOfCategories.forEach((item) => {
  const title = item.querySelector('h2');
  const listOfEachCategory = item.querySelector('ul');
  const lengthOfItems = listOfEachCategory.querySelectorAll(':scope > li');

  let longestWord = lengthOfItems[0];
  lengthOfItems.forEach((item) => {
    longestWord =
      item.innerHTML.length >= longestWord.innerHTML.length
        ? item
        : longestWord;
  });
  console.log('------------');
  console.log('Category: ', title.innerHTML);
  console.log('Elements: ', lengthOfItems.length);
  console.log('LongestElement: ', longestWord.innerHTML);
});
