var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (m, e, o) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && i(m, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && i(m, o, e[o]);
  return m;
}, a = (m, e) => s(m, f(e));
import l, { forwardRef as w } from "react";
import S from "../lib/IconBase.mjs";
import d from "../defs/PersonSimpleSwim.mjs";
const I = w((m, e) => /* @__PURE__ */ l.createElement(S, a(t({ ref: e }, m), { weights: d })));
I.displayName = "PersonSimpleSwim";
export {
  I as PersonSimpleSwim
};
