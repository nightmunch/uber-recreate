import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<div>
				<Navbar />
				<div className="flex flex-col">
					<Hero />
					<div className="bg-secondary">
						<div className="flex flex-col p-10 gap-10 text-secondary-content max-w-7xl mx-auto">
							<h1 className="font-bold text-3xl sm:text-4xl">
								Focused on safety, wherever you go
							</h1>
							<div className="flex flex-col sm:flex-row gap-[4rem] justify-around">
								<div className="flex flex-col basis-1/2 gap-3">
									<img
										src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_504,h_336/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png"
										alt="Our commitment to your safety"
										role="presentation"
										aria-hidden="true"
										className="w-auto"
									/>
									<h2 className="text-xl sm:text-2xl font-semibold text-left">
										Our commitment to your safety
									</h2>
									<p className="text-md sm:text-lg">
										With every safety feature and every standard in our
										Community Guidelines, we're committed to helping to create a
										safe environment for our users.
									</p>
								</div>
								<div className="flex flex-col basis-1/2 gap-3">
									<img
										src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_504,h_336/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png"
										alt="Overhead view of cars driving in a city"
										role="presentation"
										aria-hidden="true"
									/>
									<h2 className="text-xl sm:text-2xl font-semibold text-left">
										Setting 10,000+ cities in motion
									</h2>
									<p className="text-md sm:text-lg">
										The app is available in thousands of cities worldwide, so
										you can request a ride even when you're far from home.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default App;
