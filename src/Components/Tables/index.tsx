import React, { useContext, useEffect, useState } from "react";

import Tbody from "./Tbody";

import * as C from "./styles";
import { AuthContext } from "../../Contexts/Auth";
import { TableType } from "../../Types/Table";
import { GetTitlesContext } from "./../../Contexts/GetTitles/index";

const Tables: React.FC = () => {
  const { user, getAllTables } = useContext(AuthContext);
  const [getTable, setGetTable] = useState<TableType[]>([]);
  const { titles } = useContext(GetTitlesContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await getAllTables(`${user?.ID}`);
      setGetTable(data);
    })();
    setLoading(false);
  }, [user, getAllTables]);

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
              <th>fornecedor</th>
              <th>Valor</th>
              <th>natureza</th>
              <th>parcela</th>
              <th>+ Info</th>
              <th>A</th>
              <th>R</th>
              <th>E</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <Tbody items={getTable} loading={loading} />
          </tbody>
        </C.TableArea>
      )}
    </C.Container>
  );
};

export default Tables;
