var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, a, o) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o, m = (e, a) => {
  for (var o in a || (a = {}))
    s.call(a, o) && t(e, o, a[o]);
  if (r)
    for (var o of r(a))
      c.call(a, o) && t(e, o, a[o]);
  return e;
}, p = (e, a) => i(e, n(a));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import H from "../defs/HandTap.mjs";
const I = l((e, a) => /* @__PURE__ */ d.createElement(w, p(m({ ref: a }, e), { weights: H })));
I.displayName = "HandTap";
export {
  I as HandTap
};
