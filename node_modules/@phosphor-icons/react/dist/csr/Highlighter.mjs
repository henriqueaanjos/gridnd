var f = Object.defineProperty, g = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && i(r, t, e[t]);
  if (o)
    for (var t of o(e))
      s.call(e, t) && i(r, t, e[t]);
  return r;
}, a = (r, e) => g(r, h(e));
import c, { forwardRef as l } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/Highlighter.mjs";
const w = l((r, e) => /* @__PURE__ */ c.createElement(n, a(m({ ref: e }, r), { weights: d })));
w.displayName = "Highlighter";
export {
  w as Highlighter
};
