import { useState } from "react";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(userInfo);
    setUserInfo({
    userName: "",
    password: "",
  })
  }


  const inputFields = "w-full bg-white text-black rounded-lg text-lg p-2";

  return (
    <section
      className={
        "container mx-auto h-[100vh] w-full flex justify-center items-center"
      }
    >
      <form onSubmit={handleFormSubmit}>
        <div
          className={
            "bg-amber-400 flex justify-center text-center p-5 rounded-lg gap-5"
          }
        >
          <div className={"w-1/2 flex flex-col gap-4 items-center"}>
            <h1 className={"text-3xl text-purple-950 my-5"}>Login Form</h1>
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

            <button
              type="submit"
              className={
                "px-5 py-3 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-400"
              }
            >
              Login
            </button>

            <div>
              <p className="text-2xl text-purple-950">
                Don't have an account?
                <a
                  href="#"
                  className={"underline text-blue-600 pl-2 hover:text-blue-400"}
                >
                  Register
                </a>
              </p>
            </div>
          </div>
          <div>
            <img
              src="../public/images/login/login.jpg"
              alt="login image"
              className={"w-full object-cover h-[400px] rounded-lg"}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
