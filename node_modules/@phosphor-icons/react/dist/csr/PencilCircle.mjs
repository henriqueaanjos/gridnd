var a = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? a(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, c = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && t(r, o, e[o]);
  if (i)
    for (var o of i(e))
      p.call(e, o) && t(r, o, e[o]);
  return r;
}, m = (r, e) => l(r, f(e));
import s, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/PencilCircle.mjs";
const I = d((r, e) => /* @__PURE__ */ s.createElement(w, m(c({ ref: e }, r), { weights: C })));
I.displayName = "PencilCircle";
export {
  I as PencilCircle
};
