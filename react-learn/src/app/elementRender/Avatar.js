import { userInfo } from "os";

function Avator(props){
    return(
        <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
            )
}