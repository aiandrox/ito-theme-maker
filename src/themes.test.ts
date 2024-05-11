import themes from "./themes.json";

describe("themes.json", () => {
  it("should be an array", () => {
    expect(themes).toBeInstanceOf(Array);
  });

  it("should id is unique", () => {
    const ids = themes.map((theme) => theme.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });

  test.each(themes)("%O", (theme) => {
    expect(theme).toHaveProperty("id");
    expect(typeof theme.id).toBe("number");

    expect(theme).toHaveProperty("title");
    expect(typeof theme.title).toBe("string");

    expect(theme).toHaveProperty("max");
    expect(typeof theme.max).toBe("string");

    expect(theme).toHaveProperty("min");
    expect(typeof theme.min).toBe("string");
  });
});
