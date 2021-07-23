const advocacyData = [
    // {
    //   title: 'Planning Mental Health Days',
    //   images: createImageNames("mh", 5),
    //   link: ""
    // },
    {
      title: 'Building Essential Skills',
      images: createImageNames("bes", 5),
      link: "https://www.instagram.com/p/CQrXuCJAi00/"
    },
    {
      title: 'Organizations that Support Women in STEM',
      images: createImageNames("otw", 6),
      link: "https://www.instagram.com/p/CQHfAcugs7J/"
    },
    {
      title: 'Scholarships for Women in STEM',
      images: createImageNames("sfi", 4),
      link: "https://www.instagram.com/p/CP1VH6DA6_3/"
    },
    {
      title: '6 Things Successful Women in STEM Have in Common',
      images: createImageNames("6ts", 5),
      link: "https://www.instagram.com/p/CPooN4CAJhV/"
    },
    {
      title: '5 Tips for Remote Learning',
      images: createImageNames("5rl", 4),
      link: "https://www.instagram.com/p/CPRUxJBAU5A/"
    },
    {
      title: 'How to Find a Great Mentor',
      images: createImageNames("gm", 5),
      link: "https://www.instagram.com/p/CNlQFy0AUgc/"
    },
    {
      title: 'How to Become a STEM Leader',
      images: createImageNames("sl", 4),
      link: "https://www.instagram.com/p/CNTHCEHg7z8/"
    },
    {
      title: 'Society for Canadian Women in Science and Technology',
      images: createImageNames("scw", 5),
      link: "https://www.instagram.com/p/CND7C_mgdpo/"
    },
    {
      title: 'Women in Information and Communication Technology',
      images: createImageNames("wict", 4),
      link: "https://www.instagram.com/p/CM8Csxqgrn_/"
    },
    {
      title: 'Lesser Known STEM Occupations',
      images: createImageNames("lkso", 4),
      link: "https://www.instagram.com/p/CM0NcE5g53w/"
    },
    {
      title: 'Challenges & Detrminants of Success for Women in STEM',
      images: createImageNames("cdo", 4),
      link: "https://www.instagram.com/p/CMdQCS9AZpJ/"
    },
    {
      title: 'Tips for Effective Networking',
      images: createImageNames("ten", 4),
      link: "https://www.instagram.com/p/CMLOa0sAXju/"
    },
    {
      title: 'Shining a Light on Indigenous Women in STEM',
      images: createImageNames("iw", 9),
      link: "https://www.instagram.com/p/CL-R94ogNxs/"
    },
    {
      title: 'Workplace Inequality in STEM',
      images: createImageNames("wi", 4),
      link: "https://www.instagram.com/p/CLaTYFRgwE5/"
    },
    {
      title: 'Happy International Day of Women and Girls in Science!',
      images: createImageNames("iwd", 10),
      link: "https://www.instagram.com/p/CLK7z2xAFMU/"
    },
    {
      title: 'African American Women in STEM',
      images: createImageNames("aa", 4),
      link: "https://www.instagram.com/p/CKxGpd2A1p2/"
    },
    {
      title: 'How Our Community Looks After their Mental Health - #BellLetsTalk',
      images: createImageNames("blt", 2),
      link: "https://www.instagram.com/p/CKmziqzgWVw/"
    },
    {
      title: 'Self Care for STEM Students',
      images: createImageNames("sc", 4),
      link: "https://www.instagram.com/p/CKfFL4QA2N5/"
    },
]

function createImageNames(namingScheme, numPosts){
  let postNameArr = [];
  for(let i = 1; i <= numPosts; i++) {
    postNameArr.push("img/advocacy/" + namingScheme + i.toString() + ".png");
  };
  return postNameArr;
}