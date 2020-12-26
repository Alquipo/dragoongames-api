/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Mantido por </span>
        <a
          key="website"
          href="https://github.com/Alquipo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alquipo Neto
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
