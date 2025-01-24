var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && m(t, o, e[o]);
  return t;
}, n = (t, e) => i(t, p(e));
import d, { forwardRef as I } from "react";
import x from "../lib/IconBase.mjs";
import l from "../defs/TextIndent.mjs";
const w = I((t, e) => /* @__PURE__ */ d.createElement(x, n(a({ ref: e }, t), { weights: l })));
w.displayName = "TextIndent";
export {
  w as TextIndent
};
