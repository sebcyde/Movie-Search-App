export function apiLogic() {


    const createLi = document.createElement('li');

    const changeImg = document.createElement('img');

    const createDiv = document.createElement('div');

    const createH3 = document.createElement('h3');

    const createH4Year = document.createElement('h4');

    const createH4Type = document.createElement('h4');

    const createP = document.createElement('p');



    let search = document.querySelector('.searchsubmit').addEventListener('click', (e) => {

        let searchterm = document.getElementById('searchparameter').value;

        e.preventDefault();


        if (searchterm == '') {
            alert('Search parameter cannot be empty');

        } else {

            console.log(searchterm);

            axios.get(`//www.omdbapi.com/?apikey=2813b005&t=${searchterm}`)
         
                .then
                ((response) => {
                    console.log(response.data);

                    // Create Dynamic Elements
                    document.querySelector('#searchresults').appendChild(createLi);
                    createLi.appendChild(changeImg);
                    changeImg.classList.add('poster');
                    console.log(response.data.poster);
                    changeImg.src = response.data.poster;
                    createDiv;
                    createLi.appendChild(createDiv);
                    createH3;
                    createH3.classList.add('title');
                    createH4Year;
                    createH4Year.classList.add('year');
                    createH4Type;
                    createH4Type.classList.add('type');
                    createDiv.appendChild(createH3);
                    createDiv.appendChild(createH4Year);
                    createDiv.appendChild(createH4Type);
                    createP;
                    createP.classList.add('plot');
                    createLi.appendChild(createP)


                    // Add Searchterm Data to Elements
                    changeImg.src = `${response.data.Poster}`;
                    createH3.innerHTML = `Title: ${response.data.Title}`;
                    createH4Year.innerHTML = `Year: ${response.data.Year}`;
                    createH4Type.innerHTML = `Type: ${response.data.Type}`;
                    createP.innerHTML = `${response.data.Plot}`;

                    document.querySelector('#resultheader').classList.remove('hidden');

                })
                .catch((err) => {
                    console.log(err);
                })


        }

    });










}
