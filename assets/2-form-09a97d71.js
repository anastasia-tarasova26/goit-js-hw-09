const l = "feedback-form-state",
  t = document.querySelector(".feedback-form");
c();
t.addEventListener("input", s);
t.addEventListener("submit", n);
function s(e) {
  e.preventDefault();
  const a = t.elements.email.value.trim(),
    o = t.elements.message.value.trim();
  r(l, { email: a, message: o });
}
function n(e) {
  if (
    (e.preventDefault(), t.elements.email.value && t.elements.message.value)
  ) {
    const a = localStorage.getItem(l);
    try {
      console.log(JSON.parse(a));
    } catch (o) {
      console.log(o.name),
        console.log(o.message),
        console.log("JSON package is corrupted");
    }
    localStorage.removeItem(l),
      (t.elements.email.value = ""),
      (t.elements.message.value = "");
  } else alert("Please, fill the form");
}
function r(e, a) {
  const o = JSON.stringify(a);
  localStorage.setItem(e, o);
}
function m(e) {
  const a = localStorage.getItem(e);
  try {
    return JSON.parse(a);
  } catch (o) {
    console.log(o.name),
      console.log(o.message),
      console.log("JSON package is corrupted");
  }
}
function c() {
  const e = m(l);
  if (e)
    (t.elements.email.value = e.email), (t.elements.message.value = e.message);
  else return 1;
}
//# sourceMappingURL=2-form-09a97d71.js.map
