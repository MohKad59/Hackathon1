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
				<article className="avatar">
					<img
						src="/public/A creative light art piece featuring a Jedi Princess at a computer in a soft, dreamy atmosphere with hazy, soft light, artistic lighting, and abstract patterns.png"
						alt="Portrait-Princesse"
					/>
				</article>
				<img src="/envelope-open-regular-24.png" alt="letter-icon" />
				<img src="/discord-logo-24.png " alt="discord-icon" />
			</div>

			<div className="Formulaire">
				<h2>Références Galactique</h2>
				<p>firstname : {firstname}</p>
				<p>lastname : {lastname}</p>

				<form>
					<label htmlFor="firstname">
						firstname:
						<input
							type="text"
							name="firstname"
							onChange={(event) => setFirstname(event.target.value)}
						/>
					</label>
					<br />
					<label htmlFor="lastname">
						lastname
						<input
							type="text"
							name="lastname"
							onChange={(event) => setLastname(event.target.value)}
						/>
					</label>
					<br />
					<label htmlFor="planète">
						planète:
						<input
							type="text"
							name="planète"
							onChange={(event) => setPlanète(event.target.value)}
						/>
					</label>
					<br />
					<label htmlFor="espèce">
						espèce:
						<input
							type="text"
							name="espèce"
							onChange={(event) => setEspèce(event.target.value)}
						/>
					</label>
					<br />
					<label htmlFor="spacemail">
						spacemail:
						<input
							type="text"
							name="spacemail"
							onChange={(event) => setSpacemail(event.target.value)}
						/>
					</label>
					<br />
					<label htmlFor="sujet">
						sujet:
						<input
							type="text"
							name="sujet"
							onChange={(event) => setSujet(event.target.value)}
						/>
					</label>
					<br />
				</form>
			</div>
		</div>
	);
}

export default Contact;
