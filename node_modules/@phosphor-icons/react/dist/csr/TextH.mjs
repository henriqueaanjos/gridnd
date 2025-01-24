var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && m(t, o, e[o]);
  return t;
}, f = (t, e) => p(t, s(e));
import x, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/TextH.mjs";
const H = d((t, e) => /* @__PURE__ */ x.createElement(l, f(a({ ref: e }, t), { weights: w })));
H.displayName = "TextH";
export {
  H as TextH
};
