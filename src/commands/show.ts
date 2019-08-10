import {Command, flags} from '@oclif/command'
import chalk from 'chalk'
import * as shell from 'shelljs'

export default class Show extends Command {
  static description = 'Show the desktop icons'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    const commands = [
      'defaults write com.apple.finder CreateDesktop true',
      'killall Finder',
    ]

    commands.forEach(cmd => {
      this.log(chalk.hex('#666666').bold(cmd))
      shell.exec(cmd)
    })
  }
}
