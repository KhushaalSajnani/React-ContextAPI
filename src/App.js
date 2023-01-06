import Login from "./Components/Login";
import {Nav} from "./Components/Nav";
import {Exists} from "./Components/Exists";
import {useContext} from "react";
import {AuthContextV2} from "./Store/auth-context-v2";


function App() {
  const context = useContext(AuthContextV2);
  return (
    <div>
            <Nav/>
            {context.isUserLoggedIn?<Exists/>:<Login/>}
    </div>
  );
}

export default App;
