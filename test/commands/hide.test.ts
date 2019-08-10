import {expect, test} from "@oclif/test";

describe("hide", () => {
  test
    .stdout()
    .command(["hide"])
    .it("runs hello", ctx => {
      expect(ctx.stdout).to.contain("hello world");
    });

  test
    .stdout()
    .command(["hide", "--name", "jeff"])
    .it("runs hello --name jeff", ctx => {
      expect(ctx.stdout).to.contain("hello jeff");
    });
});
