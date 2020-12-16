import * as React from "react";
import styled from 'styled-components'

const center = styled.h1`
    alignItems: "center";
`

const Content: React.FC<any> = props => {
    return (
    <div>
    <h1>Main Content Component</h1><br></br>
    <div style ={{display: 'flex', justifyContent: 'space-between', alignItems:'center', height: '50vh'}}>
        <h1>Check box value is: {props.filters ? "SELECTED" : "NOT SELECTED"}</h1>
    </div>
    </div>)
}

export default Content;