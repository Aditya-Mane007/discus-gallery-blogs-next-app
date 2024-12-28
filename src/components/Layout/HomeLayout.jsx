import Sidebar from "@/components/Sidebar";

function HomeLayout({ children }) {
  return (
    <>
      <div className="w-screen h-screen max-w-[1440px] max-h-[100vh] flex mx-auto text-[#f0f0f0] homeLayout">
        <nav className="max-[768px]:w-[100%] max-lg:w-[40%] w-[30%] h-auto max-[1440px]:h-full bg-[#444444] p-8 nav">
          <Sidebar />
        </nav>
        <main className="max-[768px]:w-[100%] max-lg:w-[60%] w-[70%] h-full max-lg:p-0 bg-[#333333]  overflow-scroll main">
          {children}
        </main>
      </div>
    </>
  );
}

export default HomeLayout;
