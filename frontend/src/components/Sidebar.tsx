import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LougoutButton from "./LougoutButton";

const Sidebar = () => {
  return (
    <div className="p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LougoutButton />
    </div>
  );
};

export default Sidebar;
