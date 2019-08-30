module.exports = {
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "home.md",
        baseDir: "./content/pages",
        typeName: "HomePage"
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksRel: ["noopener"],
      externalLinksTarget: "_blank"
    }
  }
};
