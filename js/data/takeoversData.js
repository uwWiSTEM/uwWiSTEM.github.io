const takeovers = {
  upcomingtakeovers: [
  ],
  pasttakeovers: [
    {
      title: 'Victoria Ulubabian',
      date: 'January 21',
      description: "Consultant at IBM⁣ 💼",
      takeoverLocation: "First W'22 Takeovers Highlights",
      imageCover: addTakeoverImagePath("victoria22.png"),
      imageDetails: addTakeoverImagePath("victoria22d.png")
    },
    {
      title: 'Laura Taylor',
      date: 'June 29',
      description: "Medical Laboratory Assistant 🔬⁣",
      takeoverLocation: "First S'21 Takeovers Highlights",
      imageCover: addTakeoverImagePath("lauras21.png"),
      imageDetails: addTakeoverImagePath("lauras21d.png")
    },
    {
      title: 'Kat Mason',
      date: 'June 8',
      description: "Marine Biologist 🐬⁣",
      takeoverLocation: "First S'21 Takeovers Highlights",
      imageCover: addTakeoverImagePath("kats21.png"),
      imageDetails: addTakeoverImagePath("kats21d.png"),
    },
    {
      title: 'Parshati Patel',
      date: 'June 5',
      description: "Astrophysicist, Science Communicator and STEM Education Research 🚀⁣",
      takeoverLocation: "Second S'21 Takeovers Highlights",
      imageCover: addTakeoverImagePath("parshatis21.png"),
      imageDetails: addTakeoverImagePath("parshatis21d.png")
    },
    {
      title: 'Lilian Agyemang-Yeboah',
      date: 'May 25',
      description: "Plastics Engineer 📐⁣",
      takeoverLocation: "Second S'21 Takeovers Highlights",
      imageCover: addTakeoverImagePath("lilians21.png"),
      imageDetails: addTakeoverImagePath("lilians21d.png")
    },
    {
      title: 'Diana Chang',
      date: 'May 14',
      description: "Full Stack Engineer 🖥️⁣",
      takeoverLocation: "Third S'21 Takeovers Highlights",
      imageCover: addTakeoverImagePath("dianas21.png"),
      imageDetails: addTakeoverImagePath("dianas21d.png")
    },
    {
      title: 'Rachel Domagalski',
      date: 'May 4',
      description: "PhD Candidate in Mathematics at Michigan State University 🔢⁣",
      takeoverLocation: "Third S'21 Takeovers Highlights",
      imageCover: addTakeoverImagePath("rachels21.png"),
      imageDetails: addTakeoverImagePath("rachels21d.png")
    },
    {
      title: 'Mina Dezyanian',
      date: 'April 26',
      description: "Civil Engineer, Creator of <a href='https://www.instagram.com/ironringgirls/' target='blank' rel='noreferrer'>@ironringgirls</a> 🏗️",
      takeoverLocation: "Third S'21 Takeovers Highlights",
      imageCover: addTakeoverImagePath("minas21.png"),
      imageDetails: addTakeoverImagePath("minas21d.png")
    },
  ],
};

function addTakeoverImagePath(fileName) {
  return "img/takeovers/" + fileName;
}