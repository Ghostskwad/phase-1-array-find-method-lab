const superBowlWin = (record) => {
    const result = record.find(record => record.result === "W")
    return !!result ? result.record : undefined
 }
