import Inbox from "@/components/inbox";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="container h-4/5 border border-grey-300 rounded-l shadow-md p-0 flex flex-row">
      <Sidebar />
      <Inbox />
    </div>
  );
}
