import {atoms} from "recoil";
export const counterAtom=atoms({
    default:0,
    key:"counter"

})
export const evenSelector=selector({
    key:"isEvenSelecotor",
    get: function({get}){
        const currentCount=get(counterAtom);
        const isEven=(currentCount%2==0);
        return isEven;
    }

})