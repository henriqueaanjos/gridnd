var n = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, o, r) => o in e ? n(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, t = (e, o) => {
  for (var r in o || (o = {}))
    f.call(o, r) && a(e, r, o[r]);
  if (m)
    for (var r of m(o))
      c.call(o, r) && a(e, r, o[r]);
  return e;
}, i = (e, o) => p(e, s(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import S from "../defs/PersonSimpleSnowboard.mjs";
const b = l((e, o) => /* @__PURE__ */ d.createElement(w, i(t({ ref: o }, e), { weights: S })));
b.displayName = "PersonSimpleSnowboard";
export {
  b as PersonSimpleSnowboard
};
