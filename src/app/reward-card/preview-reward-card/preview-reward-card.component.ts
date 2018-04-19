import { Component, OnChanges, OnInit } from "@angular/core";
import { RewardService } from "../service/reward.service";
import { Reward } from "../../model/Reward";
import { UserService } from "../../service/user.service";
import { User } from "../../model/User";

/**
 * Component to display the preview of reward card
 */
@Component({
    selector: "app-preview-reward-card",
    templateUrl: "./preview-reward-card.component.html",
    styleUrls: ["./preview-reward-card.component.scss"]
})
export class PreviewRewardCardComponent implements OnInit {

    reward: Reward;
    user: User;

    constructor(private rewardService: RewardService, private userService: UserService) { }

    ngOnInit() {
        this.rewardService.listenAndGet().subscribe(reward => {
            this.reward = reward;
            this.user = this.userService.getUser();
        });

    }
}
