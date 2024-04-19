
import React,{ Component } from "react";

export default class Stateclass extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            data : "Check Name"
        }
    }

    newdata() 
    {
        this.setState({data:"abdul"});
    }

    render()
    {
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={() => this.newdata()}>Set Data</button>
            </div>
        )
    }

}



