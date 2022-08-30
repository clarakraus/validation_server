exports.validateTotal = (req, res, next) => {
    let missingFields= [];
    const start = req.body.boxPackingRequest.messageHeader
    if(!start.sender){
        missingFields.push("sender")
        }
    if(!start.boxData.boxNumber){
        missingFields.push("boxNumber")
       }
    if(!start.msgId){
        missingFields.push("msgId")
        }
    if(!start.senderInfo.plant){
        missingFields.push("senderInfo.plant")
    }
    if(!start.senderInfo.shippingPoint){
        missingFields.push("senderInfo.shippingPoint")
    }
    if (!start.soldTo.soldToCode){
        missingFields.push("soldTo.soldToCode")
    }
    if(!start.shipTo.shipToCode){
        missingFields.push("shipTo.shipToCode")
    }
    if(!start.intermediate.intermediateCode){
        missingFields.push("intermediate.intermediateCode")
    }
    req.missingFields = missingFields
    next() 
    }