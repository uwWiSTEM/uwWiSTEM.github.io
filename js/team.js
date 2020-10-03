var HTMLMemberName = '<div class="member-description"><h5 class="member-name">%data%%linkedin_data%</h5><div class="short-divider"></div>';
var HTMLLinkedInIcon = '&nbsp<img src="img/linkedin.svg" alt="LinkedIn" onclick="window.open(\'%data%\',\'mywindow\');" style="cursor: pointer; vertical-align: 0px;" width="18" height="18"/>'
var HTMLPhoto = '<div class="col-md-4 event-container subteam-member event"><div class="event"><div class="member-photo" style="background-image:url(%data%); background-position: center; background-size: cover;border-radius: 0px 0px 0 0;"></div>';
var HTMLPosition = '<h5 class="event-time">%data%</h5>';
var HTMLProgram = '<h5 class="event-time">%data%</h5></div></div></div>';
var HTMLClosingDiv = '</div>';

// TODO: CENTER IMAGES AND MAKE SURE THEY LOOK NICE IN WIERD VIEWS

var executives = [];

var leadershipRoles = ["President", "Vice President Internal", "Vice President External"];
var internalRoles = ["Treasurer", "Administration", "Graphic Designer", "Web Developer"];
var externalRoles =  ["Marketing", "Event Coordinator", "External Affairs"];

var members = [
{
    name: "Sophia T.",
    position: "President",
    subteam: "Leadership",
    program: "2B Biology - Biotechnology Specialization",
    image: "img/sophia_tan.jpeg",
    linkedin: "https://www.linkedin.com/in/sophia-tan1"
},
{
    name: "Jayanjali B.",
    position: "Vice President Internal",
    program: "3A Biomedical Science",
    image: "img/jayanjali.jpeg",
    linkedin: ""
},
{
    name: "Margaret S.",
    position: "Vice President External",
    program: "2A Pharmacy",
    image: "img/margret_su.jpeg",
    linkedin: "https://www.linkedin.com/in/margaretsu/"
},
{
    name: "Martha Z.",
    position: "Treasurer",
    program: "3A Mathematics/Chartered Professional Accountancy",
    image: "img/martha_zhu.jpeg",
    linkedin: "https://www.linkedin.com/in/martha-zhu/"
},
{
    name: "Diana S.",
    position: "Administration",
    program: "3B Computer Science - Statistics Minor",
    image: "img/diana_surducan.jpeg",
    linkedin: "https://www.linkedin.com/in/diana-surducan"
},
{
    name: "Catherine C.",
    position: "Graphic Designer",
    program: "2A Computer Engineering",
    image: "img/wistem_icon.png",
    linkedin: "https://www.linkedin.com/in/catherinejjchen/"
},
{
    name: "Richa P.",
    position: "Graphic Designer",
    program: "2B Honours Science",
    image: "img/richa_patel.jpeg",
    linkedin: "https://www.linkedin.com/in/richa-patel-8301/"
},
{
    name: "Angela D.",
    position: "Web Developer",
    program: "2B Software Engineering",
    image: "img/angela.jpeg",
    linkedin: "https://www.linkedin.com/in/angela-dietz/"
},
{
    name: "Andreea P.",
    position: "Event Coordinator",
    program: "4A Biomedical Science",
    image: "img/andreea.jpeg",
    linkedin: "https://www.linkedin.com/in/andreeapalage/"
},
{
    name: "Tong Yin H.",
    position: "Event Coordinator",
    program: "1A Systems Design Engineering",
    image: "img/tong_yin_han.jpeg",
    linkedin: "https://www.linkedin.com/in/tongyin-han/"
},
{
    name: "Helena S.L.",
    position: "Marketing",
    program: "2B Science and Business - Biochemistry Specialization",
    image: "img/helena_seung-min_lee.png",
    linkedin: "https://www.linkedin.com/in/helenasmlee/"
},
{
    name: "Toni O.",
    position: "Marketing",
    program: "2A Science and Business - Biotechnology Specialization",
    image: "img/toni.jpeg",
    linkedin: "https://www.linkedin.com/in/tongyin-han/"
},
{
    name: "Alicia L.",
    position: "External Affairs",
    program: "1A Honours Mathematics",
    image: "img/alicia_lin.jpeg",
    linkedin: "http://www.linkedin.com/in/aliciajlin"
},
{
    name: "Yvone Y.",
    position: "External Affairs",
    program: "2A Management Engineering",
    image: "img/yvone_yang.png",
    linkedin: "https://www.linkedin.com/in/yvone-yang/"
}
]

function display() {
    populateMembersOnIndex();
}

function isRoleInternal(role){
    for (i = 0; i < internalRoles.length; i++){
        if (role === internalRoles[i]){
            return true;
        }
    }
    return false;
}

function isRoleExternal(role){
    for (i = 0; i < externalRoles.length; i++){
        if (role === externalRoles[i]){
            return true;
        }
    }
    return false;
}

function replaceMemberWithHTML(member) {
    member.position = HTMLPosition.replace("%data%", member.position);
    member.program = HTMLProgram.replace("%data%", member.program);
    member.image = HTMLPhoto.replace("%data%", member.image);
    member.name = HTMLMemberName.replace("%data%", member.name);
    if (member.linkedin !== ""){
        member.name = member.name.replace("%linkedin_data%", HTMLLinkedInIcon.replace("%data%", member.linkedin));
    }
    else{
        member.name = member.name.replace("%linkedin_data%", "");
    }
}

function replaceMembersWithHTML() {
    var team;
    var hasLinkedin = true;
    executives.forEach(function(member) {
        if (isRoleInternal(member.position)){
            team = "#internal";
        }
        else if (isRoleExternal(member.position)){
            team = "#external";
        }
        else{
            team = "#leadership";
        }

        if (member.linkedin == ""){
            hasLinkedin = false;
        }
        else hasLinkedin = true;

        replaceMemberWithHTML(member);
        $(team).append(member.image + member.name + member.position + member.program);
    })
}

function populateMembersOnIndex() {
    var i = 0;
    while (i < members.length) {
        let temp = {
            name: members[i].name,
            position: members[i].position,
            program: members[i].program,
            image: members[i].image,
            linkedin: members[i].linkedin
        };
        executives.push(temp);
        i++;
    }
    replaceMembersWithHTML();
}

display();
