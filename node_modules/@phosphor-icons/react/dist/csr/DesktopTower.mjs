var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      w.call(e, r) && m(o, r, e[r]);
  return o;
}, p = (o, e) => f(o, i(e));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/DesktopTower.mjs";
const D = d((o, e) => /* @__PURE__ */ n.createElement(k, p(a({ ref: e }, o), { weights: l })));
D.displayName = "DesktopTower";
export {
  D as DesktopTower
};
