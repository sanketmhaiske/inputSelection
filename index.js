let Countries = [];
function myFunction(e) {
    if (Countries.includes(e)) {
        var filtered = Countries.filter(val => val !== e);
        Countries = filtered;
    } else {
        Countries.push(e)
    }
    console.log(Countries)
}

function Search() {
    let SelectedCountries = []
    let search = document.getElementById('search').value;
    if (Countries) {
        Countries.map(val => {
            if (val.toLowerCase().includes(search.toLowerCase())) {
                SelectedCountries.push(val)
            }
            console.log('SelectedCountries', SelectedCountries)
        })
        if (SelectedCountries && search) {
            let mydata = SelectedCountries.map(val => {
                return (`<span>
                    <input type="checkbox" id="${val}" value="${val}" onchange="myFunction('${val}')" />
                    <label for="${val}"> ${val} </label>
                </span >`)
            })
            document.getElementById('searchCountries').innerHTML = mydata.join('');
            document.getElementById('Countries').style.display = 'none'
        }
        if (SelectedCountries=='' && search) {
            document.getElementById('searchCountries').innerHTML = ''
            document.getElementById('Countries').style.display = 'flex'
        }
        if (search=='') {
            document.getElementById('searchCountries').innerHTML = ''
            document.getElementById('Countries').style.display = 'flex'
        }
    }
    else {
        console.log('No countries are found')
    }
}