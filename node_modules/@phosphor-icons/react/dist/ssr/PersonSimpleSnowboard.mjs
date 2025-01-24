var p = Object.defineProperty, s = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var a = (e, o, r) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, t = (e, o) => {
  for (var r in o || (o = {}))
    S.call(o, r) && a(e, r, o[r]);
  if (m)
    for (var r of m(o))
      f.call(o, r) && a(e, r, o[r]);
  return e;
}, i = (e, o) => s(e, n(o));
import d, { forwardRef as l } from "react";
import w from "../lib/SSRBase.mjs";
import c from "../defs/PersonSimpleSnowboard.mjs";
const R = l((e, o) => /* @__PURE__ */ d.createElement(w, i(t({ ref: o }, e), { weights: c })));
R.displayName = "PersonSimpleSnowboard";
export {
  R as PersonSimpleSnowboard
};
