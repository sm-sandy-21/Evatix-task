import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';

export default function Edituser() {
      const{id} = useParams()
    
      const his = useHistory()
      const [user, setuser] = useState({
        name:"",
        profession:"",
        dateOfBirth:""

      });
      const onInputeChange = e => {
            setuser({...user,[e.target.name] : e.target.value})
      }
      const SubmitHandler = async e =>{
          e.preventDefault()
         await axios.put(`http://localhost:3000/users/${id}`,user)
         his.push("/dashboard")
      }
      
      useEffect(() => {
            loadUsers()
            
      }, [])
      const loadUsers = async() =>{
            const result = await axios.get(`http://localhost:3000/users/${id}`)
            setuser(result.data)
         
      }

      return (
        <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                 Update Information
                </h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={SubmitHandler}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your name"
                        name="name"
                        value={user.name}
                        onChange={ e => onInputeChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        Profession <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your profession"
                        name="profession"
                        value={user.profession}
                        onChange={ e => onInputeChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        Date of birth <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your date-of-birth(dd/mm/yyyy)"
                        name="dateOfBirth"
                        value={user.dateOfBirth}
                        onChange={ e => onInputeChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">
                       Update Your Information
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the{" "}
                    <a className="underline" href="#0">
                      terms & conditions
                    </a>
                    , and our{" "}
                    <a className="underline" href="#0">
                      privacy policy
                    </a>
                    .
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div
                    className="border-t border-gray-300 flex-grow mr-3"
                    aria-hidden="true"
                  ></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div
                    className="border-t border-gray-300 flex-grow ml-3"
                    aria-hidden="true"
                  ></div>
                </div>
               
              </div>
            </div>
          </div>
        </section>
      </main>
      )
}
