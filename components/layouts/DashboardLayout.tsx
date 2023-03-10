import { useAppContext } from "@/context/AppContext";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { BiGridAlt } from "react-icons/bi";
import Cookies from "universal-cookie";
import ScreenLoading from "../ScreenLoading";
import Sidebar from "./Sidebar";
const cookies = new Cookies();

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const { currentUser, isLoading, setCurrentUser } = useAppContext();
  const router = useRouter();

  const [cookie, setCookies] = useCookies(["portfolio"]);

  useEffect(() => {
    if (!cookie?.portfolio) {
      router.push("/login");
    }
    return () => {};
  }, [cookie, router]);

  /* handle logout */
  const handleLogout = () => {
    cookies.remove("portfolio");
    router.push("/login");
    setCurrentUser(null);
  };

  if (isLoading) {
    return <ScreenLoading />;
  }
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Head>
      <div className="">
        {/* sidebar here */}
        <aside className="sidebar col-span-2 bg-[#ffffff3f] border rounded-r-[0rem] shadow backdrop-blur-md h-screen">
          <Sidebar />
        </aside>
        {/* main content here */}
        <main className="main-content p-2 mx-4">
          <div className="dashboard-header flex items-center justify-between p-4 py-3 bg-[#ffffff3f] border rounded-[0rem]  backdrop-blur-md sticky top-2 z-50">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 cursor-pointer">
                <BiGridAlt size={25} />{" "}
                <h1 className="text-xl font-bold">Dashboard</h1>
              </div>
              <Link
                href="/"
                target={"_blank"}
                className="bg-blue-50 text-blue-500 px-4 rounded py-1 font-amiri"
              >
                View Site
              </Link>
            </div>

            {/* quick access search bar */}
            <div>
              <input
                type="text"
                placeholder="Search"
                className="bg-[#ffffff3f] border rounded-md p-2 w-72"
              />
            </div>

            <div className="flex items-center gap-2 mr-4">
              <div className="flex items-center gap-2">
                <img
                  src={currentUser?.avatar?.url}
                  alt="profile"
                  className="w-8 h-8 rounded-full object-cover"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold">{currentUser?.name}</span>
                  <span className="text-xs text-gray-500">Admin</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="bg-red-100 text-red-500  px-2 py-1 rounded-md"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className=" bg-[#ffffff49] backdrop-blur-sm p-4 my-2  shadow-sm border border-gray-100 rounded">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
