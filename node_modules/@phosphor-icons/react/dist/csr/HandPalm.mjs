var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (e, a, m) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[a] = m, t = (e, a) => {
  for (var m in a || (a = {}))
    s.call(a, m) && r(e, m, a[m]);
  if (o)
    for (var m of o(a))
      c.call(a, m) && r(e, m, a[m]);
  return e;
}, f = (e, a) => n(e, p(a));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import H from "../defs/HandPalm.mjs";
const I = l((e, a) => /* @__PURE__ */ d.createElement(w, f(t({ ref: a }, e), { weights: H })));
I.displayName = "HandPalm";
export {
  I as HandPalm
};
