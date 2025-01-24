var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, t, o) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, a = (e, t) => {
  for (var o in t || (t = {}))
    c.call(t, o) && m(e, o, t[o]);
  if (r)
    for (var o of r(t))
      l.call(t, o) && m(e, o, t[o]);
  return e;
}, i = (e, t) => f(e, p(t));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/Subtitles.mjs";
const w = b((e, t) => /* @__PURE__ */ n.createElement(d, i(a({ ref: t }, e), { weights: u })));
w.displayName = "Subtitles";
export {
  w as Subtitles
};
