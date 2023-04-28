
const loadSports = () => {

    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
        .then(res => res.json())
        .then(data => displaySports(data.sports))
}
loadSports();

const displaySports = sports => {
    const sportDiv = document.getElementById('sports-detail')
    for (const sport of sports) {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `

        <div class="card">
                <img src=${sport.strSportThumb} class="card-img-top" alt="...">
               
                <div class="card-body">
                    <h5 class="card-title">${sport.strSport}</h5>
                    <p class="card-text">${sport.strSportDescription.slice(0, 300)}</p>
                </div>
            </div>
        
        `;

        sportDiv.appendChild(div)
    }
}

const loadLegue = () => {

    fetch('https://www.thesportsdb.com/api/v1/json/2/all_leagues.php')
        .then(res => res.json())
        .then(data => console.log(data))
}
loadLegue();