var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && a(r, m, e[m]);
  return r;
}, i = (r, e) => n(r, p(e));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Terminal.mjs";
const R = d((r, e) => /* @__PURE__ */ l.createElement(w, i(t({ ref: e }, r), { weights: I })));
R.displayName = "Terminal";
export {
  R as Terminal
};
