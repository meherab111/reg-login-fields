const Registration = () => {

    const inputFields = "w-1/2 bg-white text-black rounded-lg text-lg p-2";

  return (
    <form>
      <div
        className={
          "container mx-auto h-[100vh] w-full flex flex-col justify-center items-center gap-5"
        }
      >
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full Name"
          className={inputFields}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={inputFields}
        />
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Username"
          className={inputFields}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={inputFields}
        />
        <div className={"flex"}>
          <p className="text-2xl text-white">Already Signed Up?<a href="#" className={'underline text-yellow-300 pl-2'}>Login</a></p>
        </div>
      </div>
    </form>
  );
};

export default Registration;
