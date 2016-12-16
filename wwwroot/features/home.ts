import { LogManager } from "aurelia-framework";
import { ConsoleAppender } from "aurelia-logging-console";
import { ViewLocator } from "aurelia-framework";

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(a => a.setRoot("./features/home/app", document.getElementById("home-component")));
}
