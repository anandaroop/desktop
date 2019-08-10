import {Command, flags} from "@oclif/command";

export default class Show extends Command {
  static description = "Show the desktop icons";

  static flags = {
    help: flags.help({char: "h"})
  };

  static args = [];

  async run() {
    this.log("show!");
  }
}
