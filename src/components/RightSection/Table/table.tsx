import { FaArrowRight as FaSharp } from "react-icons/fa";
import person1 from "../../../assets/person1.jpg";

const users = [
  {
    id: "#C00456",
    name: "Patrick James",
    role: "User",
    status: "Professional",
  },
  {
    id: "#C00454",
    name: "Patrick James",
    role: "User",
    status: "Professional",
  },
  {
    id: "#C00453",
    name: "Patrick James",
    role: "User",
    status: "Professional",
  },
];

const AccountManagement = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full h-auto max-h-[500px] overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="font-medium text-sm sm:text-base">Account Management</p>
        <button className="flex gap-1 items-center text-[10px] sm:text-xs text-green-800">
          View More <FaSharp />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm">
          <thead className="text-gray-600 text-[10px] sm:text-xs bg-gray-100">
            <tr>
              <th className="text-left py-2 px-1">User ID</th>
              <th className="text-left py-2 px-1">Name of User</th>
              <th className="text-left py-2 px-1">User Status</th>
              <th className="text-left py-2 px-1">Status</th>
              <th className="text-left py-2 px-1">Admin Control</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="py-2 px-1 text-[11px] font-medium">{user.id}</td>
                <td className="py-2 px-1 flex items-center gap-2">
                  <img src={person1} alt="" className="w-5 h-5 rounded-full object-cover" />
                  <span className="text-[10px]">{user.name}</span>
                </td>
                <td className="py-2 px-1">
                  <span className="text-[10px] text-gray-800">{user.status}</span>
                </td>
                <td className="py-2 px-1">
                  <button className="py-1 px-2 bg-red-100 text-red-700 rounded text-[10px] hover:bg-red-200">
                    Deactivated
                  </button>
                </td>
                <td className="py-2 px-1">
                  <button className="py-1 px-2 bg-green-100 text-green-700 rounded text-[10px] hover:bg-green-200">
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountManagement;
