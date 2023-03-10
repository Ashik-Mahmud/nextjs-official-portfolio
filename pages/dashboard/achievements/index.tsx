import DashboardLayout from "@/components/layouts/DashboardLayout";
import Image from "next/image";
import Link from "next/link";
import { BiEditAlt, BiTrash } from "react-icons/bi";

type Props = {};

const AchievementsPage = (props: Props) => {
  return (
    <div>
      <div className="title font-amiri flex items-center justify-between">
        <h3 className="text-xl font-bold">Achievements Page Customize</h3>
        <Link
          className="p-2 px-5 bg-transparent border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-blue-50 transition-all"
          href={"/dashboard/achievements/add"}
        >
          Add Achievements
        </Link>
      </div>
      <div className="overflow-x-auto my-3 bg-white p-2">
        <table className="table w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 font-medium">SL No</th>
              <th className="p-3 font-medium"> image</th>
              <th className="p-3 font-medium"> title</th>
              <th className="p-3 font-medium"> Description</th>
              <th className="p-3 font-medium"> Links</th>
              <th className="p-3 font-medium"> Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b">
              <td className="p-2">1</td>
              <td className="p-2">
                <img
                  className="w-14 h-14 rounded object-cover border"
                  src="https://raw.githubusercontent.com/Ashik-Mahmud/nextjs-official-portfolio/main/preview.png"
                  alt="profile"
                />
              </td>
              <td className="p-2">Programming Hero Certificate</td>
              <td className="p-2">Achivements Description</td>
              <td className="p-2">
                <div className="flex flex-wrap gap-1">
                  <a
                    className="bg-gray-100  p-1 border rounded  text-xs "
                    href="https://programming-hero.com/"
                  >
                    Certificate
                  </a>
                </div>
              </td>
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <Link
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
                    href="/dashboard/achievements/edit"
                  >
                    <BiEditAlt />
                  </Link>
                  <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all">
                    <BiTrash />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
AchievementsPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default AchievementsPage;
