import { Injectable } from "@angular/core";
import { User } from "../model/User";
import { Observable, Observer } from "rxjs";

/**
 * Service for user information
 */
@Injectable()
export class UserService {

    /**
     * Logged-in user information
     */
    private loggedInUser: User;
    private pointsObserver: Observer<number>;

    /**
     * Retrieve user information
     */
    getUser(email = "demo@demo.com"): User {
        if (!this.loggedInUser) {
            this.loggedInUser = {
                name: "Demo",
                email: email,
                points: 1000
            };
        }
        return this.loggedInUser;
    }

    /**
     * Deducts points
     * @param points
     */
    deductPoints(points: number) {
        this.loggedInUser.points = this.loggedInUser.points - points;
        if (this.loggedInUser.points < 0) {
            this.loggedInUser.points = 0;
        }
        this.pointsObserver.next(this.loggedInUser.points);
    }

    /**
     * Subscribe to changes in points
     */
    getPoints(): Observable<number> {
        const observable = Observable.create(observer => {
            this.pointsObserver = observer;
        }).publish();
        return observable.refCount();
    }
}
