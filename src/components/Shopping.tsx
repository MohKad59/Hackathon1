import "../components/Shopping.css";
import { useState } from "react";

function Shopping() {
	const [count, setCount] = useState(0);
	const [article2, setArticle2] = useState(0);
	const [article3, setArticle3] = useState(0);
	return (
		<section>
			<section>
				<div id="shoppingContainer">

					<h1>Bienvenue dans la boutique</h1>
					<h2>Retrouvez toutes nos offres et promotions du moment</h2>
				</div>
			</section>

			<section id="article">
				<div>
					<h3>Les incontournables</h3>
					<article>
						<img src="/coeur1.jpeg" alt="" />
						<p>Le VaisCoeur</p>
						<button onClick={() => setCount(count + 1)}>
							Ajouter au panier
						</button>{" "}
						{count}
					</article>
				</div>

				<div>
					<h3>Les nouveautés</h3>
					<article>
						<img src="/coeur2.jpeg" alt="" />
						<p>Le parfum de l'espace</p>
						<button onClick={() => setArticle2(article2 + 1)}>
							Ajouter au panier
						</button>{" "}
						{article2}
					</article>
				</div>

				<div>
					<h3>Le vrac</h3>
					<article>
						<img src="/sabrelaser.jpg" alt="" />
						<p>Le sabre laser</p>
						<button onClick={() => setArticle3(article3 + 1)}>
						Ajouter au panier
						</button>{" "}
						{article3}
					</article>
					
				</div>
			</section>

			<h3>PROMO DU MOMENT</h3>

			<section>
				<div>
					<article id="promo">

						<div id="reservation">
						<img src="/boutique.PNG" alt="Magasin" />
						<button id="reserveButton">Réservez maintenant</button>
						</div>

						<p>Offrez-vous un voyage parmi les étoiles : un week-end romantique de 72 jours en station spatiale !
						Échappez à la routine terrestre et embarquez pour une aventure inoubliable dans l’immensité de l’espace. À bord de notre station spatiale spécialement aménagée pour les couples, vivez une escapade hors du commun, mêlant romantisme et exploration. <br />

						✨ Ce qui vous attend :

						Une vue imprenable sur la Terre et les constellations depuis nos suites panoramiques.
						Des dîners gastronomiques en apesanteur, préparés par des chefs étoilés.
						Un moment de bien-être galactique avec des massages en gravité zéro.
						Une promenade main dans la main en combinaison spatiale, sous la lumière des astres.
						Que vous souhaitiez célébrer un anniversaire, une demande en mariage, ou simplement vous offrir une parenthèse magique à deux, ce séjour unique fera briller vos cœurs autant que les étoiles. <br />

						📅 Dates disponibles : Réservez dès maintenant et soyez parmi les premiers à vivre cette expérience romantique hors du commun. <br />

						🌌 Plongez dans l'infini et l'amour. Votre évasion spatiale vous attend.

						Réservez votre week-end stellaire dès aujourd’hui !</p>
					</article>
				</div>
			</section>
		</section>
	);
}

export default Shopping;
