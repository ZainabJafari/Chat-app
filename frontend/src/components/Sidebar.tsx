import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LougoutButton from "./LougoutButton";

const Sidebar = () => {
  return (
    <div className="p-10 flex flex-col border border-blue-900 rounded-l-sm">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LougoutButton />
    </div>
  );
};

export default Sidebar;
