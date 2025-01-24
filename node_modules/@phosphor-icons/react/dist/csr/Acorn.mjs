var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      s.call(o, e) && m(r, e, o[e]);
  return r;
}, c = (r, o) => i(r, n(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import A from "../defs/Acorn.mjs";
const I = l((r, o) => /* @__PURE__ */ d.createElement(w, c(a({ ref: o }, r), { weights: A })));
I.displayName = "Acorn";
export {
  I as Acorn
};
