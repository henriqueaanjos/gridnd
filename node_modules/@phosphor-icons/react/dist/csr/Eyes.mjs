var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      n.call(e, r) && m(o, r, e[r]);
  return o;
}, s = (o, e) => i(o, p(e));
import y, { forwardRef as E } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Eyes.mjs";
const w = E((o, e) => /* @__PURE__ */ y.createElement(d, s(a({ ref: e }, o), { weights: l })));
w.displayName = "Eyes";
export {
  w as Eyes
};
