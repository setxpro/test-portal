import styled from "styled-components";

import { IoClose } from "react-icons/io5";

export const Container = styled.div<{ openSidebar: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  cursor: pointer;
  display: ${(props) => (props.openSidebar ? "inline" : "none")};
`;
export const SidebarArea = styled.div<{ openSidebar: boolean }>`
  width: ${(props) => (props.openSidebar ? "285px" : "0")};
  transition: all 0.8s ease;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.sidebar};
  z-index: 9999;

  overflow: hidden;
`;
export const TopSidebar = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  h1 {
    white-space: nowrap;
    flex: 1;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const CloseIcon = styled(IoClose)`
  color: ${(props) => props.theme.colors.text};
  transition: 1s all ease;
  font-size: 2rem;
  cursor: pointer;
`;

export const ContentAreaSedebarNav = styled.div<{
  count: number;
  countCc: number;
  openSidebar1: boolean;
  openSidebar2: boolean;
}>`
  height: calc(100vh - 150px);
  border-bottom: 1px solid #6666;
  border-top: 1px solid #6666;
  display: flex;
  flex-direction: column;

  .count-areas {
    background: RGBA(40, 199, 111, 0.3);
    width: 30px;
    height: 30px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    color: RGB(40, 199, 111);
  }

  a {
    color: ${(props) => props.theme.colors.text};
    transition: 1s all ease;
    text-decoration: none;
    white-space: nowrap;
    text-transform: uppercase;
    width: 100%;
    position: relative;

    display: flex;
    justify-content: space-between;

    padding: 10px 10px;

    span {
      color: lightgreen;
      width: 100%;
    }

    &:hover {
      background: #5555;
    }
  }

  .drop-1 {
    display: flex;
    flex-direction: column;
    transition: all 1s ease;
    border-left: 0px solid transparent;
    height: ${(props) =>
      props.openSidebar1 ? `calc(${props.count} * 30px)px` : "0px"};

    max-height: 150px !important;

    overflow: scroll !important;

    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #aaa;
    }
    ::-webkit-scrollbar-track-piece {
      background: transparent;
    }
    ::-webkit-scrollbar-corner {
      display: none;
    }

    .new-arr {
      text-transform: capitalize;
    }

    .count-items {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.2);

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme.colors.text};
    }

    a {
      color: ${(props) => props.theme.colors.text};
      font-size: 0.8em;
      transition: 1s all ease;
      text-decoration: none;
      padding: 8px 3px;
      white-space: nowrap;
      padding: 0.5rem 10px;

      &:hover {
        background: #5555;
      }
    }
  }

  .drop-2 {
    display: flex;
    flex-direction: column;
    transition: all 1s ease;
    border-left: 0px solid transparent;
    height: ${(props) =>
      props.openSidebar2 ? `calc(${props.countCc} * 30px)px` : "0px"};
    max-height: 150px !important;

    overflow: scroll !important;

    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #aaa;
    }
    ::-webkit-scrollbar-track-piece {
      background: transparent;
    }
    ::-webkit-scrollbar-corner {
      display: none;
    }

    ::-webkit-scrollbar:horizontal {
      display: none;
    }
  }
`;
export const FooterSidebar = styled.div`
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentArea = styled.div<{ open: boolean }>`
  height: ${(props) => (props.open ? "250px" : "0px")};
  overflow: hidden;
  transition: 0.5s;

  display: flex;
  flex-direction: column;
  a {
    color: ${(props) => props.theme.colors.text};
    transition: 1s all ease;
    text-decoration: none;
    padding: 8px 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #5555;
    white-space: nowrap;

    span {
      color: #4a4;
    }

    &:hover {
      background: #5555;
    }
  }
`;
export const ContentAreaAD = styled.div<{ open: boolean }>`
  height: ${(props) => (props.open ? "250px" : "0px")};
  transition: 0.5s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  a {
    color: ${(props) => props.theme.colors.text};
    transition: 1s all ease;
    text-decoration: none;
    padding: 8px 10px;
    white-space: nowrap;

    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #5555;

    span {
      color: #4a4;
      white-space: nowrap;
    }

    &:hover {
      background: #5555;
    }
  }
`;
