import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth";
import useSidebar from "../../Hooks/useSidebar";
import * as C from "./styles";
import { toast } from "react-toastify";
import { RenderPageContext } from "../../Contexts/RenderPage";
import { GetTitlesContext } from "./../../Contexts/GetTitles/index";

const Sidebar = () => {
  const { openSidebar, wrapperSidebar } = useSidebar();

  const { titles } = useContext(GetTitlesContext);

  const { signout, user } = useContext(AuthContext);
  const { getValue } = useContext(RenderPageContext);

  const [openSidebar1, setOpenSidebar1] = useState(false);
  const [openSidebar2, setOpenSidebar2] = useState(false);

  const cFiscal = user?.ASSIGNMENTS.includes("032");
  const cPagar = user?.ASSIGNMENTS.includes("001");
  const cFinan = user?.ASSIGNMENTS.includes("033");
  const centroCusto = titles.find((i) => i.ALBLWKF === "CC");

  function getMessage() {
    if (!centroCusto) {
      return toast.error("Não há registro de contas a pagar no momento!");
    }
    setOpenSidebar2(true);
  }

  // Recebo os elementos de uma chave EMPRESAS criando um array de empresas
  let items = titles.map((i) => i.ADFIWKF);

  // Remove elementos repetidos no array de empresas

  function wrapperSidebar1() {
    setOpenSidebar1(!openSidebar1);
  }

  let newArr = items.filter(function (info, i) {
    return items.indexOf(info) === i;
  });

  let centerItems = titles
    .filter((item) => item.ALBLWKF === "CC")
    .filter((i) => i.ADNAWKF);

  let newCenter = centerItems.filter((info, i) => {
    return centerItems.indexOf(info) === i;
  });

  return (
    <React.Fragment>
      <C.SidebarArea openSidebar={openSidebar}>
        <C.TopSidebar>
          <h1>BAGAGGIO</h1>
          <C.CloseIcon onClick={wrapperSidebar} />
        </C.TopSidebar>
        <C.ContentAreaSedebarNav
          count={newArr.length}
          countCc={centerItems.length}
          openSidebar1={openSidebar1}
          openSidebar2={openSidebar2}
        >
          <>
            {cFiscal ? (
              <Link to={`/bills-to-pay`} onClick={wrapperSidebar1}>
                FISCAL
                <div className="count-areas">
                  {titles.filter((item) => item.ALBLWKF === "FISCAL").length}
                </div>
              </Link>
            ) : null}
            {cFinan ? (
              <Link to={`/bills-to-pay`} onClick={wrapperSidebar1}>
                FINANCEIRO
                <div className="count-areas">
                  {
                    titles.filter((item) => item.ALBLWKF === "FINANCEIRO")
                      .length
                  }
                </div>
              </Link>
            ) : null}
          </>
          <div className="drop-1">
            {newArr.map((i, indice) => {
              if (i !== "")
                return (
                  <Link
                    to={`/bills-to-pay`}
                    key={indice}
                    onClick={() => getValue(i)}
                    className="new-arr"
                  >
                    {i.toLowerCase()}
                    <div className="count-items">
                      {titles.filter((item) => item.ADFIWKF === i).length}
                    </div>
                  </Link>
                );

              return null;
            })}
          </div>

          <>
            {cPagar ? (
              <Link to={`/cc`} onClick={getMessage}>
                Centro de Custo
                <div className="count-areas">
                  {titles.filter((item) => item.ALBLWKF === "CC").length}
                </div>
              </Link>
            ) : null}
          </>
          <div className="drop-2">
            {newCenter.map((i, indice) => {
              return (
                <Link
                  to={`/bills-to-pay`}
                  key={indice}
                  onClick={() => getValue(i.ADFIWKF)}
                >
                  {i.ADFIWKF}
                </Link>
              );
            })}
          </div>
        </C.ContentAreaSedebarNav>
        <C.FooterSidebar>
          <button onClick={signout}>LOGOUT</button>
        </C.FooterSidebar>
      </C.SidebarArea>
      <C.Container
        openSidebar={openSidebar}
        onClick={wrapperSidebar}
      ></C.Container>
    </React.Fragment>
  );
};

export default Sidebar;
