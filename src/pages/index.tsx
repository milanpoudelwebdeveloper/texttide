import ChatUserInfo from "@/components/Home/ChatUserInfo";
import MessagesList from "@/components/Home/MessagesList";
import ProfileInfo from "@/components/Home/ProfileInfo";
import UserMessages from "@/components/Home/UserMessages";

const Home = () => {
  return (
    <div className="w-screen flex">
      <div className="w-[25%] h-screen bg-secondary overflow-scroll">
        <ProfileInfo />
        <hr />
        <MessagesList />
      </div>
      <div className="w-[50%] h-screen bg-white flex flex-col items-center">
        <ChatUserInfo />
        <UserMessages />
      </div>
      <div className="w-[25%] h-screen bg-light px-8 py-16 overflow-scroll"></div>
    </div>
  );
};
export default Home;
