const takeovers = {
  upcomingtakeovers: [
    {
      title: 'Laura Taylor',
      date: 'June 29',
      link: "https://www.instagram.com/uwwistem/",
      description: "Medical Laboratory Assistant 👩‍🔬🔬⁣",
      imageCover: addTakeoverImagePath("lauras21.jpg"),
      imageDetails: addTakeoverImagePath("lauras21.jpg")
    },
  ],
  pasttakeovers: [
    {
      title: 'Kat Mason',
      date: 'June 8',
      link: "https://www.instagram.com/stories/highlights/17901360331915864/",
      description: "Marine Biologist 🌊🐬⁣",
      imageCover: addTakeoverImagePath("kats21.jpg"),
      imageDetails: addTakeoverImagePath("kats21.jpg")
    },
    {
      title: 'Parshati Patel',
      date: 'June 5',
      link: "https://www.instagram.com/stories/highlights/17901360331915864/",
      description: "Astrophysicist, Science Communicator and STEM Education Research 🚀⁣",
      imageCover: addTakeoverImagePath("parshatis21.jpg"),
      imageDetails: addTakeoverImagePath("parshatis21.jpg")
    },
  ],
};

function addTakeoverImagePath(fileName) {
  return "img/takeovers/" + fileName;
}