/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s =s.trim();
    if(s.length===0) return 0;
    var num =parseInt(s);
    if(isNaN(num)) return 0
    var max =Math.pow(2,31);
    if(num>0) {
        return num>=max?max-1:num;
    }else{
        return Math.abs(num)>=max?-max:num;
    }
};
