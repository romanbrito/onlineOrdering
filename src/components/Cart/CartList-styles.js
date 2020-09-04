import styled from '@emotion/styled'

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 2rem;

  .detail {
    width: 98%;
    white-space: nowrap;
    overflow: auto;
  }
`

export const Quantity = styled.span`
  font-size: 1rem;
  color: green;
  font-weight: 700;
  margin-right: 5px;
`
