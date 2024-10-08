// fetch('projects.json')
//     .then(response => response.json())
//     .then(data => {
//         data.projects.ja.forEach(project => {
//             document.getElementById('projects').innerHTML +=
//                 `<div class="application">
//                     <h2>${project.title}</h2>
//                     <h3>${project.technology}</h3>
//                     <p>URL : <a href="${project.url}">${project.url}</a><br>
//                         ${project.description}
//                     </p>
//                 </div> `
//         });
//     });

fetch('../internships.json')
    .then(response => response.json())
    .then(data => {
        data.internships.en.forEach(internship => {
            document.getElementById('internships').innerHTML +=
                `
            <li>
                <header>
                    <p class="sanserif">${internship.company}</p>
                    <time>${internship.duration}</time>
                </header>
                <ul>
                    ${internship.description.map(responsibility => `<li>${responsibility}</li>`).join('')}
                </ul>
            </li>
            `;
        });
    });

let skillsList = document.createElement('ul');
fetch('../languages.json')
    .then(response => response.json())
    .then(data => {
        data.programming_skills.en.forEach(skill => {
            let listItem = document.createElement('li');
            let spanItem = document.createElement('span');
            spanItem.textContent = skill.language;
            listItem.appendChild(spanItem);
            skillsList.appendChild(listItem);
        });
        document.getElementById('skills').appendChild(skillsList);
    });