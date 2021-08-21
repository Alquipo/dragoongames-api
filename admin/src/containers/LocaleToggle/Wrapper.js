import styled from "styled-components";

const Wrapper = styled.div`
  -webkit-font-smoothing: antialiased;

  > div {
    height: 6rem;
    line-height: 5.8rem;
    z-index: 999;
    > button {
      width: 100%;
      padding: 0 30px;
      background: transparent;
      border: none;
      border-radius: 0;
      color: #333740;
      font-weight: 500;
      text-align: right;
      cursor: pointer;
      transition: background 0.2s ease-out;

      &:hover,
      &:focus,
      &:active {
        color: #03071e;
        background-color: #03071e !important;
      }

      > i,
      > svg {
        margin-left: 10px;
        transition: transform 0.3s ease-out;

        &[alt="true"] {
          transform: rotateX(180deg);
        }
      }
    }
  }

  .localeDropdownContent {
    -webkit-font-smoothing: antialiased;
    span {
      color: white;
      font-size: 13px;
      font-family: Lato;
      font-weight: 500;
      letter-spacing: 0.5;
      vertical-align: baseline;
    }
  }

  .localeDropdownMenu {
    min-width: 90px !important;
    max-height: 162px !important;
    overflow: auto !important;
    margin: 0 !important;
    padding: 0;
    line-height: 1.8rem;
    border: none !important;
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;

    &:before {
      content: "";
      position: absolute;
      top: -3px;
      left: -1px;
      width: calc(100% + 1px);
      height: 3px;
    }

    > button {
      height: 40px;
      padding: 0px 15px;
      line-height: 40px;
      color: #f75b1d;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.5;
      &:hover,
      &:focus,
      &:active {
        background-color: #03071e !important;
        border-radius: 0px;
        cursor: pointer;
      }
    }

    > button:first-child {
      line-height: 50px;
      margin-bottom: 4px;
      &:hover,
      &:active {
        color: #03071e;
      }
    }

    > button:not(:first-child) {
      height: 36px;
      line-height: 36px;
      > i,
      > svg {
        margin-left: 10px;
      }
    }
  }

  .localeDropdownMenuNotLogged {
    background: transparent !important;
    box-shadow: none !important;
    border: 1px solid #03071e !important;
    border-top: 0px !important;

    button {
      padding-left: 17px;
      &:hover {
        background-color: #03071e !important;
      }
    }

    &:before {
      box-shadow: none !important;
    }
  }

  .localeToggleItem {
    img {
      max-height: 13.37px;
      margin-left: 9px;
    }
    &:active {
      color: black;
    }
    &:hover {
      background-color: #03071e !important;
    }
  }

  .localeToggleItemActive {
    color: #333740 !important;
  }
`;

export default Wrapper;