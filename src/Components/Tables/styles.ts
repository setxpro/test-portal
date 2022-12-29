import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 200px);
  overflow-y: scroll;

  position: relative;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #5353;
  }
  ::-webkit-scrollbar-thumb {
    background: #4545;
  }

  .MuiSvgIcon-root {
    cursor: pointer;
    transition: all 1s ease;
    color: ${(props) => props.theme.colors.text};
  }
  .MuiFormControlLabel-root {
    width: 0px;
    padding-left: 10px;
  }
  .MuiButtonBase-root {
    width: 0px;
  }

  .content-area-inputs {
    /* width: auto;          */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .lds-ring {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid #fff;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #053 transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const TableArea = styled.table`
  width: 100%;
  transition: all 1s ease;
  color: ${(props) => props.theme.colors.tableText};

  thead {
    tr {
      th {
        position: sticky;
        top: 0;
        z-index: 9;
        transition: all 1s ease;
        background: ${(props) => props.theme.colors.header};
        padding: 0.4rem;

        @media (max-width: 430px) {
          :nth-child(2) {
            display: none;
          }
          :nth-child(3) {
            display: none;
          }
          :nth-child(5) {
            display: none;
          }
        }
      }
    }
  }
  tbody {
    tr {
      td {
        text-align: center;
        padding: 0.5rem 5px;
        white-space: nowrap;

        @media (max-width: 430px) {
          :nth-child(2) {
            display: none;
          }

          :nth-child(3) {
            display: none;
          }

          :nth-child(5) {
            display: none;
          }
        }
      }
      :nth-child(even) {
        background: #5555;
      }
    }
  }
`;
