import * as React from "react"

const Checkbox = (props: any) => {
    const { filters } = props

    return (
        <form>
            Select Check Box :: <input type="checkbox" value={props.disableInputIsChecked} onChange={props.handleCheckboxClick} />
        </form>
    )
}

export default Checkbox