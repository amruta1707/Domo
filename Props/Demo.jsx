function Demo(props){
    return(
        <div style={{"textAlign":"left"}}>

           <h3>Employee salary:{props.userobj.salary}</h3>
           <h3>Employee age:{props.userobj.age}</h3>
           <h3>Employee destination:{props.userobj.destination}</h3>
        </div>
    )
}
export default Demo;