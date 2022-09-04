import Contact from "@components/Contact";
import Navbar from "@components/Navbar";
import ProfilePanel from "@components/Profile";
import Social from "@components/Profile/Social";
import Stats from "@components/Profile/Stats";
import ProjectSection from "@components/Project";
import FadeInWhenVisible from "@components/shared/FadeWhenVisible";
import Footer from "@components/shared/Footer";
import WhatIDo from "@components/WhatIDo";
import WorkExperience from "@components/WorkExperience";
import { NextPage } from "next";
import { information } from "../config";

const HomePage: NextPage = () => {
	return (
		<>
			<Navbar />
			<div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-0">
				<div className="basis-2/5 w-full">
					<div className="flex flex-col my-8">
						<ProfilePanel />
						<Social />
						<Stats />
					</div>
				</div>

				<div className="basis-3/5 my-8">
					<WhatIDo />
				</div>
			</div>
			<section id="projects">
				<FadeInWhenVisible>
					<div className="my-16">
						<ProjectSection />
					</div>
				</FadeInWhenVisible>
			</section>
			{information.workExperince.length > 0 && (
				<section id="workexperience">
					<FadeInWhenVisible>
						<WorkExperience />
					</FadeInWhenVisible>
				</section>
			)}
			<section id="contacts">
				<FadeInWhenVisible>
					<Contact />
				</FadeInWhenVisible>
			</section>
			<FadeInWhenVisible>
				<Footer />
			</FadeInWhenVisible>
		</>
	);
};

export default HomePage;
