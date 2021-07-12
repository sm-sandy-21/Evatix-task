import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import swal from 'sweetalert';

export default function Userinfo() {

      const  history = useHistory()
      const [user, setusers] = useState([]);
console.log(user)
      useEffect(() => {
            loadUsers()
            
      }, [])

      const loadUsers = async() =>{
             const result = await axios.get("http://localhost:3000/users")
         
               let res = result.data

            const getEmail =JSON.parse(localStorage.getItem("user-info"))
            const found = res.find(({email}) => email === getEmail.email)
            setusers(found)


      }
      const deleteUser = async id =>{
            swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover Account",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                      axios.delete(`http://localhost:3000/users/${id}`)
                      localStorage.removeItem("user-info")
                      history.push("/")
                    swal("Poof! Your Account has been deleted!", {
                      icon: "success",
                    });
                  } else {
                    swal("Your Account is safe!");
                  }
                });
           
            loadUsers()
      }

      return (
            <div>
            <table className="table">
              <thead className="thead">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">profession</th>
                  <th scope="col">date Of Birth</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="tbody">                            
              <tr >                     
                              <td >{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.profession}</td>
                              <td>{user.dateOfBirth}</td>
                              <td>
                              <NavLink to={`/user/edit/${user.id}`} className="btn btn-success" >Edit</NavLink>
                              <button onClick = {() => deleteUser(user.id)} className="btn btn-danger">Delete Account</button>
                              </td>
                        </tr>      
              </tbody>
            </table>
          </div>
      )
}

