const members = [
  // {
  //   name: "Helena L.",
  //   position: "President",
  //   program: "Mathematics/Financial Analysis and Risk Management",
  //   image: execPhotoPrefix("helena.png"),
  //   linkedin: "https://www.linkedin.com/in/helenasmlee/",
  // },
  {
    name: "Jessica C.",
    position: "President",
    program: "Biochemistry",
    image: execPhotoPrefix("jessica.png"),
    linkedin: "https://www.linkedin.com/in/jessica-canlas-06b212220",
  },
  {
    name: "Elena E.",
    position: "Vice President Internal",
    program:
      "Honours Science With a Minor in Economics",
    image: execPhotoPrefix("elena.png"),
    linkedin: "https://ca.linkedin.com/in/elena-ericmilton-53503b222",
  },
  {
    name: "Alexis T.",
    position: "Vice President External",
    program: "Biomedical Scinece",
    image: execPhotoPrefix("alexis.jpg"),
    linkedin: "https://www.linkedin.com/in/alexistakyi/",
  },
  {
    name: "Sydney",
    position: "External Affairs",
    program: "Honours Science",
    image: execPhotoPrefix("sydney.png"),
    linkedin: "",
  },
  {
    name: "Ava C.",
    position: "Event Coordinator",
    program: "Biomedical Science",
    image: execPhotoPrefix("ava.png"),
    linkedin: "https://www.linkedin.com/in/ava-carli/",
  },
  {
    name: "Rathisa U.",
    position: "Outreach Coordinator",
    program: "Biomedical Science",
    image: execPhotoPrefix("rathisa.jpg"),//updated
    linkedin: "http://www.linkedin.com/in/rathisa-uthayachandran-4b8b951b6",
  },
  {
    name: "Jessica I.",
    position: "Marketing Director",
    program: "Honours Science - Biology & Computer Science",
    image: execPhotoPrefix("jessicai.png"),
    linkedin: "https://www.linkedin.com/in/omo-jessicaidahosa",
  },  
  {
    name: "Jessica Y.",
    position: "Marketing Coordinator",
    program: "Biotech/CPA",
    image: execPhotoPrefix("jessicay.png"),//updated
    linkedin: "",
  },
  {
    name: "Jenna L.",
    position: "Graphic Designer",
    program: "Science and Business",
    image: execPhotoPrefix("jenna.png"),//updated
    linkedin: "https://www.linkedin.com/in/jennalou/",
  },
  {
    name: "Aayet H.",
    position: "Graphic Designer",
    program: "Global Business and Digital Arts",
    image: execPhotoPrefix("aayet.png"),
    linkedin: "https://www.linkedin.com/in/aayet-habeeb-85765926b/",
  },
  {
    name: "Emily K.",
    position: "External Affairs Coordinator",
    image:execPhotoPrefix("emily.png"),
    linkedin: "https://www.linkedin.com/in/emily-koo-993950211",
  },
  {
    name: "Sydney M.",
    position: "External Affairs",
    image:execPhotoPrefix("sydney.png"),//updated
    linkedin: "",
  },
  {
    name: "Anaelle Y.",
    position: "Advocacy Coordinator",
    program: "Systems Design Engineering",
    image: execPhotoPrefix("anaelle.jpg"),//updated
    linkedin: "http://linkedin.com/in/anaelle-youbissi",
  },
  {
    name: "Amrin S.",
    position: "Outreach",
    program: "Computational Mathematics & Statistics",
    image: execPhotoPrefix("amrin.png"),
    linkedin: "https://www.linkedin.com/in/amrinsandhu/",
  },
  {
    name: "Mairah H.",
    position: "Web Developer",
    program: "Computer Engineering",
    image: execPhotoPrefix("mairah.jpg"),//updated
    linkedin: "https://www.linkedin.com/in/mairah-h",
  },
  {
    name: "Laura M.",
    position: "WiSTEM Ambassador",
    program: "Chemistry",
    image: execPhotoPrefix("laura.jpg"),//updated
    linkedin: "https://www.linkedin.com/in/laura-mereweather-341338276/",
  },
  {
    name: "Leah J.",
    position: "Treasurer",
    program: "Honours Math",
    image: execPhotoPrefix("leah.png"),//updated
    linkedin: "",
  },
  {
    name: "Shamini N.",
    position: "Advocacy Coordinator",
    program: "Biology",
    image: execPhotoPrefix("shamini.jpg"),//updated
    linkedin: "http://linkedin.com/in/shamini-nithianandarajah-83a514202",
  },
  {
    name: "Ankita S.",
    position: "WiSTEM Ambassador",
    program: "Kinesiology",
    image: execPhotoPrefix("ankita.jpg"),//updated
    linkedin: "",
  },
];

function execPhotoPrefix(fileName) {
  return "img/exec_photos/" + fileName;
}
