var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (l, e, m) => e in l ? i(l, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : l[e] = m, a = (l, e) => {
  for (var m in e || (e = {}))
    f.call(e, m) && r(l, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && r(l, m, e[m]);
  return l;
}, t = (l, e) => p(l, s(e));
import S, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import B from "../defs/BellSimpleSlash.mjs";
const d = h((l, e) => /* @__PURE__ */ S.createElement(n, t(a({ ref: e }, l), { weights: B })));
d.displayName = "BellSimpleSlash";
export {
  d as BellSimpleSlash
};
