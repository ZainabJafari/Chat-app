import MessageContainer from "../../components/Messages/MessageContainer";
import Sidebar from "../../components/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;