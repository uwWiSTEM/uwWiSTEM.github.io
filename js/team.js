const leadershipRoles = ["President", "Vice President Internal", "Vice President External"];
const internalRoles = ["Treasurer", "Administration", "Graphic Designer", "Web Developer"];
const externalRoles =  ["Marketing", "Event Coordinator", "External Affairs"];

let leadershipHTML = '';
let executiveHTML = '<ul id="hexGrid">';

function display() {
    replaceMembersWithHTML(members);

    executiveHTML = executiveHTML.concat('</ul>');
    $("#leadership").append(leadershipHTML);
    $("#executive").append(executiveHTML);
}

function execMemberCircle(member) {
    return `<div class="col-md-4 team-member-container">
                <div class="core-team-container center-block">
                    <div class="core-team-photo" style="background-image:url(${member.image});" alt="${member.name}"></div>
                    <div class="overlay">
                        <div class="team-member-info">
                            <div class="team-member-name">${member.name}</div>
                                <div class="team-member-position">${member.position}</div>
                                ${member.linkedin !== "" ? 
                                `<img src="img/linkedin.svg" 
                                alt="LinkedIn image for ${member.name}" 
                                onclick="window.open('${member.linkedin}','mywindow');" 
                                class="member-linkedin"/>` : ""}
                        </div>
                    </div>
                </div>
            </div>`
}

function regMemberHex(member) {
    return `<li class="hex">
        <div class="hexIn">
            <div class="hexLink">
                <img src="${member.image}" alt="${member.name}"/>
                <div class="overlay">
                    <div class="team-member-info">
                        <div class="team-member-name">${member.name}</div>
                        <div class="team-member-position">${member.position}</div>
                        ${member.linkedin !== "" ? 
                        `<img src="img/linkedin.svg" 
                        alt="LinkedIn image for ${member.name}" 
                        onclick="window.open('${member.linkedin}','mywindow');" 
                        class="member-linkedin"/>` : ""}
                    </div>
                </div>
            </div>
        </div>
    </li>`
}

function replaceMembersWithHTML(executives) {
    executives.forEach((member) => {
        if (leadershipRoles.includes(member.position)){
            leadershipHTML = leadershipHTML.concat(execMemberCircle(member));
        } else {
            executiveHTML = executiveHTML.concat(regMemberHex(member));
        }
    })
}

display();