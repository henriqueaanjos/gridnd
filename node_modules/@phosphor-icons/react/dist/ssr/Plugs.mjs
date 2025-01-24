var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, s = (r, e) => i(r, p(e));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/Plugs.mjs";
const u = R((r, e) => /* @__PURE__ */ g.createElement(d, s(a({ ref: e }, r), { weights: n })));
u.displayName = "Plugs";
export {
  u as Plugs
};
