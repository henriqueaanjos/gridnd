var s = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      p.call(e, o) && a(r, o, e[o]);
  return r;
}, i = (r, e) => l(r, c(e));
import S, { forwardRef as y } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/TrolleySuitcase.mjs";
const n = y((r, e) => /* @__PURE__ */ S.createElement(R, i(m({ ref: e }, r), { weights: d })));
n.displayName = "TrolleySuitcase";
export {
  n as TrolleySuitcase
};
