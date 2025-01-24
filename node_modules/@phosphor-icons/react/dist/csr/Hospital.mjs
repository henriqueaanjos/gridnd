var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? p(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      l.call(o, e) && a(t, e, o[e]);
  return t;
}, i = (t, o) => s(t, f(o));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import H from "../defs/Hospital.mjs";
const I = d((t, o) => /* @__PURE__ */ n.createElement(w, i(m({ ref: o }, t), { weights: H })));
I.displayName = "Hospital";
export {
  I as Hospital
};
