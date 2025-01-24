var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      n.call(r, o) && m(e, o, r[o]);
  return e;
}, i = (e, r) => f(e, p(r));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/Virus.mjs";
const I = l((e, r) => /* @__PURE__ */ d.createElement(u, i(a({ ref: r }, e), { weights: w })));
I.displayName = "Virus";
export {
  I as Virus
};
