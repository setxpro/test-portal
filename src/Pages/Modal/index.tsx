import { useState, useContext, useCallback, useEffect } from "react";
import * as C from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { GetTitlesContext } from "./../../Contexts/GetTitles/index";
import { toast } from "react-toastify";
import { AuthContext } from "./../../Contexts/Auth/index";
import axios from "axios";

const Modal = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { titles } = useContext(GetTitlesContext);
  const { user } = useContext(AuthContext);

  const [choiceApproved, setChoiceApproved] = useState(false);
  const [choiceReproved, setChoiceReproved] = useState(false);
  const [choiceWait, setChoiceWait] = useState(false);

  const [option, setOption] = useState("");

  // Estados de cada item da tabela para que seja exibido no modal quando for chamado
  const [filial, setFilial] = useState(""); // AFILWKF
  const [valor, setValor] = useState(""); // AVALWKF
  const [fornecedor, setFornecedor] = useState(""); // AFORWKF
  const [natureza, setNatureza] = useState(""); // ANATWKF
  const [parcela, setParcela] = useState(""); // APARWKF
  const [prefixo, setPrefixo] = useState(""); // APREWKF
  const [tipo, setTipo] = useState(""); // ATIPWKF
  const [numTitulo, setNumTitulo] = useState(""); // ATITWKF

  const [cdCeo, setCdCeo] = useState(""); // ACUSWKF
  const [loja, setLoja] = useState(""); // ALOJWKF
  const [descCeo, setDescCeo] = useState(""); // ADCCWKF
  const [descNatu, setDescNatu] = useState(""); // ADNAWKF
  const [historyCeo, setHistoryName] = useState(""); // AHISWKF
  const [companyName, setCompanyName] = useState(""); // ADFIWKF
  const [fornecedorName, setFornecedorName] = useState(""); // ANFOWKF

  function getApproved() {
    setChoiceApproved(true);
    setChoiceReproved(false);
    setChoiceWait(false);
  }
  function getReprover() {
    setChoiceReproved(true);
    setChoiceApproved(false);
    setChoiceWait(false);
  }
  function getWait() {
    setChoiceWait(true);
    setChoiceReproved(false);
    setChoiceApproved(false);
  }

  const getTitlesById = useCallback(async () => {
    const data = titles.filter((i) => i.ANTIWKF === id)[0];

    setCompanyName(data.ADFIWKF);

    setFornecedorName(data.AFORWKF);

    setFilial(data.AFILWKF);

    setValor(data.AVALWKF);

    setFornecedor(data.AFORWKF);

    setNatureza(data.ANATWKF);

    setPrefixo(data.APREWKF);

    setParcela(data.APARWKF);

    setTipo(data.ATIPWKF);

    setNumTitulo(data.ATITWKF);

    setLoja(data.ALOJWKF);

    setCdCeo(data.ACUSWKF);

    setDescCeo(data.ADCCWKF);

    setDescNatu(data.ADNAWKF);

    setHistoryName(data.AHISWKF);
  }, [id, titles]);

  useEffect(() => {
    getTitlesById();
  }, [getTitlesById]);

  const sendResponse = async () => {
    if (!option) {
      toast.error("Você deve ao menos selecionar uma resposta.");
      return;
    }
    let conf = window.confirm("Deseja Realmente enviar essa esposta ?");
    if (!conf) {
      toast("Resposta abortada pelo aprovador!");
      return;
    }
    const { data } = await axios.post(
      `${process.env.REACT_APP_URL as string}/ctitwkf`,
      {
        AFILWKF: filial,
        AFORWKF: fornecedor,
        ALOJWKF: loja,
        ANATWKF: natureza,
        APARWKF: parcela,
        APREWKF: prefixo,
        ATIPWKF: tipo,
        ATITWKF: numTitulo,
        ADCCWKF: descCeo,
        ADNAWKF: descNatu,
        AHISWKF: historyCeo,
        ADFIWKF: companyName,
        ANFOWKF: fornecedorName,
        AVALWKF: valor,
        ID: user?.ID,
        option,
      }
    );
    toast("Resposta enviada com sucesso!");
    navigate(`/bills-to-pay`);
    return data;
  };

  return (
    <C.Container>
      <C.ContentTop>
        <C.Title>Mais informações</C.Title>
        <span></span>
        <C.Title>{companyName}</C.Title>
      </C.ContentTop>
      <C.ContentMiddleArea>
        <C.ContentArea>
          <C.H3>Filial</C.H3>
          <span></span>
          <C.H4>{filial}</C.H4>
        </C.ContentArea>

        <C.ContentArea>
          <C.H3>Nome do fornecedor</C.H3>
          <span></span>
          <C.H4>{fornecedorName}</C.H4>
        </C.ContentArea>
        <C.ContentArea>
          <C.H3>Natureza</C.H3>
          <span></span>
          <C.H4>{descNatu}</C.H4>
          <span></span>
          <C.H3>N°</C.H3>
          <C.H4>{natureza}</C.H4>
        </C.ContentArea>
        <C.ContentArea>
          <C.H3>N° Título</C.H3>
          <span></span>
          <C.H4>{numTitulo}</C.H4> <span></span> <C.H3>Parcela</C.H3>{" "}
          <span></span> <C.H4>{parcela}</C.H4> <span></span>{" "}
          <C.H3>Prefixo</C.H3> <span></span> <C.H4>{prefixo}</C.H4>{" "}
          <span></span> <C.H3>Tipo</C.H3> <span></span> <C.H4>{tipo}</C.H4>
        </C.ContentArea>
        <C.ContentArea>
          <C.H3>Valor</C.H3>
          <span></span>
          <C.H4>R$ {valor}</C.H4>
        </C.ContentArea>
        <C.ContentArea>
          <C.H3>código do Centro de custo</C.H3>
          <span></span>
          <C.H4>{cdCeo}</C.H4>
        </C.ContentArea>
        <C.ContentArea>
          <C.H3>Descrição do centro de custo</C.H3>
          <span></span>
          <C.H4>{descCeo}</C.H4>
        </C.ContentArea>
        <C.ContentArea>
          <C.H3>Histórico do centro de custo</C.H3>
          <span></span>
          <C.H4>{historyCeo}</C.H4>
        </C.ContentArea>
        <C.ContentArea>
          <C.FormArea>
            <C.ContentForm onClick={getApproved}>
              <span className="area">
                {choiceApproved && <C.CheckIcon />}
                <input
                  type="radio"
                  name="btn"
                  value="Aprovado"
                  onChange={(e) => setOption(e.target.value)}
                />
              </span>
              <div>Aprovar</div>
            </C.ContentForm>
            <C.ContentForm onClick={getReprover}>
              <span className="area">
                {choiceReproved && <C.CheckIcon />}
                <input
                  type="radio"
                  name="btn"
                  value="Reprovado"
                  onChange={(e) => setOption(e.target.value)}
                />
              </span>
              <div>Reprovar</div>
            </C.ContentForm>
            <C.ContentForm onClick={getWait}>
              <span className="area">
                {choiceWait && <C.CheckIcon />}
                <input
                  type="radio"
                  name="btn"
                  value="Espera"
                  onChange={(e) => setOption(e.target.value)}
                />
              </span>
              <div>Esperar</div>
            </C.ContentForm>
          </C.FormArea>
          <C.ContentBtnArea>
            <C.SendButton onClick={sendResponse}>RESPONDER</C.SendButton>
            <C.GobackButton onClick={() => navigate(`/bills-to-pay`)}>
              VOLTAR
            </C.GobackButton>
          </C.ContentBtnArea>
        </C.ContentArea>
      </C.ContentMiddleArea>
    </C.Container>
  );
};

export default Modal;
