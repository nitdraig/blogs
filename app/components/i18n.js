// i18n.js
const NextI18Next = require("next-i18next").default;
const { withTranslation } = require("react-i18next"); // Importa react-i18next

module.exports = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["es"],
  localeSubpaths: {
    es: "es",
  },
});

module.exports = {
  withTranslation, // Asegúrate de exportar withTranslation
};
