import React,{ Component } from 'react'
import GrandChildComponent from "./GrandChildComponent";


class ChildComponent extends Component{
    render() {
        return(
            <>
             <h2>ChildComponent</h2>
             <GrandChildComponent tech='Javascript' bgColor='red' />
             <GrandChildComponent tech='React.js' bgColor='green' />
             <GrandChildComponent tech='HTML' bgColor='blue' />
             <GrandChildComponent tech='CSS' bgColor='orange' />
             <GrandChildComponent tech='Bootstrap' bgColor='grey' />
             </>
        );
    }
}
export default ChildComponent

/*
Fragments <> </>
*/