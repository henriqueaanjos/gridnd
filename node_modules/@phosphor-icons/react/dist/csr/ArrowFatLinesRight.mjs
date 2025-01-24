var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, r, e) => r in t ? s(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, i = (t, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && a(t, e, r[e]);
  if (o)
    for (var e of o(r))
      c.call(r, e) && a(t, e, r[e]);
  return t;
}, m = (t, r) => f(t, n(r));
import w, { forwardRef as R } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/ArrowFatLinesRight.mjs";
const d = R((t, r) => /* @__PURE__ */ w.createElement(g, m(i({ ref: r }, t), { weights: h })));
d.displayName = "ArrowFatLinesRight";
export {
  d as ArrowFatLinesRight
};
