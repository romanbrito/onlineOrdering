import {css} from '@emotion/core'

export const checkoutStyles = css`
  label {
    color: #8898aa;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  .cus-data {
    label {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 42px;
      padding: 10px 0;
    }
  }
  .field {
    padding: 7px 15px;
    background: #b9b9b966;
    font-weight: 400;
    color: #31325f;
    border: none;
    cursor: text;
  }
  button {
    margin-top: 1rem;
    display: block;
    width: 100%;
    height: 37px;
    background-color: #6772e5;
    border-radius: 2px;
    border-color: transparent;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
  }
  .card-element {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    background: #434348;

    .card,
    .expiration,
    .cvc {
      margin-bottom: 0.3rem;
      padding: 0.5rem;
    }
    .card {
      flex-grow: 3;
      min-width: 170px;
    }
    .expiration {
      flex-grow: 1;
    }
    .cvc {
      flex-grow: 1;
    }
  }

  h3 {
    margin-bottom: 0;
  }
`
export const cardStyles = {
  style: {
    base: {
      fontSize: '16px',
      color: '#fff',
      '::placeholder': {
        color: '#fff',
      },
    },
    invalid: {
      color: 'red',
    },
  },
}
