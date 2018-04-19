import { TestBed } from "@angular/core/testing";
import { RewardService } from "../service/reward.service";
describe("Preview Reward Card Component", () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: RewardService, useValue: null },

            ]
        });
    });
});
