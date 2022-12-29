import React, { memo, useContext } from "react";
import { TableType } from "../../../../Types/Table";

import { FormControlLabel, Radio } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { GetTitlesContext } from "../../../../Contexts/GetTitles";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import SendButton from "../../../SendButton";

interface Props {
  items: TableType[];
}

const Tbody = ({ items }: Props) => {
  const { options, setOptions, sendOneInfo } = useContext(GetTitlesContext);
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {items.map((item, index) => {
        if (item.ALBLWKF === "CC")
          return (
            <tr key={index}>
              <td>{item.ADFIWKF}</td>
              <td>{item.AFILWKF}</td>
              <td>{item.AFORWKF}</td>
              <td>{item.ANATWKF}</td>
              <td>{item.APARWKF}</td>
              <td>
                <InfoIcon onClick={() => navigate(`/modal/${item.ANTIWKF}`)} />
              </td>
              <td>
                <div className="content-area-inputs">
                  <FormControlLabel
                    control={
                      <Radio
                        className="time"
                        name={`radio-${item.AFILWKF}`}
                        color="primary"
                        checkedIcon={<CheckBoxIcon />}
                        icon={<CheckBoxOutlineBlankIcon />}
                        checked={options[index] === "Aprovado"}
                        onChange={(e) => {
                          setOptions((prevOptions) => {
                            return {
                              ...prevOptions,
                              [index]: e.target.checked ? "Aprovado" : "",
                            };
                          });
                        }}
                      />
                    }
                    label=""
                  />
                </div>
              </td>
              <td>
                <div className="content-area-inputs">
                  <FormControlLabel
                    control={
                      <Radio
                        className="time"
                        name={`radio-${item.AFILWKF}`}
                        checkedIcon={<CancelIcon />}
                        icon={<CheckBoxOutlineBlankIcon />}
                        checked={options[index] === "Reprovado"}
                        onChange={(e) => {
                          setOptions((prevOptions) => {
                            return {
                              ...prevOptions,
                              [index]: e.target.checked ? "Reprovado" : "",
                            };
                          });
                        }}
                      />
                    }
                    label=""
                  />
                </div>
              </td>
              <td>
                <div className="content-area-inputs">
                  <FormControlLabel
                    control={
                      <Radio
                        className="time"
                        name={`radio-${item.AFILWKF}`}
                        color="default"
                        checkedIcon={<AccessTimeFilledIcon />}
                        icon={<CheckBoxOutlineBlankIcon className="border" />}
                        checked={options[index] === "Espera"}
                        onChange={(e) => {
                          setOptions((prevOptions) => {
                            return {
                              ...prevOptions,
                              [index]: e.target.checked ? "Espera" : "",
                            };
                          });
                        }}
                      />
                    }
                    label=""
                  />
                </div>
              </td>
              <td>
                <SendButton onClick={() => sendOneInfo(index)} text="ENVIAR" />
              </td>
            </tr>
          );
        return null;
      })}
    </React.Fragment>
  );
};

export default memo(Tbody);
