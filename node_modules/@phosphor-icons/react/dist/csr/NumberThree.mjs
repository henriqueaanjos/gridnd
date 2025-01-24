var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      h.call(e, m) && t(r, m, e[m]);
  return r;
}, f = (r, e) => p(r, s(e));
import n, { forwardRef as N } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/NumberThree.mjs";
const l = N((r, e) => /* @__PURE__ */ n.createElement(b, f(a({ ref: e }, r), { weights: d })));
l.displayName = "NumberThree";
export {
  l as NumberThree
};
