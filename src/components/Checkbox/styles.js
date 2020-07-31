import {css} from '@emotion/core'

export const checkStyles = css`
  display: inline-block;
  margin-right: 5px;

  label {
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.9);
    border: 2px solid rgba(139, 139, 139, 0.3);
    color: #adadad;
    border-radius: 25px;
    white-space: nowrap;
    margin: 3px 0px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: all 0.2s;

    padding: 8px 12px;
    cursor: pointer;

    &:before {
      display: inline-block;
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      font-weight: 900;
      font-size: 12px;
      padding: 2px 6px 2px 2px;
      content: '+';
      transition: transform 0.3s ease-in-out;
    }
  }

  input[type='checkbox']:checked + label::before {
    content: '✓';
    transform: rotate(-360deg);
    transition: transform 0.3s ease-in-out;
  }

  input[type='checkbox']:checked + label {
    border: 2px solid #1bdbf8;
    background-color: #12bbd4;
    color: #fff;
    transition: all 0.2s;
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
  }
`
