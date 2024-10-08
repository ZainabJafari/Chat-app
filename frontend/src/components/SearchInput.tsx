import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversation } = useGetConversations();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const searchedConversation = conversation.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (searchedConversation) {
			setSelectedConversation(searchedConversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
	return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full p-3'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type='submit' className='btn btn-circle text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;
