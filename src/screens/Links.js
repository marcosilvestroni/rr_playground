import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const routes = [
  { name: "Case A", pathname: "casea" },
  { name: "Case B", pathname: "caseb" },
  { name: "Case C", pathname: "casec" },
  { name: "Case D", pathname: "cased" },
  { name: "Case E", pathname: "casee" },
  { name: "Case F", pathname: "casef" },
  { name: "Case G", pathname: "caseg" },
  { name: "Case H", pathname: "caseh" },
  { name: "Case I", pathname: "casei" },
  { name: "Case J", pathname: "casej" },
  { name: "Case K", pathname: "casek" }
];

export default function Links(props) {
  return (
    <Fragment>
      {routes.map(({ name, pathname }) => (
        <div key={pathname}>
          <NavLink to={{ pathname }}>{name}</NavLink>
        </div>
      ))}
    </Fragment>
  );
}
