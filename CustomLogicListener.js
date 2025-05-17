import LogicListener from "./generated/LogicListener.js";

export class CustomLogicListener extends LogicListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}