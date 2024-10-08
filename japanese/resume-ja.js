fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        data.projects.ja.forEach(project => {
            document.getElementById('projects').innerHTML +=
                `<div class="application">
                    <h2>${project.title}</h2>
                    <h3>${project.technology}</h3>
                    <p>URL : <a href="${project.url}">${project.url}</a><br>
                        ${project.description}
                    </p>
                </div> `
        });
    });

fetch('internships.json')
    .then(response => response.json())
    .then(data => {
        data.internships.ja.forEach(internship => {
            document.getElementById('internships').innerHTML +=
                `
            <li class="internship">
                <h2>${internship.company}</h2>
                <h4>${internship.duration}</h4>
                <p>${internship.description}</p>
            </li>
            `
        });
    });
fetch('languages.json')
    .then(response => response.json())
    .then(data => {
        data.programming_skills.ja.forEach(skill => {
            document.getElementById('skills').innerHTML +=
                `<li class="programming">
                    <h2>${skill.language}</h2>
                    <p>使用歴 : ${skill.experience}年</p>
                    <p>${skill.description}</p>
                </li>`
        });
    });