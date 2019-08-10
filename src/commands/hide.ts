import {Command, flags} from '@oclif/command'

export default class Hide extends Command {
  static description = 'Hide the desktop icons'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    this.log('hide!')
  }
}
