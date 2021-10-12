//time complexity = O(n)

function tournamentWinner(competitions, results) {
    const obj = {}
      let winner
      
      for (let i = 0; i < competitions.length;i++){
       
          if (results[i] === 0){
              winner = competitions[i][1]
        
              }else {
              winner = competitions[i][0]
             
          }
          if (obj[winner]){
              obj[winner] += 3
          }else {
              obj[winner] = 3
          }
         
      }
      for (let value in obj){
          if (obj[value] > obj[winner]) winner = value
      }
    return winner;
  }
  