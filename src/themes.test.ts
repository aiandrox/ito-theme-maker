import themes from "./themes.json";

describe("themes.json", () => {
  test.each(themes)("%O", (theme) => {
    expect(theme).toHaveProperty("title");
    expect(typeof theme.title).toBe("string");

    expect(theme).toHaveProperty("max");
    expect(typeof theme.max).toBe("string");

    expect(theme).toHaveProperty("min");
    expect(typeof theme.min).toBe("string");
  });
});
