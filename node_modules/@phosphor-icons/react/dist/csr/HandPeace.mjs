var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (a, e, o) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[e] = o, m = (a, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(a, o, e[o]);
  if (r)
    for (var o of r(e))
      s.call(e, o) && t(a, o, e[o]);
  return a;
}, c = (a, e) => i(a, n(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import H from "../defs/HandPeace.mjs";
const I = l((a, e) => /* @__PURE__ */ d.createElement(w, c(m({ ref: e }, a), { weights: H })));
I.displayName = "HandPeace";
export {
  I as HandPeace
};
