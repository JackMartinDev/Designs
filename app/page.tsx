import Inbox from "@/components/inbox";
import Mail from "@/components/mail";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="container h-4/5 border border-gray-300 rounded-xl shadow-md p-0 flex flex-row">
      <Sidebar />
      <Inbox />
      <Mail />
    </div>
  );
}
