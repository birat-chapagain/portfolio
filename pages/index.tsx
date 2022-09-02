import Navbar from "@components/Navbar";
import ProfilePanel from "@components/Profile";
import Projects from "@components/Profile/Projects";
import Social from "@components/Profile/Social";
import WhatIDo from "@components/WhatIDo";
import { NextPage } from "next";
import React from "react";

const HomePage: NextPage = () => {
	return (
		<>
			<Navbar />
			<div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-0">
				<div className="basis-2/5 w-full">
					<div className="flex flex-col">
						<ProfilePanel />
						<Social />
						<Projects />
					</div>
				</div>

				<div className="basis-3/5">
					<WhatIDo />
				</div>
			</div>
		</>
	);
};

export default HomePage;
