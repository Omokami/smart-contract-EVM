import { Contract, utils } from "ethers";
import { expect } from "chai";
import { Context } from "../../scripts/context";

export async function checkCredit(
  context: Context,
  trader: string,
  trueCredit: string,
  virtualCredit: string
) {
  const credit = await context.dealer.getCreditOf(trader);
  expect(credit.trueCredit).to.equal(utils.parseEther(trueCredit));
  expect(credit.virtualCredit).to.equal(utils.parseEther(virtualCredit));
}

export async function checkBalance(
    perp: Contract,
    trader: string,
    paper:string,
    credit:string
) {
    const balance = await perp.balanceOf(trader)
    expect(balance[0]).to.equal(utils.parseEther(paper));
    expect(balance[1]).to.equal(utils.parseEther(credit))
}

export async function checkUnderlyingAsset(
  context: Context,
  account: string,
  expectedBalance: string
) {
  const balance = await context.underlyingAsset.balanceOf(account);
  expect(balance).to.equal(utils.parseEther(expectedBalance));
}