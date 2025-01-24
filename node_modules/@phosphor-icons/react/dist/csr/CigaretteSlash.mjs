var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && o(t, r, e[r]);
  return t;
}, i = (t, e) => f(t, p(e));
import g, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/CigaretteSlash.mjs";
const w = h((t, e) => /* @__PURE__ */ g.createElement(n, i(m({ ref: e }, t), { weights: d })));
w.displayName = "CigaretteSlash";
export {
  w as CigaretteSlash
};
