import React ,{useRef}from "react";
import IdleTimer from "react-idle-timer";

function IdleTimerContainer(){
     const idelTimerRef= useRef(null)

     const onIdle = () =>{
        console.log('iam idle');
        localStorage.removeItem('login');
        window.location.reload();
     }
    return(
        <div>
            <IdleTimer ref ={idelTimerRef} timeout = {600 * 1000} onIdle = {onIdle}></IdleTimer>
        </div>

    )
}
export default IdleTimerContainer
