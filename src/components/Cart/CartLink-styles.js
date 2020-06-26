import {css} from '@emotion/core'

export const cartLinkStyles = css`
  background: linear-gradient(hsla(0, 0%, 100%, 0), #fff 20%);
  bottom: 0;
  left: 0;
  padding-bottom: 5%;
  position: fixed;
  width: 100%;

  a {
    background-color: orange;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    height: 56px;
    letter-spacing: 0.5px;
    padding: 16px 24px;
    text-transform: uppercase;

    text-decoration: none;
    display: block;
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
`
