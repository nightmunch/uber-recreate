import { createElement } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";

const Navbar = () => {
	const companyContents = [
		"About us",
		"Our offerings",
		"How Laksana works",
		"Global citizenship",
		"Explore",
	];

	const productContents = [
		{
			name: "Home",
			icon: BiHomeAlt,
		},
		{
			name: "Ride",
			icon: CgMenuGridO,
		},
		{
			name: "Drive",
			icon: AiOutlineCar,
		},
	];
	return (
		<div className="navbar bg-primary py-5 sm:px-10 px-5 max-w-7xl mx-auto">
			<div className="navbar-start">
				<a className="btn btn-ghost normal-case text-xl">LAKSANA</a>
				<ul className="menu menu-horizontal px-1 sm:inline-flex hidden">
					<li tabIndex={0}>
						<a className="font-bold">
							Company
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
							>
								<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
							</svg>
						</a>
						<ul className="p-2 bg-secondary text-secondary-content">
							{companyContents.map((content) => (
								<li>
									<a>{content}</a>
								</li>
							))}
						</ul>
					</li>
					<li>
						<a className="font-bold">Safety</a>
					</li>
					<li>
						<a className="font-bold">Help</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end sm:gap-1 gap-3">
				<ul className="menu menu-horizontal px-1 sm:flex-wrap flex-nowrap ">
					<li tabIndex={0}>
						<a className="font-bold sm:inline-flex hidden">
							<CgMenuGridO className="text-2xl" />
							Products
						</a>
						<ul className="p-2 bg-secondary text-secondary-content">
							{productContents.map((product) => (
								<li>
									<a>
										{createElement(product.icon, { className: "text-2xl" })}
										{product.name}
									</a>
								</li>
							))}
						</ul>
					</li>
					<li>
						<a className="font-bold">Log in</a>
					</li>
				</ul>
				<a className="btn btn-secondary rounded-full font-bold normal-case text-base">
					Sign up
				</a>
			</div>
		</div>
	);
};

export default Navbar;
