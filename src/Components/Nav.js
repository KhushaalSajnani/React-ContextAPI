import {AuthContextV2} from "../Store/auth-context-v2";

export const Nav = () => {
    const style = {
        height:'10vh',
        width:'100vw',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    };
    return(
        <AuthContextV2.Consumer>
            {(context)=>{
                return(
                    <div style={style}>
                        <button disabled={!context.isUserLoggedIn} onClick={context.onLogout}>LOGOUT</button>
                    </div>
                )
            }}
        </AuthContextV2.Consumer>

    );
}