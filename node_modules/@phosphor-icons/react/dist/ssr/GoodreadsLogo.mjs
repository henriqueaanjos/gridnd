var d = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? d(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      c.call(o, r) && t(e, r, o[r]);
  return e;
}, s = (e, o) => f(e, i(o));
import g, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/GoodreadsLogo.mjs";
const w = R((e, o) => /* @__PURE__ */ g.createElement(l, s(m({ ref: o }, e), { weights: n })));
w.displayName = "GoodreadsLogo";
export {
  w as GoodreadsLogo
};
