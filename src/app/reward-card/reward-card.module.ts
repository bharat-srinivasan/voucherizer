import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RewardCardComponent } from "./reward-card.component";
import { PreviewRewardCardComponent } from "./preview-reward-card/preview-reward-card.component";
import { RewardService } from "./service/reward.service";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";


/**
 * Module for rewards management
 */
@NgModule({
    declarations: [
        RewardCardComponent,
        PreviewRewardCardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
        MatButtonModule,
        MatSelectModule,
        MatCardModule,
        MatDividerModule,
        MatGridListModule
    ],
    exports: [
        RewardCardComponent
    ],
    providers: [
        RewardService
    ]
})
export class RewardCardModule { }
