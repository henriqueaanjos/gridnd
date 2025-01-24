var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, p(e));
import g, { forwardRef as E } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Engine.mjs";
const w = E((o, e) => /* @__PURE__ */ g.createElement(d, i(a({ ref: e }, o), { weights: l })));
w.displayName = "Engine";
export {
  w as Engine
};
