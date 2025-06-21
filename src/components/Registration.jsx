import { useState } from "react";

const Registration = () => {

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    userName: "",
    password: "",
  })

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setUserInfo((prev) => ({...prev, [name]:value}))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(userInfo)
    setUserInfo({
    fullName: "",
    email: "",
    userName: "",
    password: "",
  })
  }

  const inputFields = "w-full bg-white text-black rounded-lg text-lg p-2";

  return (
    <div
      className={
        "container mx-auto h-[100vh] w-full flex justify-center items-center"
      }
    >
      <form onSubmit={handleFormSubmit}>
        <div className={"bg-amber-400 flex p-5 rounded-lg gap-5"}>
          <div className={"w-1/2 flex flex-col gap-4 items-center"}>
            <h1 className={"text-3xl text-purple-950 my-5"}>Registration Form</h1>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              className={inputFields}
              required
              value={userInfo.fullName}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className={inputFields}
              required
              value={userInfo.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
              className={inputFields}
              required
              value={userInfo.userName}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className={inputFields}
              required
              value={userInfo.password}
              onChange={handleInputChange}
            />

            <button type="submit" className={'px-5 py-3 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-400'}>Sing Up</button>

            <div>
              <p className="text-2xl text-purple-950">
                Already Signed Up?
                <a href="#" className={"underline text-blue-600 pl-2 hover:text-blue-400"}>
                  Login
                </a>
              </p>
            </div>
          </div>
          <div>
            <img
              src="../public/images/registration/registration.jpg"
              alt="reg image"
              className={"w-full object-cover h-[400px] rounded-lg scale-x-[-1]"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
