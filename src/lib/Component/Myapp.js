import React from "react";
import { useTrans, i18next } from "react-i18next-package";

function Myapp() {
  const t = useTrans(["header"]);
  const handleChange = (e) => {
    let lang = e.target.value;
    i18next.changeLanguage(lang);
  };
  return (
    <div>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #eee",
        }}
      >
        <h4>{t("change_language")}</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "1rem",
          }}
        >
          <button
            style={{
              marginRight: "5px",
              padding: "0.5rem 1rem",
              fontSize: "0.9rem",
            }}
            value="en-US"
            onClick={handleChange}
          >
            {t("Eng")}
          </button>
          <button
            style={{
              marginRight: "5px",
              padding: "0.5rem 1rem",
              fontSize: "0.9rem",
            }}
            value="ja-JP"
            onClick={handleChange}
          >
            {t("Jp")}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Myapp;
