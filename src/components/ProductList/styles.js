import styled from '@emotion/styled'

export const Cards = styled.ul`
  max-width: 700px;
  margin: 0 auto;

  @supports (grid-area: auto) {
    display: grid;
    grid-template-areas:
      'starters'
      'signature_cheesesteaks'
      'build_your_own'
      'for_the_kiddos';

    .starters {
      grid-area: starters;
    }
    .signature_cheesesteaks {
      grid-area: signature_cheesesteaks;
    }
    .build_your_own {
      grid-area: build_your_own;
    }
    .for_the_kiddos {
      grid-area: for_the_kiddos;
    }
  }

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
