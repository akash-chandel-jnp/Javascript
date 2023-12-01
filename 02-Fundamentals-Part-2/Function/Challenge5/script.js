const calcAverage = (n1, n2, n3) => (n1 + n2 + n3)/3 ;

const scoreDolphins = calcAverage(44, 23, 71);

const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (score1, score2) => {
    if (score1 > 2*score2) {
        console.log(`Dolphins win (${score1} vs. ${score2})`);
        
    }else if (score2 > 2*score1){
        console.log(`Koalas win (${score2} vs. ${score1})`)

    }else {

        console.log('No team wins...');
        
    }
}

checkWinner(scoreDolphins , scoreKoalas)