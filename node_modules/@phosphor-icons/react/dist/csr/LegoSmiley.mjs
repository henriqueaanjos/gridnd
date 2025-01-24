var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, m) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, a = (o, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && t(o, m, e[m]);
  if (r)
    for (var m of r(e))
      l.call(e, m) && t(o, m, e[m]);
  return o;
}, i = (o, e) => p(o, s(e));
import g, { forwardRef as n } from "react";
import y from "../lib/IconBase.mjs";
import d from "../defs/LegoSmiley.mjs";
const w = n((o, e) => /* @__PURE__ */ g.createElement(y, i(a({ ref: e }, o), { weights: d })));
w.displayName = "LegoSmiley";
export {
  w as LegoSmiley
};
