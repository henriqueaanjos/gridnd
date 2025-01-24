var s = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? s(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    f.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      p.call(o, r) && t(e, r, o[r]);
  return e;
}, i = (e, o) => l(e, c(o));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/DiscoBall.mjs";
const w = R((e, o) => /* @__PURE__ */ B.createElement(d, i(m({ ref: o }, e), { weights: n })));
w.displayName = "DiscoBall";
export {
  w as DiscoBall
};
