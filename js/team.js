var HTMLMemberName = '<h2 class="eventp-title">%data%</h2>';

var executiveTeam = [];
var members = [{
    name: "Aditi Lohtia",
    position: "Event Coordinator",
    program: "2A Computer Engineering",
    image: "img/aditi_lohtia"
},
{
    name: "Tamara Khalaf",
    position: "Secretary",
    program: "2B Physics and Astronomy",
    image: "img/tamara_khalaf"
}]

function replaceMembersWithHTML() {
    members.forEach(function(member) {
        member.name = HTMLMemberName.replace("%data%", member.name);
        member.position = HTMLMemberName.replace("%data%", member.position);
        member.program = HTMLMemberName.replace("%data%", member.program);
        member.image = HTMLMemberName.replace("%data%", member.image);

    })
}