import "../components/Shopping.css";
import { useState } from "react";

function Shopping() {
	const [count, setCount] = useState(0);
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
						<button onClick={() => setCount(count + 1)}>
							Ajouter au panier
						</button>{" "}
						{count}
					</article>
				</div>

				<div>
					<h3>Le vrac</h3>
					<article>
						<img src="" alt="" />
						<p></p>
					</article>
				</div>
			</section>

			<h3>PROMO DU MOMENT</h3>

			<section>
				<div>
					<article id="promo">
						<img src="/boutique.PNG" alt="" />
						<p>Un week-end de 72 jours en amoureux dans la station...</p>
					</article>
				</div>
			</section>
		</section>
	);
}

export default Shopping;
