const members = [
    {
        name: "Sophia T.",
        position: "President",
        program: "Biology - Biotechnology Specialization",
        image: execPhotoPrefix("sophia_tan.jpeg"),
        linkedin: "https://www.linkedin.com/in/sophia-tan1"
    },
    {
        name: "Jayanjali B.",
        position: "Vice President Internal",
        program: "Biomedical Science",
        image: execPhotoPrefix("jayanjali.jpeg"),
        linkedin: ""
    },
    {
        name: "Margaret S.",
        position: "Vice President External",
        program: "Pharmacy",
        image: execPhotoPrefix("margaret_su.png"),
        linkedin: "https://www.linkedin.com/in/margaretsu/"
    },
    {
        name: "Martha Z.",
        position: "Treasurer",
        program: "Mathematics/Chartered Professional Accountancy",
        image: execPhotoPrefix("martha_zhu.jpeg"),
        linkedin: "https://www.linkedin.com/in/martha-zhu/"
    },
    {
        name: "Nandini P.",
        position: "Graphic Designer",
        program: "Biomedical Science",
        image: execPhotoPrefix("Nandini Headshot - Nandini Patel.jpeg"),
        linkedin: "https://www.linkedin.com/in/nandini-patel-35892820a/"
    },
    {
        name: "Richa P.",
        position: "Graphic Designer",
        program: "Honours Science",
        image: execPhotoPrefix("richa.png"),
        linkedin: "https://www.linkedin.com/in/richa-patel-8301/"
    },
    {
        name: "Hannah G.",
        position: "Web Developer",
        program: "Software Engineering",
        image: execPhotoPrefix("HannahGuo_WebDev_W21 - Hannah G.png"),
        linkedin: "https://www.linkedin.com/in/hannah-guo/"
    },
    {
        name: "Iman M.",
        position: "Advocacy",
        program: "Honours Biomedical Science",
        image: execPhotoPrefix("Iman Mir.png"),
        linkedin: ""
    },
    {
        name: "Jolly N.",
        position: "Advocacy",
        program: "Health Studies",
        image: execPhotoPrefix("Jolly Noor.jpeg"),
        linkedin: "https://www.linkedin.com/in/jolly-noor-b53366165"
    },
    {
        name: "Andreea P.",
        position: "Event Coordinator",
        program: "Biomedical Science",
        image: execPhotoPrefix("andreea2.jpeg"),
        linkedin: "https://www.linkedin.com/in/andreeapalage/"
    },
    {
        name: "Tong Yin H.",
        position: "Event Coordinator",
        program: "Systems Design Engineering",
        image: execPhotoPrefix("tong_yin.jpeg"),
        linkedin: "https://www.linkedin.com/in/tongyin-han/"
    },
    {
        name: "Simran B.",
        position: "Marketing",
        program: "Environment and Business - Computer Science Minor",
        image: execPhotoPrefix("Simran Bansari.png"),
        linkedin: ""
    },
    {
        name: "Toni O.",
        position: "Marketing",
        program: "Science and Business - Biotechnology Specialization",
        image: execPhotoPrefix("toni.jpeg"),
        linkedin: "https://www.linkedin.com/in/toni-oguntunde-74a096194"
    },
    {
        name: "Alicia L.",
        position: "External Affairs",
        program: "Honours Mathematics",
        image: execPhotoPrefix("AliciaLin_ExternalAffairs_W21 - Alicia Lin.png"),
        linkedin: "http://www.linkedin.com/in/aliciajlin"
    },
    {
        name: "Helena L.",
        position: "External Affairs",
        program: "Science and Business - Biochemistry Specialization",
        image: execPhotoPrefix("Helena Lee Exec Headshot - UW WiSTEM.png"),
        linkedin: "https://www.linkedin.com/in/helenasmlee/"
    },
    {
        name: "Katrina T.",
        position: "Outreach",
        program: "Honours Science with Conditional Admission to Pharmacy (CAP)",
        image: execPhotoPrefix("KatrinaThai_Outreach_S21 - Katrina Thai.JPG"),
        linkedin: ""
    }
]

function execPhotoPrefix(fileName){
    return "img/exec_photos/" + fileName; 
}