function countingValleys(steps, path) {
    var valley = 0
    var seaLevel = 0
    for (let i= 0; i < steps; i++) {
        if(path[i] == 'U') {
            seaLevel += 1
            if(seaLevel == 0) {
                valley += 1
            }
        } else {
                seaLevel -= 1
        }
        
    }
    return valley

}