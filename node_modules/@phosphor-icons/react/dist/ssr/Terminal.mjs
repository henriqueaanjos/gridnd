var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    l.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      n.call(e, m) && o(r, m, e[m]);
  return r;
}, i = (r, e) => p(r, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import w from "../defs/Terminal.mjs";
const S = R((r, e) => /* @__PURE__ */ c.createElement(d, i(t({ ref: e }, r), { weights: w })));
S.displayName = "Terminal";
export {
  S as Terminal
};
