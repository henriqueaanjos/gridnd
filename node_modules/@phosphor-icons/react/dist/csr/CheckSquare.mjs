var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      h.call(e, o) && t(r, o, e[o]);
  return r;
}, c = (r, e) => i(r, p(e));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/CheckSquare.mjs";
const q = d((r, e) => /* @__PURE__ */ n.createElement(k, c(m({ ref: e }, r), { weights: l })));
q.displayName = "CheckSquare";
export {
  q as CheckSquare
};
