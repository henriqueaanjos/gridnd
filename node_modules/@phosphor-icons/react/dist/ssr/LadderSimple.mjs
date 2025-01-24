var p = Object.defineProperty, d = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      l.call(e, m) && o(r, m, e[m]);
  return r;
}, i = (r, e) => d(r, f(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import n from "../defs/LadderSimple.mjs";
const w = c((r, e) => /* @__PURE__ */ S.createElement(R, i(t({ ref: e }, r), { weights: n })));
w.displayName = "LadderSimple";
export {
  w as LadderSimple
};
