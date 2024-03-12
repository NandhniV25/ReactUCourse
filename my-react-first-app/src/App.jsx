import { Component } from "react";

export default class NavBar extends Component
{
    render()
    {
        return <div><h1>Hello</h1><p class="highlight">Paragraph</p></div> //without div tag we cannot create multiple tag
    } //<React.Fragment> instead of <div> tag 
}