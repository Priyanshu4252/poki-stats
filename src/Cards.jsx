import { useEffect,useState } from "react";

function Cards(id){
    const [name,setName] = useState("");
    const [type,setType] = useState("");
    const [height,setHeight] = useState("");
    const [weight,setWeight] = useState("");
    const [base_experience,setexperience] = useState("");
    const [base_stats,setstats]=useState("");
    const [image,setImage] = useState(null);
    const url = `https://pokeapi.co/api/v2/pokemon/${id.i}`
    fetch(url)
        .then(Response => Response.json())
        .then(function (data){
            setName(data.name);
            setType(data.types[0].type.name);
            setHeight(data.height);
            setWeight(data.weight);
            setexperience(data.base_experience);
            setstats(data.stats[0].base_stat)
            setImage(data.sprites.front_default);
        }
        )
    return(
        <>
                <div id="card_container">
                    <img src={image} alt="poki-image" id="image" />
                    <h3 id="name">{name}</h3>
                    <ul>
                        <li>Type    : {type}</li>
                        <li>Hieght  : {height}</li>
                        <li>Weight  : {weight}</li>
                        <li>Base Stats : {base_stats}</li>
                        <li>Base Experience : {base_experience}</li>
                    </ul>
                </div>
        </>
    );
}

export default Cards