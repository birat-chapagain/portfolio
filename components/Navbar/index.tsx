import Logo from "@components/shared/Logo";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div className="flex flex-row justify-between items-center p-2 sticky top-0 w-full">
			<Logo />
			<div className="flex flex-row space-x-4">
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
			</div>
			<button className="btn btn-primary">Let&apos;s chat</button>
		</div>
	);
};

export default Navbar;
