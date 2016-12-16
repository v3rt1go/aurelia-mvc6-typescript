System.register(["aurelia-framework", "aurelia-logging-console"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_logging_console_1;
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging();
        aurelia.start().then(function (a) { return a.setRoot("./features/home/app", document.getElementById("home-component")); });
    }
    exports_1("configure", configure);
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_console_1_1) {
                aurelia_logging_console_1 = aurelia_logging_console_1_1;
            }],
        execute: function() {
            aurelia_framework_1.LogManager.addAppender(new aurelia_logging_console_1.ConsoleAppender());
            aurelia_framework_1.LogManager.setLevel(aurelia_framework_1.LogManager.logLevel.debug);
        }
    }
});
//# sourceMappingURL=home.js.map