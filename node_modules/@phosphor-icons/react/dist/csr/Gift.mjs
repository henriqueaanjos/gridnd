var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, a = (e, t) => {
  for (var o in t || (t = {}))
    c.call(t, o) && m(e, o, t[o]);
  if (r)
    for (var o of r(t))
      n.call(t, o) && m(e, o, t[o]);
  return e;
}, f = (e, t) => p(e, s(t));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import G from "../defs/Gift.mjs";
const I = l((e, t) => /* @__PURE__ */ d.createElement(w, f(a({ ref: t }, e), { weights: G })));
I.displayName = "Gift";
export {
  I as Gift
};
