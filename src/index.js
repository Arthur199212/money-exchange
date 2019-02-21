// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let answ = {};
    let nH = 50;
    let nQ = 25;
    let nD = 10;
    let nN = 5;
    let nP = 1;
    
    if ( currency <= 0 ) {
      return {};
    }
  
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
  
    if ( Math.floor( currency / nH ) != 0 ) {
      answ.H = Math.floor( currency / nH);
    }
    currency %= nH;
    if ( Math.floor( currency / nQ ) != 0 ) {
      answ.Q = Math.floor( currency / nQ );
    }
    currency %= nQ;
    if ( Math.floor( currency / nD ) != 0 ) {
      answ.D = Math.floor( currency / nD );
    }
    currency %= nD;
    if ( Math.floor( currency / nN ) != 0 ) {
      answ.N = Math.floor( currency / nN );
    }
    currency %= nN;
    if ( Math.floor( currency / nP ) ) {
      answ.P = Math.floor( currency / nP );
    }
    currency %= nP;
  
    return answ;
}
