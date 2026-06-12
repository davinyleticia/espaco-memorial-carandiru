const { DateTime } = require("luxon");
const { JSDOM } = require("jsdom");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {

    // Impede que o 11ty delete a pasta do Pagefind durante o --serve
  eleventyConfig.setServerOptions({
    domDiff: false
  });
  
  // Isso avisa o 11ty para ignorar a pasta pagefind e não deletá-la
  eleventyConfig.watchIgnores.add("_site/pagefind/**");



    eleventyConfig.addPassthroughCopy("src/styles.css");
    eleventyConfig.addPassthroughCopy("src/main.js");

    eleventyConfig.addPassthroughCopy("src/_images");
    eleventyConfig.addPassthroughCopy("src/_storege");
    eleventyConfig.addPassthroughCopy("src/_data");

    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addCollection("pages", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/sections/*.md").sort((a, b) => a.data.order - b.data.order);
    });

    eleventyConfig.addCollection("blog", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });

    eleventyConfig.addCollection("aulas-cjovem", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/aulas-cjovem/*");
    });

    eleventyConfig.addCollection("ds2", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/aulas-etec/ds2/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });
    eleventyConfig.addCollection("poo", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/aulas-etec/poo/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });
    eleventyConfig.addCollection("pam1", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/aulas-etec/pam1/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });
        eleventyConfig.addCollection("pam2", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/aulas-etec/pam2/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });
     eleventyConfig.addCollection("pdm", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/aulas-etec/pdm/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });

     eleventyConfig.addCollection("tiaa", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/aulas-etec/tiaa/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });


     eleventyConfig.addCollection("pw1", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/aulas-etec/pw1/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });

         eleventyConfig.addCollection("comum", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/aulas-etec/comum/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });


     eleventyConfig.addCollection("pw3", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/aulas-etec/pw3/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });

    eleventyConfig.addCollection("aulas-fiap", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/aulas-fiap/**/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });


    eleventyConfig.addFilter("date", (dateObj, format = "yyyy-MM-dd") => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
    });

    eleventyConfig.addTransform("lazyloadImages", function (content, outputPath) {
        if (outputPath && outputPath.endsWith(".html")) {
            const dom = new JSDOM(content);
            const images = dom.window.document.querySelectorAll("img");

            images.forEach((img) => {
                if (!img.hasAttribute("loading")) {
                    img.setAttribute("loading", "lazy");
                }
            });

            return dom.serialize();
        }
        return content;
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        templateFormats: ["md", "njk"]
    };
};
