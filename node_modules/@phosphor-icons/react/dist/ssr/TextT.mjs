var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    T.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      c.call(e, r) && m(t, r, e[r]);
  return t;
}, f = (t, e) => p(t, s(e));
import x, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/TextT.mjs";
const n = R((t, e) => /* @__PURE__ */ x.createElement(d, f(a({ ref: e }, t), { weights: l })));
n.displayName = "TextT";
export {
  n as TextT
};
