var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    c.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      n.call(e, a) && o(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import B, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/HeartBreak.mjs";
const w = d((r, e) => /* @__PURE__ */ B.createElement(k, f(m({ ref: e }, r), { weights: l })));
w.displayName = "HeartBreak";
export {
  w as HeartBreak
};
