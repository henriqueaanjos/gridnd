var p = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var r = (i, e, o) => e in i ? p(i, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[e] = o, t = (i, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && r(i, o, e[o]);
  if (m)
    for (var o of m(e))
      n.call(e, o) && r(i, o, e[o]);
  return i;
}, a = (i, e) => s(i, l(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/TelevisionSimple.mjs";
const v = c((i, e) => /* @__PURE__ */ S.createElement(R, a(t({ ref: e }, i), { weights: d })));
v.displayName = "TelevisionSimple";
export {
  v as TelevisionSimple
};
