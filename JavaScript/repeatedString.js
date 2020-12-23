function repeatedString(s, n) {
    if(n >= s.length) {
        let leftChar = n - s.length
        let match = (s.match(/a/g) || []).length;
        let wholeDivisions = parseInt(leftChar/s.length)
        var repeated = match + (match * wholeDivisions)
        leftChar = n - ((wholeDivisions+1)*s.length)
        let leftString = s.slice(0,leftChar)
        repeated += (leftString.match(/a/g) || []).length;
    } else {
        var repeated = (s.slice(0,n)).match(/a/g).length
       
        
    }
    
    return repeated
}