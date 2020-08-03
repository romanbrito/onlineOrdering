import styled from '@emotion/styled'

export const Cards = styled.ul`
  max-width: 700px;
  margin: 0 auto;

  list-style: none;

  a {
    display: block;
    color: hsl(0, 0%, 5%);
    text-decoration: none;
    background: white;
    border: 1px transparent;
    transition: all 0.2s;
  }
  a:focus,
  a:hover {
    margin: -5px 5px 5px -5px;
    box-shadow: 5px 5px 0px 0px hsla(0, 0%, 70%, 0.8);
  }

  .hide ~ a {
    display: none;
  }

  h2 {
    text-transform: capitalize;
    background: green;
    color: #ffffff;
    padding: 1rem;
    cursor: pointer;
    user-select: none;
  }
`
