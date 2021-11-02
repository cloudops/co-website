const fs = require("fs");
const path = require("path");
const glob = require("glob");

const contentBaseDir = path.resolve("..", "content");

const listOfFiles = glob.sync(path.join(contentBaseDir, "**", "@(*.html|*.md)"));

let englishFiles = [];
let frenchFiles = [];

const searchStringToLanguageMappings = {
  "content/english": "en",
  "content/french": "fr"
};

let filesGroupedByLanguage = {
  'en': [],
  'fr': []
};

listOfFiles.forEach(file => {
  Object.keys(searchStringToLanguageMappings).forEach(searchString => {
    if (file.indexOf(searchString) >= 0) {
      let relativeFile = path.relative(path.resolve("..", searchString), file);
      filesGroupedByLanguage[searchStringToLanguageMappings[searchString]].push(relativeFile);
    }
  });
});

let filesByLanguageCoverage = {};

Object.keys(filesGroupedByLanguage).forEach(language => {
  filesGroupedByLanguage[language].forEach(file => {
    if (!filesByLanguageCoverage[file]) {
      filesByLanguageCoverage[file] = [];
    }

    filesByLanguageCoverage[file].push(language);
  });
});

const totalNumberOfLanguages = Object.keys(filesGroupedByLanguage).length;

let completelyTranslated = [];
let englishTranslated = [];
let frenchTranslated = [];

Object.keys(filesByLanguageCoverage).forEach(file => {
  if (filesByLanguageCoverage[file].length === totalNumberOfLanguages) {
    completelyTranslated.push(file);
  }
  else if (filesByLanguageCoverage[file][0] === "en") {
    englishTranslated.push(file);
  }
  else if (filesByLanguageCoverage[file][0] === "fr") {
    frenchTranslated.push(file);
  }
});

console.log("Completely Translated", completelyTranslated.length);
console.log("English Translated", englishTranslated.length);
console.log("French Translated", frenchTranslated.length);

console.log("\n\nEnglish Only\n");
englishTranslated.forEach(file => {
  console.log(file);
});

console.log("\n\nFrench Only\n");
frenchTranslated.forEach(file => {
  console.log(file);
});
