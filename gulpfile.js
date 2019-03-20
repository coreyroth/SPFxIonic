'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
const path = require('path');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.configureWebpack.mergeConfig({

    additionalConfiguration: (generatedConfiguration) => {

        generatedConfiguration.module.rules.map(rule => {
            if (rule.use.indexOf("source-map-loader") != -1) {
                rule.exclude = path.resolve(__dirname, "node_modules");
            }
        });

        return generatedConfiguration;
    }
});

build.initialize(gulp);