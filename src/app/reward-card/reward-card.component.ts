import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Reward } from "../model/Reward";
import { RewardService } from "./service/reward.service";
import { UserService } from "../service/user.service";
import { User } from "../model/User";

/**
 * Component for create a reward card
 */
@Component({
    selector: "app-reward-card",
    templateUrl: "./reward-card.component.html",
    styleUrls: ["./reward-card.component.scss"]
})
export class RewardCardComponent implements OnInit {
    detailsFormGroup: FormGroup;
    selectedValue: number;

    constructor(private formBuilder: FormBuilder,
        private rewardService: RewardService,
        private userService: UserService) { }

    ngOnInit() {
        this.detailsFormGroup = this.formBuilder.group({
            name: ["", Validators.required],
            email: ["", Validators.compose([Validators.required, Validators.email])],
            message: [""],
            value: ["", Validators.required]
        });
    }

    onSubmit() {
        this.rewardService.createReward(Object.assign({ value: 0 }, this.detailsFormGroup.value));
    }

    /**
     * Performs checkout
     * @param stepper
     * @param formDirective
     */
    purchase(stepper, formDirective) {
        this.userService.deductPoints(this.rewardService.getReward().value);
        stepper.reset();
        formDirective.resetForm();
        this.detailsFormGroup.reset();
    }

}
