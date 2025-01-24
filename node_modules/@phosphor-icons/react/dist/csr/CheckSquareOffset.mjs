var s = Object.defineProperty, c = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, f = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      h.call(e, t) && a(r, t, e[t]);
  return r;
}, m = (r, e) => c(r, i(e));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/CheckSquareOffset.mjs";
const q = d((r, e) => /* @__PURE__ */ n.createElement(k, m(f({ ref: e }, r), { weights: l })));
q.displayName = "CheckSquareOffset";
export {
  q as CheckSquareOffset
};
