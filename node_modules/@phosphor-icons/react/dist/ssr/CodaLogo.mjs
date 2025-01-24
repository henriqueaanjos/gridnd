var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    d.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      c.call(o, r) && t(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import g, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/CodaLogo.mjs";
const w = R((e, o) => /* @__PURE__ */ g.createElement(l, f(m({ ref: o }, e), { weights: n })));
w.displayName = "CodaLogo";
export {
  w as CodaLogo
};
