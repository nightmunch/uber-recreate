import { useState } from "react";
import { BiSignal4 } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";
import { TbToolsKitchen2 } from "react-icons/tb";

const Hero = () => {
	const [heroSelection, setHeroSelection] = useState("drive");
	const heroContents = [
		{
			selection: "drive",
			url: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1195,h_691/v1653688465/assets/29/74ec2f-a727-47e1-9695-c78f8dadee5f/original/DotCom_Update_Earner_bg2x.jpg",
			title: "Get in the driver's seat and get paid",
			description:
				"Drive on the platform with the largest network of active riders.",
			button: "Sign up to drive",
			short: "Learn more about driving and delivering",
		},
		{
			selection: "eat",
			url: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1198,h_667/v1613521576/assets/9d/2ff1e0-a207-425a-a1b8-cf40c95d6567/original/Eats_Home_bg_desktop2x.png",
			title: "Discover delicious eats",
			description: "Order delivery from restaurants you love.",
			button: "Order now",
			short: "Own a restaurant? Partner with Uber Eats",
		},
		{
			selection: "ride",
			url: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1198,h_708/v1653688612/assets/4e/98a67b-fa75-455d-b932-2d3ba478a4ed/original/DotCom_Update_Rider_bg2x.jpg",
			title: "Get in the driver's seat and get paid",
			button: "Request now",
		},
	];

	return (
		<div
			className="hero min-h-[75vh]"
			style={{
				backgroundImage: `url(${
					heroContents.find((content) => content.selection == heroSelection).url
				})`,
			}}
		>
			<div className="hero-overlay bg-opacity-40"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="card sm:w-[40rem] sm:max-w-screen bg-secondary shadow-xl p-5 sm:p-6 w-full sm:mr-[36rem]">
					<div className="tabs flex-nowrap sm:flex-wrap">
						<a
							className="tab h-auto tab-lg text-base-100 font-semibold text-xl tab-bordered basis-1/3 pb-6 tab-active"
							onClick={() => setHeroSelection("drive")}
						>
							<div className="flex flex-col items-center gap-2">
								<BiSignal4 className="text-4xl sm:text-5xl" />
								<span>Drive or Deliver</span>
							</div>
						</a>
						<a
							className="tab h-auto tab-lg text-base-100 font-semibold tab-bordered text-xl basis-1/3 pb-6"
							onClick={() => setHeroSelection("eat")}
						>
							<div className="flex flex-col items-center gap-2">
								<TbToolsKitchen2 className="text-3xl sm:text-4xl" />
								<span>Eat</span>
							</div>
						</a>
						<a
							className="tab h-auto tab-lg text-base-100 font-semibold tab-bordered text-xl basis-1/3 pb-6"
							onClick={() => setHeroSelection("ride")}
						>
							<div className="flex flex-col items-center gap-2">
								<AiOutlineCar className="text-3xl sm:text-4xl" />
								<span>Ride</span>
							</div>
						</a>
					</div>
					<div className="card-body text-left gap-5 sm:gap-8">
						<h2 className="card-title text-base-100 text-4xl sm:text-6xl font-bold">
							{
								heroContents.find(
									(content) => content.selection == heroSelection
								).title
							}
						</h2>
						{heroContents.find((content) => content.selection == heroSelection)
							.description && (
							<p className="text-base-100">
								{
									heroContents.find(
										(content) => content.selection == heroSelection
									).description
								}
							</p>
						)}
						<div className="card-actions justify-start">
							<button className="btn btn-primary">
								{
									heroContents.find(
										(content) => content.selection == heroSelection
									).button
								}
							</button>
						</div>
						{heroContents.find((content) => content.selection == heroSelection)
							.description && (
							<p className="text-base-100 underline underline-offset-[8px]">
								{
									heroContents.find(
										(content) => content.selection == heroSelection
									).short
								}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
