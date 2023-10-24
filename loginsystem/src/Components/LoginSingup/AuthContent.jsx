import React from 'react'
import { request } from '../../axios';

export default class AuthContent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[]

        };
    };
    componentDidMount(){
        request(
            "GET",
            "/message",
            {}
        ).then((response) => {
            this.setState({data: response.data});
        })
    }

    render(){
        return (<div>
            {this.state.data&&this.state.data.map((line) =><p>{line}</p>)}
            
        </div>)
    };
}