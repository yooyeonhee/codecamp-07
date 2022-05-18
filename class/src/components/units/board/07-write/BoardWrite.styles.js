import styled from '@emotion/styled'

export const WriterInput = styled.input`
    background-color: yellow;
`

export const SubmitButton = styled.button`
    background-color: ${(props)=>props.isActive ? "yellow" : "default"};
`