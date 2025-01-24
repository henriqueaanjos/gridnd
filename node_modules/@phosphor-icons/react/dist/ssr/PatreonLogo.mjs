var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    n.call(o, r) && a(e, r, o[r]);
  if (t)
    for (var r of t(o))
      c.call(o, r) && a(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/PatreonLogo.mjs";
const w = R((e, o) => /* @__PURE__ */ g.createElement(d, f(m({ ref: o }, e), { weights: l })));
w.displayName = "PatreonLogo";
export {
  w as PatreonLogo
};
