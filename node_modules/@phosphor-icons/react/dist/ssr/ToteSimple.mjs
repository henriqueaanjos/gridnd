var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var r = (o, e, t) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    l.call(e, t) && r(o, t, e[t]);
  if (m)
    for (var t of m(e))
      S.call(e, t) && r(o, t, e[t]);
  return o;
}, i = (o, e) => f(o, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/ToteSimple.mjs";
const w = R((o, e) => /* @__PURE__ */ c.createElement(d, i(a({ ref: e }, o), { weights: n })));
w.displayName = "ToteSimple";
export {
  w as ToteSimple
};
