import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import StarWarsCard from "./StarWarsCard"
import "../components/Accueil.css"

function Accueil() {
    const [starWarsCharacters, setStarWarsCharacters] = useState([])
    useEffect(()=>{
    fetch( ' https://starwarsapi.remote-8.wilders.dev/api/characters/original?')
    . then(res => res.json())
    . then(res => setStarWarsCharacters(res))
    },[])

    const r2d2Characters = starWarsCharacters.filter(character =>
        character.name === "R2-D2");
    const chewbaccaCharacters = starWarsCharacters.filter(character =>
        character.name === "Chewbacca");
    const palpatineCharacters = starWarsCharacters.filter(character =>
        character.name === "Palpatine");

    return (
        <section id="accueilContainer">
            <section className="firstSection">
                <img src="/stormtrooper2.png" alt="Stormtrooper"></img>
            </section>
            <h2>Insolite !</h2>
            <section className="secondSection">
                <div>
                    {r2d2Characters && r2d2Characters.map((starWarsCharacter) => {
                        return <StarWarsCard accueil={starWarsCharacter} />
                    })}
                </div>
                <div>
                    {chewbaccaCharacters && chewbaccaCharacters.map((starWarsCharacter) => {
                        return <StarWarsCard accueil={starWarsCharacter} />
                    })}
                </div>
                <div>
                    {palpatineCharacters && palpatineCharacters.map((starWarsCharacter) => {
                        return <StarWarsCard accueil={starWarsCharacter} />
                    })}
                </div>
            </section>
                <h2>Visitez notre Shop !</h2>
            <section className="thirdSection">
                <div>
                    <img src="/ordrejedi.png" alt="Ordre Jedi"></img>
                </div>
                <div>
                    <p></p>
                    <Link to="/Shopping">
                    <button type="button">Shopping</button>
                    </Link>
                </div>
            </section>
                <h2>Des coeurs à prendre...</h2>
            <section className="fourthSection">
                <div>
                    <article>
                        <p>test</p>
                    </article>
                </div>
                <div>
                    <article>
                        <p>test</p>
                    </article>
                </div>
                <div>
                    <article>
                        <p>test</p>
                    </article>
                </div>
            </section>
            <section className="fifthSection">
                <h2>Test</h2>
            </section>
            <section className="sixthSection">
                <div>
                    <article>
                        <p>Visiteurs</p>
                    </article>
                </div>
                <div>
                    <article>
                        <p>Logo</p>
                    </article>
                </div>
                <div>
                    <article>
                        <p>Visiteurs</p>
                    </article>
                </div>
            </section>
        </section>
    );
}

export default Accueil;
