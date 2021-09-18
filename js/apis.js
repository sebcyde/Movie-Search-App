export function global() {


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

            axios.get(`http://www.omdbapi.com/?apikey=2813b005&t=${searchterm}`)
                //API Key = 2813b005

                .then
                ((response) => {
                    console.log(response.data);


                    document.querySelector('#searchresults').appendChild(createLi);
                    createLi.appendChild(changeImg);
                    changeImg.classList.add('poster');
                    changeImg.src = response.data.poster;
                    createDiv;
                    createLi.appendChild(createDiv);
                    createH3;
                    createH4Year;
                    createH4Type;
                    createDiv.appendChild(createH3);
                    createDiv.appendChild(createH4Year);
                    createDiv.appendChild(createH4Type);
                    createP;
                    createLi.appendChild(createP)

                    document.querySelector('#resultheader').classList.remove('hidden');

                })
                .catch((err) => {
                    console.log(err);
                })


        }

    });










}