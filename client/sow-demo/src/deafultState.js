import { fromJS } from "immutable";

export const defaultState = fromJS({
    currentSOW:{
        proposer:"0x8514C373509315aA62647b65723E2Ce12ED1Cc0D",
        acceptor:"0xB8876bB02003B665283d05440afd764A0821764f",
        facilator:"0x5eA363486FA2Ea59679fF7A0cb230fab0f6aA2f4",
        resource:"0x0A7aD1FfDE4a3832465c6aA24B288f57d493A1D6",
        isActive:false,
        isExpired:false,
        effectiveDate: new Date('August 19, 2019 23:15:30 GMT+11:00'),
        commencementDateOfServices: new Date('August 15, 2019 23:15:30 GMT+11:00'),
        completionDateOfServices: new Date('December 31, 2019 23:15:30 GMT+11:00'),
        projectName:"Some Project Code Name",
        rate:80,
        weekStartDay:"Monday",
        transactionHash:"",
        blockNumber:"",
        gasCost:"",
        version:"1.0"        
    },
    previousSows:[],
    addresses:["0x8514C373509315aA62647b65723E2Ce12ED1Cc0D","0xB8876bB02003B665283d05440afd764A0821764f","0x0A7aD1FfDE4a3832465c6aA24B288f57d493A1D6","0x5eA363486FA2Ea59679fF7A0cb230fab0f6aA2f4"]       
});