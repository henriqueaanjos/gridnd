var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, d = (r, e) => i(r, p(e));
import n, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Ladder.mjs";
const L = l((r, e) => /* @__PURE__ */ n.createElement(w, d(m({ ref: e }, r), { weights: I })));
L.displayName = "Ladder";
export {
  L as Ladder
};
