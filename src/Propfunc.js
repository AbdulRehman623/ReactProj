export default function Propfunc(props) {
    return (
        <div style={{ backgroundColor: "skyblue", margin: 10 }}>
            <h1>Name : {props.name}</h1>
            <h2>email : {props.email}</h2>
            <h3>Address : {props.other.address}</h3>
        </div>
    )
}