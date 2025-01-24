var i = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (o, e, m) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, p = (o, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && a(o, m, e[m]);
  if (r)
    for (var m of r(e))
      d.call(e, m) && a(o, m, e[m]);
  return o;
}, t = (o, e) => l(o, f(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import n from "../defs/UploadSimple.mjs";
const w = c((o, e) => /* @__PURE__ */ S.createElement(R, t(p({ ref: e }, o), { weights: n })));
w.displayName = "UploadSimple";
export {
  w as UploadSimple
};
