var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, a = (e, t) => {
  for (var o in t || (t = {}))
    s.call(t, o) && m(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && m(e, o, t[o]);
  return e;
}, f = (e, t) => n(e, p(t));
import d, { forwardRef as x } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/TextOutdent.mjs";
const w = x((e, t) => /* @__PURE__ */ d.createElement(l, f(a({ ref: t }, e), { weights: u })));
w.displayName = "TextOutdent";
export {
  w as TextOutdent
};
