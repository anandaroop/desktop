import {Command, flags} from '@oclif/command'
import * as shell from 'shelljs'

export default class Hide extends Command {
  static description = 'Hide the desktop icons'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    const commands = [
      'defaults write com.apple.finder CreateDesktop false',
      'killall Finder',
    ]

    commands.forEach(cmd => {
      this.log(cmd)
      shell.exec(cmd)
    })
  }
}
