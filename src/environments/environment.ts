export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAabVktPsGMWXTDtbQBmK_4GRnaDqRv-oA",
    authDomain: "rede-laboratorios-biotec.firebaseapp.com",
    databaseURL: "https://rede-laboratorios-biotec.firebaseio.com",
    projectId: "rede-laboratorios-biotec",
    storageBucket: "",
    messagingSenderId: "537459781115"
  },
  urlApiSistemaInterno: 'http://rededelabolatorios-env.h7qiim6mwv.sa-east-1.elasticbeanstalk.com/api/',
  // urlApiSistemaInterno: 'http://localhost:8084/api/',
  urlApiCNPJ: 'https://us-central1-api-cnpj.cloudfunctions.net/getCnpj/',
};
