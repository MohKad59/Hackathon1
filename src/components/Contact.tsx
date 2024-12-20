import { useState } from "react";
import "../components/Contact.css";

function Contact() {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [planète, setPlanète] = useState("");
	const [espèce, setEspèce] = useState("");
	const [spacemail, setSpacemail] = useState("");
	const [sujet, setSujet] = useState("");

	return (
		<div id="contact-container">
			<div className="top-section">
				{/* <article className="avatar"> */}
				<img
					src="/public/A creative light art piece featuring a Jedi Princess at a computer in a soft, dreamy atmosphere with hazy, soft light, artistic lighting, and abstract patterns.png"
					alt="Portrait"
					className="avatar"
				/>
				{/* </article>
				<img src="/envelope-open-regular-24.png" alt="letter-icon" />
				<img src="/discord-logo-24.png " alt="discord-icon" /> */}
			</div>
			<h2>Formulaire à Potins :</h2>
			<section className="bottom-section">
				<div className="Formulaire">
					<p>Firstname : {firstname}</p>
					<p>Lastname : {lastname}</p>

					<form>
						<label htmlFor="firstname">
							Firstname:
							<input
								type="text"
								name="firstname"
								onChange={(event) => setFirstname(event.target.value)}
							/>
						</label>
						<br />
						<label htmlFor="lastname">
							Lastname
							<input
								type="text"
								name="lastname"
								onChange={(event) => setLastname(event.target.value)}
							/>
						</label>
						<br />
						<label htmlFor="planète">
							Planète:
							<input
								type="text"
								name="planète"
								onChange={(event) => setPlanète(event.target.value)}
							/>
						</label>
						<br />
						<label htmlFor="espèce">
							Espèce:
							<input
								type="text"
								name="espèce"
								onChange={(event) => setEspèce(event.target.value)}
							/>
						</label>
						<br />
						<label htmlFor="spacemail">
							Spacemail:
							<input
								type="text"
								name="spacemail"
								onChange={(event) => setSpacemail(event.target.value)}
							/>
						</label>
						<br />
						<label htmlFor="sujet">
							Sujet:
							<textarea
								name="sujet"
								onChange={(event) => setSujet(event.target.value)}
								rows="4" /* Le nombre de lignes visibles */
								cols="50" /* Le nombre de colonnes visibles */
							/>
						</label>
						<br />
					</form>
				</div>
			</section>
		</div>
	);
}

export default Contact;
