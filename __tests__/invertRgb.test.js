const { getStyle, invertRgb } = require("../lib");

describe("invert color of given element", () => {
  it("should invert hexadecimal(#xxx) format", () => {
    document.body.innerHTML = `<button id="invertColor" style="color:#000;">invert text color</button>`;
    let element = document.getElementById("invertColor");

    invertRgb(element, "color");
    let color = getStyle(element, "color");

    expect(color).toEqual("rgb(255, 255, 255)");
  });

  it("should invert hexadecimal(#xxxxxx) format", () => {
    document.body.innerHTML = `<p id="invertColor" style="color:#fff;">invert text color</p>`;
    let element = document.getElementById("invertColor");

    invertRgb(element, "color");
    let color = getStyle(element, "color");

    expect(color).toEqual("rgb(0, 0, 0)");
  });

  it("should invert RGB format", () => {
    document.body.innerHTML = `<h1 id="invertColor" style="color:rgb(255,0,0);">invert text color</h1>`;
    let element = document.getElementById("invertColor");

    invertRgb(element, "color");
    let color = getStyle(element, "color");

    expect(color).toEqual("rgb(0, 255, 255)");
  });

  it("should invert RGBA format", () => {
    document.body.innerHTML = `<a id="invertColor" style="color:rgba(255, 0, 255, 0.5);">invert text color</a>`;
    let element = document.getElementById("invertColor");

    invertRgb(element, "color");
    let color = getStyle(element, "color");

    expect(color).toEqual("rgba(0, 255, 0, 0.5)");
  });
});

describe("invert background color of given element", () => {
  it("should invert hexadecimal(#xxx) format", () => {
    document.body.innerHTML = `<button id="invertBackgroundColor" style="background-color:#000;">invert background color</button>`;
    let element = document.getElementById("invertBackgroundColor");

    invertRgb(element, "background-color");
    let backgroundColor = getStyle(element, "background-color");

    expect(backgroundColor).toEqual("rgb(255, 255, 255)");
  });

  it("should invert hexadecimal(#xxxxxx) format", () => {
    document.body.innerHTML = `<p id="invertBackgroundColor" style="background-color:#fff;">invert background color</p>`;
    let element = document.getElementById("invertBackgroundColor");

    invertRgb(element, "background-color");
    let backgroundColor = getStyle(element, "background-color");

    expect(backgroundColor).toEqual("rgb(0, 0, 0)");
  });

  it("should invert RGB format", () => {
    document.body.innerHTML = `<h1 id="invertBackgroundColor" style="background-color:rgb(255,0,0);">invert background color</h1>`;
    let element = document.getElementById("invertBackgroundColor");

    invertRgb(element, "background-color");
    let backgroundColor = getStyle(element, "background-color");

    expect(backgroundColor).toEqual("rgb(0, 255, 255)");
  });

  it("should invert RGBA format", () => {
    document.body.innerHTML = `<a id="invertBackgroundColor" style="background-color:rgba(255, 0, 255, 0.5);">invert background color</a>`;
    let element = document.getElementById("invertBackgroundColor");

    invertRgb(element, "background-color");
    let backgroundColor = getStyle(element, "background-color");

    expect(backgroundColor).toEqual("rgba(0, 255, 0, 0.5)");
  });
});
