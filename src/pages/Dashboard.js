import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../partials/Header";
import Userinfo from "./User/Userinfo";


export default function Dashboard() {
  const [user, setUser] = useState();
  const his = useHistory();
  useEffect(() => {
    let storge = localStorage.getItem("user-info");
    setUser(storge);
  }, []);

  const logout = () => {
    localStorage.removeItem("user-info");
    his.push("/");
  };

  return (
    <div>
      {user ? (
        <>
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <div className="Logout" onClick={logout}>
                  Logout
                </div>
              </li>
            </ul>
          </nav>
          <Userinfo></Userinfo>
        </>
      ) : (
        <>
          <Header></Header>
          <main className="flex-grow">
            <section className="bg-gradient-to-b from-gray-100 to-white">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                  {/* Page header */}
                  <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                    <h1 className="h1">You r not Loged In</h1>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  );
}
