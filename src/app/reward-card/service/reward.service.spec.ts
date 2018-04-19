import { RewardService } from "./reward.service";
import { Reward } from "../../model/Reward";

/**
 * Unit test for RewardService
 */
describe("RewardService", () => {

    const rewardService = new RewardService();
    const reward: Reward = {
        name: "test",
        email: "test@test.com",
        value: 100
    };
    const rewardListenSpy = jasmine.createSpy("listenAndGet");

    it("Create reward and ensure listener is notified", () => {
        rewardService.listenAndGet().subscribe(rewardListenSpy);
        rewardService.createReward(reward);
        expect(rewardListenSpy).toHaveBeenCalledWith(reward);
    });

    it("Getter returns rewards information", () => {
        rewardService.createReward(reward);
        expect(rewardService.getReward()).toEqual(reward);
    });
});
