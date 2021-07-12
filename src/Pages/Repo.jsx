import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import avatar from '../Image/avatar.png'

export default function Repo() {
  const [user, setUser] = useState({
    findProfile: "",
    name: "",
    followers:"",
    following:"",
    location:"",
    img:avatar
  });

  const [repo, setrepo] = useState([null]);

  console.log("repo", repo);

  const FindRepo = async () => {

  const findbyLink = user.findProfile.includes("https://github.com/")
 
  if (findbyLink) {
    const userName = user.findProfile.slice(19) 

    await axios.get(`https://api.github.com/users/${userName}`).then(res => {
      console.log("info",res.data)
      setUser({
        name: res.data.login,
        followers:res.data.followers,
        following:res.data.following,
        location:res.data.location,
        img: res.data.avatar_url

      })
    }).catch(error => {
      alert("User Not Found")
    })



    await axios.get(`https://api.github.com/users/${userName}/repos`)
    .then((res) => {  
        setrepo(res.data);
       localStorage.setItem("userName", userName);
    }).catch(error => {
      console.log(error.message)
    })

  }else{

    await axios.get(`https://api.github.com/users/${user.findProfile}`).then(res => {
      console.log("info",res.data)
      setUser({
        name: res.data.login,
        followers:res.data.followers,
        following:res.data.following,
        location:res.data.location,
        img: res.data.avatar_url

      })
      }).catch(error => {
        alert("User Not Found")
    })





    await axios.get(`https://api.github.com/users/${user.findProfile}/repos`)
    .then((res) => {
        setrepo(res.data);
      localStorage.setItem("userName", user.findProfile);
    }).catch(error => {
      console.log(error.message)
    })
  }

  };
  useEffect(() => {
    forbackuserload();
  }, []);

  const forbackuserload = async () => {
    const name = localStorage.getItem("userName"); 
    if (name) {
      await axios.get(`https://api.github.com/users/${name}`).then(res => {
        console.log("info",res.data)
        setUser({
          name: res.data.login,
          followers:res.data.followers,
          following:res.data.following,
          location:res.data.location,
          img: res.data.avatar_url
  
        })
      })
      await axios
        .get(`https://api.github.com/users/${name}/repos`)
        .then((res) => {
          setrepo(res.data);
        })
    }
  };

  const { findProfile } = user;

  const keyPress = (e) => {
    if (e.key === "Enter") {
      FindRepo();
    }
  };

  if (repo == false) {
    return (
      <div className="Search">
        <h1>Find Github Profile by User-Name or github-Link</h1>
        <input
          type="text"
          value={findProfile}
          onChange={(e) => setUser({ ...user, findProfile: e.target.value })}
          onKeyPress={keyPress}
        />
        <button className="btnSearch" onClick={FindRepo}><i className="fas fa-search"></i></button>
      </div>
    );
  } else {
    return (
      <>
      <div className="Search">
      <h1>Find Github Profile by User-Name or github-Link</h1>
        <input
          type="text"
          value={findProfile}
          onChange={(e) => setUser({ ...user, findProfile: e.target.value })}
          onKeyPress={keyPress}
        />
        <button className="btnSearch" onClick={FindRepo}><i className="fas fa-search"></i></button>
        </div>
      <div className="body">
         <div className="profile">
             <img src={user.img} />
             <p>login Name</p>
              <h2>{user.name}</h2>
              <div>
                <h3>{user.location}</h3>
                <h3>Followers : {user.followers}</h3>
                <h3>Follow : {user.following}</h3>
              </div>
         </div>

         <div className="Repos">
           <h2 className="heading">Repository</h2>
            <div className="Container">
              {
                repo.map(item => {
                  return(
                  <div className="cards">
                   <NavLink to={`/view/${item.owner.login}/${item.name}`}><h2 key={item.id}>{item.name}</h2></NavLink> 
                   </div>
                  )
                })
              }
              
            </div>
         </div>
      </div>

      </>
    );
  }
}
