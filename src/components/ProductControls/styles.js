import styled from '@emotion/styled'

export const QButton = styled.button`
  padding: 10px 15px;
  background: orange;
  color: #ffffff;
  border-radius: 7px;
  // box-shadow: 0 5px #119e9d;
  border: none;
  cursor: pointer;
  display: inline-block;
  margin-right: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  // transition: all 0.3s;

  svg {
    vertical-align: middle;
    font-size: 1.5rem;
  }

  &.add-order {
    width: 12rem;
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }
`
export const Quantity = styled.span`
  font-size: 1rem;
  color: green;
  font-weight: 700;
  margin-right: 5px;
`
