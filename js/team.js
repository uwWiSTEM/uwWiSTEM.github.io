var HTMLMemberName = '<div class="member-description"><h5 class="member-name">%data%</h5><div class="short-divider"></div>';
var HTMLPhoto = '<div class="col-md-4 event-container"><div class="event"><div class="member-photo" style="background-image:url(%data%); background-size: cover;border-radius: 0px 0px 0 0;"></div>';
var HTMLPosition = '<h5 class="event-time">%data%</h5>';
var HTMLProgram = '<h5 class="event-time">%data%</h5></div></div></div>';

var leadershipTeam = [];
var internalTeam = [];
var externalTeam =[];

var leadershipRoles = ["President", "Senior Vice President"];
var internalRoles = ["Vice President Internal", "Treasurer", "Administration", "Graphic Designer", "Web Developer"];
var externalRoles =  ["Vice President External", "Marketing", "Event Coordinator", "External Affairs"];

var members = [
{
    name: "Sophia",
    position: "President",
    subteam: "Leadership",
    program: "",
    image: ""
},
{
    name: "Janah",
    position: "Vice President",
    program: "4A Biomedical Science",
    image: "img/janah.jpeg"
},
{
    name: "Jayanjali",
    position: "Vice President Internal",
    program: "3A Biomedical Science",
    image: "img/jayanjali.jpeg"
},
{
    name: "Margaret",
    position: "Vice President External",
    program: "",
    image: ""
},
{
    name: "Martha",
    position: "Treasurer",
    program: "3A Mathematics/Chartered Professional Accountancy",
    image: "img/martha_zhu.jpeg"
},
{
    name: "Diana",
    position: "Administration",
    program: "3B Computer Science with a Minor in Statistics",
    image: "img/diana_surducan.jpeg"
},
{
    name: "Catherine",
    position: "Graphic Designer",
    program: "2A Computer Engineering",
    image: ""
},
{
    name: "Richa",
    position: "Graphic Designer",
    program: "",
    image: ""
},
{
    name: "Angela",
    position: "Web Developer",
    program: "2B Software Engineering",
    image: "img/angela.jpeg"
},
{
    name: "Andreea",
    position: "Event Coordinator",
    program: "4A Biomedical Sciences ",
    image: "img/andreea.jpeg"
},
{
    name: "Tong Yin",
    position: "Event Coordinator",
    program: "1A Systems Design Engineering",
    image: "img/tong_yin_han.jpeg"
},
{
    name: "Helena",
    position: "Marketing",
    program: "2B Science and Business",
    image: "img/helena_seung-min_lee.png"
},
{
    name: "Toni",
    position: "Marketing",
    program: "2A Science and Business",
    image: "img/toni.jpeg"
},
{
    name: "Alicia",
    position: "External Affairs",
    program: "1A Mathematics",
    image: "img/alicia_lin.jpeg"
},
{
    name: "Yvone",
    position: "External Affairs",
    program: "2A Management Engineering",
    image: "img/yvone_yang.png"
}
]

function display() {
    populateMembersOnIndex();
}

function isRoleInternal(role){
    for (i = 0; i < internalRoles.length; i++){
        if (role == internalRoles[i]){
            return true;
        }
    }
    return false;
}

function isRoleExternal(role){
    for (i = 0; i < externalRoles.length; i++){
        if (role == externalRoles[i]){
            return true;
        }
    }
    return false;
}

function replaceMembersWithHTML() {
    executives.forEach(function(member) {
        member.name = HTMLMemberName.replace("%data%", member.name);
        member.position = HTMLPosition.replace("%data%", member.position);
        member.program = HTMLProgram.replace("%data%", member.program);
        member.image = HTMLPhoto.replace("%data%", member.image);
        if (isRoleInternal(member.position)){
            $("#internal").append(member.image + member.name + member.position + member.program);
        }
        else if (isRoleExternal(member.position)){
            $("#external").append(member.image + member.name + member.position + member.program);
        }
        else{
            $("#leadership").append(member.image + member.name + member.position + member.program);
        }
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
        };
        executives.push(temp);
        i++;
    }
    replaceMembersWithHTML();
}

display();
