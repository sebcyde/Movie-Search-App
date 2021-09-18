export function global() {



    document.querySelector('.searchsubmit').addEventListener('click', (e) => {

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
                    console.log(response);

                })
                .catch((err) => {
                    console.log(err);
                })


        }

    });










}