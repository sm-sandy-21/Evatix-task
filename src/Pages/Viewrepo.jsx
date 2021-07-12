import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

export default function Viewrepo() {

      const history =useHistory()

      const{login,name}=useParams()

   console.log(login,name)

      const [repo, setrepo] = useState()

       const [NoOfCommite, setNoOfCommite] = useState()

      console.log("userRepo",repo)
            useEffect(() => {
                  loadRepo()
            }, [])
      const loadRepo = () => {
            axios.get(`https://api.github.com/repos/${login}/${name}`).then( res => {
                  setrepo(res.data)
            }).catch(error =>{
                  console.log(error.message)
            })

            axios.get(`https://api.github.com/repos/${login}/${name}/commits`).then( res => {
                   
                 const result = (res.data)
              
                  setNoOfCommite(result.length)
            })


      }


      const cloneRepo = () => {
             <a href="https://github.com/{login}/${name}"></a>
      }
      return (
           <>
           {
                 repo != null ? 
                 <div className="ViewRepo">
                        <h1>Repo Name : {repo.name}</h1>                                          
                        <h2>default_branch : {repo.default_branch}</h2>
                        <div className="ContainerView">
                              <h2>Watch : {repo.watchers_count}</h2>
                              <h2>Forks : {repo.forks_count}</h2>
                              <h2>Stars : {repo.stargazers_count}</h2> 
                              <h2>Commites : {NoOfCommite}</h2> 
                        </div>
                        <button className="btn" onClick={ () => window.location.href = repo.clone_url }>Clone Repo</button>
                        <button className="btn back" onClick={() => history.push("/")}>Back</button>
                  </div>
           : 
           <h1>Loding....</h1>
           }
           </>
      )
}
