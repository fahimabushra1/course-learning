import useAuth from "../../hooks/useAuth";


const GoogleLogin = () => {
    const {googleLogin} = useAuth();

    const handleGoogleLogin =()=>{
        googleLogin()
    }
    return (
      <button onClick={handleGoogleLogin} className="btn w-full bg-[#22d3ee]">Google</button>
    );
};

export default GoogleLogin;