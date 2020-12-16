import * as React from "react"
import styled from 'styled-components'
import Checkbox from '../Checkbox/index'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  height: 92vh;
  min-height: 640px;
  border: 5px solid #f1f1f5;
`
interface IItemProps {
  name: string
  icon: object | string
  link: string
}

const Menu: React.FC<any> = props => {
  const [filters, setFilters] = React.useState(props)

  return (
    <Wrapper>
      <h1>Side Bar Component</h1>
      <Checkbox filters={filters}
        setFilters={setFilters}
        handleInputChange={props.handleInputChange}
        handleCheckboxClick={props.handleCheckboxClick}
        disableInputIsChecked={props.disableInputIsChecked} />
    </Wrapper>
  )
}

export default Menu