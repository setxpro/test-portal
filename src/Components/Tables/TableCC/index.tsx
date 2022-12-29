import React, { useContext, useEffect, useState } from "react";

import Tbody from "./Tbody";

import * as C from "./styles";
import { AuthContext } from "../../../Contexts/Auth";
import { TableType } from "../../../Types/Table";
import { useParams } from "react-router-dom";
import { GetTitlesContext } from "../../../Contexts/GetTitles/index";

const TablesCC: React.FC = () => {
  const { id } = useParams();

  const { user, getAllTables } = useContext(AuthContext);
  const [getTable, setGetTable] = useState<TableType[]>([]);
  const { titles } = useContext(GetTitlesContext);

  useEffect(() => {
    (async () => {
      const data = await getAllTables(`${user?.ID}`);
      setGetTable(data);
    })();
  }, [id, user?.ID, getAllTables]);

  return (
    <C.Container>
      {titles.length === 0 && (
        <div className="content-loading">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {titles.length > 0 && (
        <C.TableArea>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Filial</th>
              <th>fornecedor</th>
              <th>natureza</th>
              <th>parcela</th>
              <th>+ Info</th>
              <th>A</th>
              <th>R</th>
              <th>E</th>
              <th>Enviar</th>
            </tr>
          </thead>
          <tbody>
            <Tbody items={getTable} />
          </tbody>
        </C.TableArea>
      )}
    </C.Container>
  );
};

export default TablesCC;
