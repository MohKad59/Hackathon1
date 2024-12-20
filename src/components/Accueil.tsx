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
    const winduCharacters = starWarsCharacters.filter(character =>
        character.name === "Mace Windu");
    const ackbarCharacters = starWarsCharacters.filter(character =>
        character.name === "Ackbar");
    const jarjarCharacters = starWarsCharacters.filter(character =>
        character.name === "Jar Jar Binks");

        const titles1 = ["Incroyable !", "Vous n'en croirez pas vos yeux !", "Le saviez-vous ?", "Ne manquez pas les dernières nouvelles !"];
        let titleIndex = 0;
        const titleElement1 = document.getElementById('dynamicTitle1');
        
        setInterval(() => {
            // Appliquer un effet de fondu en sortie
            titleElement1.style.opacity = 0;
        
            // Attendre que l'animation de fondu soit terminée
            setTimeout(() => {
                // Changer le texte du titre
                titleElement1.textContent = titles1[titleIndex];
        
                // Appliquer un effet de fondu en entrée
                titleElement1.style.opacity = 1;
        
                // Mettre à jour l'index pour le prochain titre
                titleIndex = (titleIndex + 1) % titles1.length; // Revenir au début quand on arrive à la fin du tableau
            }, 1000); // Attendre 3 seconde avant de changer le texte (pour correspondre à l'animation de fondu)
        }, 3000); // Change toutes les 6 secondes

        const titles2 = ["Ils veulent trouver l'amour...", "Vos nouveaux prétendants !"];
        let titleIndex2 = 0;
        const titleElement2 = document.getElementById('dynamicTitle2');
        
        setInterval(() => {
            // Appliquer un effet de fondu en sortie
            titleElement2.style.opacity = 0;
        
            // Attendre que l'animation de fondu soit terminée
            setTimeout(() => {
                // Changer le texte du titre
                titleElement2.textContent = titles2[titleIndex2];
        
                // Appliquer un effet de fondu en entrée
                titleElement2.style.opacity = 1;
        
                // Mettre à jour l'index pour le prochain titre
                titleIndex2 = (titleIndex2 + 1) % titles2.length; // Revenir au début quand on arrive à la fin du tableau
            }, 1000); // Attendre 3 seconde avant de changer le texte (pour correspondre à l'animation de fondu)
        }, 3000); // Change toutes les 6 secondes
        


    return (
        <section id="accueilContainer">
            <section className="firstSection">
                <div>
                    <h3>"Votre coeur a besoin d'une galaxie..."</h3>
                    <h4>Potins et Popotins !</h4>
                    <p>Venez découvrir nos prétendants, nos rumeurs insolites et notre shopping !</p>
                </div>
                <img src="/stormtrooper2.png" alt="Stormtrooper"></img>
            </section>
            <h2 id="dynamicTitle1">Insolite !</h2>
            <section className="secondSection">
                <div className="r2d2">
                    {r2d2Characters && r2d2Characters.map((starWarsCharacter) => {
                        return <StarWarsCard accueil={starWarsCharacter} />
                    })}
                    <div className="r2d2bubble"><p>"Bip bip, Bop bip bup bip bip."</p></div>
                </div>
                <div className="r2d2">
                    {chewbaccaCharacters && chewbaccaCharacters.map((starWarsCharacter) => {
                        return <StarWarsCard accueil={starWarsCharacter} />
                    })}
                    <div className="r2d2bubble"><p>Chewbacca serait apparemment souvent confondu avec le chien de Georges Lucas</p></div>
                </div>
                <div className="r2d2">
                    {palpatineCharacters && palpatineCharacters.map((starWarsCharacter) => {
                        return <StarWarsCard accueil={starWarsCharacter} />
                    })}
                    <div className="r2d2bubble">
                        <p>Le saviez-vous ?</p>
                        <p>Le chiffre préféré de Palpatine est le 66 !</p>
                    </div>
                </div>
            </section>
            <h2 className="titleShop">Visitez notre Shop !</h2>
            <section className="thirdSection">
                <div>
                    <img src="/sabrelaser.png" alt="Ordre Jedi"></img>
                </div>
                <div>
                    <h3>Allez voir notre boutique !</h3>
                    <p>Vaisseaux, blasters et tenues extravagantes pour passer une soirée piquante avec votre moitié !</p>
                    <Link to="/Shopping">
                    <button type="button">Shopping</button>
                    </Link>
                </div>
            </section>
                <h2 id="dynamicTitle2">Des coeurs à prendre...</h2>
            <section className="fourthSection">
                <div className="r2d2">
                    {winduCharacters && winduCharacters.map((starWarsCharacter) => {
                        return <StarWarsCard accueil={starWarsCharacter} />
                    })}
                    <div className="r2d2bubble">
                        <p>❤️ Mace Windu ❤️</p>
                        <p>Charme : 9/10</p>
                        <p>Cheveux : 0/150000</p>
                        <p>Mains : 1/2</p>
                    </div>
                </div>
                <div className="r2d2">
                    {ackbarCharacters && ackbarCharacters.map((starWarsCharacter) => {
                        return <StarWarsCard accueil={starWarsCharacter} />
                    })}
                    <div className="r2d2bubble">
                        <p>❤️ Amiral Ackbar ❤️</p>
                        <p>It's a traaap !!!</p>
                    </div>
                </div>
                <div className="r2d2">
                    {jarjarCharacters && jarjarCharacters.map((starWarsCharacter) => {
                        return <StarWarsCard accueil={starWarsCharacter} />
                    })}
                    <div className="r2d2bubble">
                        <p>❤️ Jar Jar Binks ❤️</p>
                        <p>"Myssa aimer toutes les espèces, Myssa pas difficile.</p>
                        <p>"Si Tissa être intéressé, Tissa demander à voir sénateur Gungan principal !"</p>
                    </div>
                </div>
            </section>
            <h2 className="titleShop">Contactez-nous !</h2>
            <section className="fifthSection">
                <div>
                    <h3>Envie de raconter des potins ?</h3>
                    <p>Contactez-nous pour ajouter votre profil ou raconter une anecdote insolte !</p>
                    <Link to="/Contact">
                    <button type="button">Contact</button>
                    </Link>
                </div>
                <div>
                    <img src="/mandalorian.png" alt="Ordre Jedi"></img>
                </div>
            </section>
        </section>
    );
}

export default Accueil;
