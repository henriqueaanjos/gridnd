var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && a(t, o, e[o]);
  return t;
}, s = (t, e) => i(t, p(e));
import T, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import x from "../defs/TextTSlash.mjs";
const d = h((t, e) => /* @__PURE__ */ T.createElement(n, s(m({ ref: e }, t), { weights: x })));
d.displayName = "TextTSlash";
export {
  d as TextTSlash
};
