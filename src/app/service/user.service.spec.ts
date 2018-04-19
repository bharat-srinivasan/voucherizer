import { UserService } from "./user.service";
/**
 * Unit test for UserService
 */
describe("UserService", () => {

    let userService;
    const pointsObservableSpy = jasmine.createSpy("getPoints");
    const userInfoDefault = {
        name: "Demo",
        email: "demo@demo.com",
        points: 1000
    };

    const userInfoCustom = {
        name: "Demo",
        email: "test@demo.com",
        points: 1000
    };

    beforeEach(() => {
        userService = new UserService();
    });

    it("Get user information with all defaults", () => {
        expect(userService.getUser()).toEqual(userInfoDefault);
    });

    it("Get user information with custom email", () => {
        expect(userService.getUser("test@demo.com")).toEqual(userInfoCustom);
    });

    describe("Change of points", () => {

        beforeEach(() => {
            userService.getUser();
        });

        it("Get notified about change in points", () => {
            userService.getPoints().subscribe(pointsObservableSpy);
            userService.deductPoints(500);
            expect(pointsObservableSpy).toHaveBeenCalledWith(500);
        });

        it("Get notified about losing all points", () => {
            userService.getPoints().subscribe(pointsObservableSpy);
            userService.deductPoints(1010);
            expect(pointsObservableSpy).toHaveBeenCalledWith(0);
        });
    });
});
