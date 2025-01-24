var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      d.call(e, o) && a(t, o, e[o]);
  return t;
}, s = (t, e) => i(t, p(e));
import n, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import H from "../defs/Headset.mjs";
const I = l((t, e) => /* @__PURE__ */ n.createElement(w, s(m({ ref: e }, t), { weights: H })));
I.displayName = "Headset";
export {
  I as Headset
};
