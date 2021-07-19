const advocacyData = [
    {
      title: '5 Tips for Remote Learning',
      images: createImageNames("5rl", 4),
      link: "https://www.instagram.com/p/CPRUxJBAU5A/"
    }
]

function createImageNames(namingScheme, numPosts){
  let postNameArr = [];
  for(let i = 1; i <= numPosts; i++) {
    postNameArr.push("img/advocacy/" + namingScheme + i.toString() + ".png");
  };
  return postNameArr;
}