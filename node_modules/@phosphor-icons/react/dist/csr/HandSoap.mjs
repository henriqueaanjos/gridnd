var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (a, o, e) => o in a ? f(a, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[o] = e, m = (a, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && t(a, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && t(a, e, o[e]);
  return a;
}, p = (a, o) => i(a, n(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import H from "../defs/HandSoap.mjs";
const I = l((a, o) => /* @__PURE__ */ d.createElement(w, p(m({ ref: o }, a), { weights: H })));
I.displayName = "HandSoap";
export {
  I as HandSoap
};
