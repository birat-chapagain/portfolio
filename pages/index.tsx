import Navbar from "@components/Navbar";
import ProfilePanel from "@components/Profile";
import Projects from "@components/Profile/Projects";
import { NextPage } from "next";
import React from "react";

const HomePage: NextPage = () => {
	return (
		<>
			<Navbar />
			<div className="flex flex-col md:flex-row">
				<div className="basis-2/5 w-full">
					<div className="fixed flex flex-col">
						<ProfilePanel />
						<Projects />
					</div>
				</div>

				<div className="basis-3/5">
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
					<p>Right Panel</p>
				</div>
			</div>
		</>
	);
};

export default HomePage;
