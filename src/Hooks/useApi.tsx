import axios from "axios";

// const endpoint = process.env.REACT_APP_URL;

const uri = axios.create({
  baseURL: `${process.env.REACT_APP_URL as string}`,
});

export const useApi = () => ({
  signIn: async (user: string, pass: string) => {
    const { data } = await uri.post("/psslogin", { user, pass });
    return data;
  },
  signUp: async (user: string, passEmail: string, newPass: string) => {
    const { data } = await uri.post("/pssatuesq", {
      user,
      passEmail,
      newPass,
    });
    return data;
  },
  firstLogin: async (user: string, pass: string, newPass: string) => {
    const { data } = await uri.post("/psslogin", { user, pass, newPass });
    return data;
  },
  forgetPass: async (user: string, number: string) => {
    const { data } = await uri.post("/PssEsqLg", { user, number });
    return data;
  },
  getAllTables: async (ID: string) => {
    const { data } = await uri.get(`/gettitwkf?ccodaprv=${ID}`);
    return data;
  },
});
