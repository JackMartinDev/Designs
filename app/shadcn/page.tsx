import Inbox from "@/components/inbox";
import Mail from "@/components/mail";
import Sidebar from "@/components/sidebar";

const ShadCn = () => {
  return (
    <div className="border border-gray-300 rounded-xl shadow-md p-0 flex flex-row h-[85vh]">
      <Sidebar />
      <Inbox />
      <Mail />
    </div>
  );
};

export default ShadCn;
