var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    R.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      n.call(o, r) && t(e, r, o[r]);
  return e;
}, i = (e, o) => p(e, s(o));
import w, { forwardRef as c } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/Rainbow.mjs";
const l = c((e, o) => /* @__PURE__ */ w.createElement(b, i(m({ ref: o }, e), { weights: d })));
l.displayName = "Rainbow";
export {
  l as Rainbow
};
