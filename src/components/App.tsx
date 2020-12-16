import * as React from "react";
import Sidebar from "./Sidebar/index";
import Content from "./Content/index";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`

const App = () => {
    const [filters, setFilters] = React.useState(false)

    const [disableInputIsChecked, setDisableInputIsChecked] = React.useState(true);

    const handleCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!disableInputIsChecked) {
            setFilters(!disableInputIsChecked);
        }
        setDisableInputIsChecked(prevValue => !prevValue);
        setFilters(disableInputIsChecked);
    }

    return (<>
        <Wrapper>
            <Sidebar filters={filters}
                setFilters={setFilters}
                handleCheckboxClick={handleCheckboxClick}
                disableInputIsChecked={disableInputIsChecked} />,
            <Content filters={filters} />
        </Wrapper>
    </>
    )
}

export default App