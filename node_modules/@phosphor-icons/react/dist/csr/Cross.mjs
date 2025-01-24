var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && t(r, e, o[e]);
  if (s)
    for (var e of s(o))
      n.call(o, e) && t(r, e, o[e]);
  return r;
}, a = (r, o) => i(r, p(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/Cross.mjs";
const I = l((r, o) => /* @__PURE__ */ d.createElement(w, a(m({ ref: o }, r), { weights: C })));
I.displayName = "Cross";
export {
  I as Cross
};
