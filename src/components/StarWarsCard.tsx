import { Link } from "react-router-dom"

function StarWarsCard({ accueil }) {
    return (
        <div>
            <Link to={`/Accueil/${accueil.id}`}>
            <img src={accueil.imageUrl} alt={accueil.name}/>
            <p>{accueil.name}</p>
            </Link>
        </div>
    )
}

export default StarWarsCard;