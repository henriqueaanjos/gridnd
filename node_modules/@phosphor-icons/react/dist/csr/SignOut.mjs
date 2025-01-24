var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, t, o) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, a = (e, t) => {
  for (var o in t || (t = {}))
    s.call(t, o) && m(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && m(e, o, t[o]);
  return e;
}, i = (e, t) => n(e, p(t));
import g, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/SignOut.mjs";
const w = d((e, t) => /* @__PURE__ */ g.createElement(l, i(a({ ref: t }, e), { weights: u })));
w.displayName = "SignOut";
export {
  w as SignOut
};
