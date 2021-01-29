// HTML for all member images
var HTMLOverlayText = '<div class="overlay"><div class="team-member-info">%data%</div></div>';
var HTMLMemberName = '<div class="team-member-name">%data%</div>';
var HTMLPosition = '<div class="team-member-position">%data%</div>';
var HTMLProgram = '<h5 class="event-time">%data%</h5></div></div></div>'; // Not currently used
var HTMLLinkedInIcon = '<img src="img/linkedin.svg" alt="LinkedIn" onclick="window.open(\'%data%\',\'mywindow\');" class="member-linkedin"/>'
var HTMLClosingDiv = '</div>';

// HTML for leadership members
var HTMLPhoto = '<div class="col-md-4 team-member-container"><div class="core-team-container center-block"><img class="core-team-photo" style="background-image:url(%data%);">';

// HTML for executives in hexagonal arrangment
var HTMLHexTeamMember = '<li class="hex"><div class="hexIn"><div class="hexLink">';
var HTMLHexImage = '<img src="%data%" alt="" />';
var HTMLHexEnd = '</div></div></li>';

var executives = [];

var leadershipRoles = ["President", "Vice President Internal", "Vice President External"];
var internalRoles = ["Treasurer", "Administration", "Graphic Designer", "Web Developer"];
var externalRoles =  ["Marketing", "Event Coordinator", "External Affairs"];

var leadershipHTML = '';
var executiveHTML = '';

var members = [
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
    name: "Diana S.",
    position: "Administration",
    program: "Computer Science - Statistics Minor",
    image: execPhotoPrefix("diana_surducan.jpeg"),
    linkedin: "https://www.linkedin.com/in/diana-surducan"
},
{
    name: "Catherine C.",
    position: "Graphic Designer",
    program: "Computer Engineering",
    image: execPhotoPrefix("catherine.jpeg"),
    linkedin: "https://www.linkedin.com/in/catherinejjchen/"
},
{
    name: "Richa P.",
    position: "Graphic Designer",
    program: "Honours Science",
    image: execPhotoPrefix("richa_patel.jpeg"),
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
    name: "Yvone Y.",
    position: "External Affairs",
    program: "Management Engineering",
    image: execPhotoPrefix("yvone_yang.jpeg"),
    linkedin: "https://www.linkedin.com/in/yvone-yang/"
}
]

function display() {
    initializeSubteams();
    populateMembersOnIndex();
    finalizeSubteams();
    updateHTMLTeams();
}

function execPhotoPrefix(fileName){
    return "img/exec_photos/" + fileName; 
}

function initializeSubteams(){
    executiveHTML = '<ul id="hexGrid">';
    externalHTML = '<ul id="hexGrid">';
}

function finalizeSubteams(){
    executiveHTML = executiveHTML.concat('</ul>');
    externalHTML = externalHTML.concat('</ul>');
}

function updateHTMLTeams() {
    $("#leadership").append(leadershipHTML);
    $("#executive").append(executiveHTML);
}

function isRoleLeadership(role){
    for (i = 0; i < leadershipRoles.length; i++){
        if (role === leadershipRoles[i]){
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
        member.linkedin = HTMLLinkedInIcon.replace("%data%", member.linkedin);
    }
}

function replaceMemberWithHexHTML(member) {
    member.position = HTMLPosition.replace("%data%", member.position);
    member.program = HTMLProgram.replace("%data%", member.program);
    member.image = HTMLHexImage.replace("%data%", member.image);
    member.name = HTMLMemberName.replace("%data%", member.name);
    if (member.linkedin !== ""){
        member.linkedin = HTMLLinkedInIcon.replace("%data%", member.linkedin);
    }
}

function replaceMembersWithHTML() {
    executives.forEach(function(member) {
        if (isRoleLeadership(member.position)){
            replaceMemberWithHTML(member);
            var memberHTML = member.image + HTMLOverlayText.replace("%data%", member.name + member.position + member.linkedin) + HTMLClosingDiv + HTMLClosingDiv;
            leadershipHTML = leadershipHTML.concat(memberHTML);
        }
        else {
            replaceMemberWithHexHTML(member);
            var memberHTML = HTMLHexTeamMember + member.image + HTMLOverlayText.replace("%data%", member.name + member.position + member.linkedin)+ HTMLHexEnd;
            executiveHTML = executiveHTML.concat(memberHTML);
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
            linkedin: members[i].linkedin
        };
        executives.push(temp);
        i++;
    }
    replaceMembersWithHTML();
}

display();
