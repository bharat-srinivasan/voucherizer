import { Injectable } from "@angular/core";
import { Reward } from "../../model/Reward";
import { Observable, Observer } from "rxjs";

/**
 * Service to maintain or persist rewards
 */
@Injectable()
export class RewardService {

    private reward: Reward;
    private getRewardObserver: Observer<Reward>;

    /**
     * Create reward
     * @param reward
     */
    createReward(reward: Reward) {
        this.reward = reward;
        this.getRewardObserver.next(this.reward);
    }

    /**
     * Get reward as connected observable that starts emitting only when it has atleast once subscriber
     */
    listenAndGet(): Observable<Reward> {
        const observable = Observable.create(observer => {
            this.getRewardObserver = observer;
        }).publish();
        return observable.refCount();
    }

    /**
     * Getter
     */
    getReward(): Reward {
        return this.reward;
    }
}
