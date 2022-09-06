"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactI18nextPackage = require("react-i18next-package");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Myapp() {
  const t = (0, _reactI18nextPackage.useTrans)(["header"]);

  const handleChange = e => {
    let lang = e.target.value;

    _reactI18nextPackage.i18next.changeLanguage(lang);
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("section", {
    style: {
      display: "flex",
      alignItems: "center",
      border: "1px solid #eee"
    }
  }, /*#__PURE__*/_react.default.createElement("h4", null, t("change_language")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    style: {
      marginRight: "5px",
      padding: "0.5rem 1rem",
      fontSize: "0.9rem"
    },
    value: "en-US",
    onClick: handleChange
  }, t("Eng")), /*#__PURE__*/_react.default.createElement("button", {
    style: {
      marginRight: "5px",
      padding: "0.5rem 1rem",
      fontSize: "0.9rem"
    },
    value: "ja-JP",
    onClick: handleChange
  }, t("Jp")))));
}

var _default = Myapp;
exports.default = _default;