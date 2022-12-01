export class rickAndMorty{
    constructor(){
        this.url="https://rickandmortyapi.com/api/character";
    }
    consulta(){
        fetch(this.url)
        .then(res => res.json())
        .then(rm => {
            console.log(rm);
            let {results} = rm;
            // console.log(results[0].name);
            // console.log(episode.length());
            let text = ``;
            let contador = 0;
            let numPersonaje = 0;
            results.map(personaje =>{ 
                let {gender, image, location, name, origin, species, status, type, episode} = personaje;
                // console.log(episode);
                // let [espisodio] = 
                // this.espisodios(episode);
                // console.log(espisodio.length());
                if(contador<10){
                    text = `
                        <div class="card">
                            <div class="row">
                                <div class="card-header">${name}</div>
                                <div class="col-md-6">
                                    <img src="${image}" class="img-fluid rounded-bottom w-100" alt="...">
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body">
                                        <p>Personaje ${numPersonaje+=1}</p>
                                        <p>Genero : ${gender}</p>
                                        <p>Localizacion: ${location.name}</p>
                                        <p>Origen: ${origin.name}</p>
                                        <p>Especie: ${species}</p>
                                        <p>Estatus: ${status}</p>
                                        <p>Tipo: ${type != "" ? type : 'unknown' }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    $(`#secCard${contador}`).html(`${text}`);
                    contador++;
                }
            });

        })
        .catch(error => console.log(error));
    }
    // espisodios(episode){
    //     // count = 0;
    //     // episode.map(aux => {
    //         // episode[0].lenght();
    //         console.log(episode);
    //         // count++;
    //     // });
    //     // console.log(count);
    // }
}