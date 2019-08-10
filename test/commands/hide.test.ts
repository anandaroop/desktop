import {expect, test} from '@oclif/test'
import * as shell from 'shelljs'
import * as sinon from 'sinon'

describe('hide', () => {
  test
    .stdout()
    .command(['hide'])
    .it('outputs its shell commands', ctx => {
      expect(ctx.stdout).to.contain(
        'defaults write com.apple.finder CreateDesktop false'
      )
      expect(ctx.stdout).to.contain('killall Finder')
    })

  test
    .stub(shell, 'exec', sinon.spy())
    .stdout()
    .command(['hide'])
    .it('issues its shell commands', () => {
      // @ts-ignore methods added by sinon
      expect(shell.exec.getCall(0).args[0]).to.equal(
        'defaults write com.apple.finder CreateDesktop false'
      )
      // @ts-ignore methods added by sinon
      expect(shell.exec.getCall(1).args[0]).to.equal('killall Finder')
    })
})
