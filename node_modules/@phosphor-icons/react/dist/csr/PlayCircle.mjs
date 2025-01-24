var c = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      s.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => l(r, f(e));
import n, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/PlayCircle.mjs";
const C = y((r, e) => /* @__PURE__ */ n.createElement(d, i(m({ ref: e }, r), { weights: w })));
C.displayName = "PlayCircle";
export {
  C as PlayCircle
};
