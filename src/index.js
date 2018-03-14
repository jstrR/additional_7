module.exports = function solvematrix(matrix) {
  // your solution
  	//checking is it kk
  	if(main() === true){
  	return matrix;
  	}

  	//main func spec
  	function main(){
    var noR = 0; //number Of Row
  	var noC = 0;//number of Column
  	var isCellEmpty = false;
    for(let i = 0; i < 9 && !isCellEmpty; i++){
    	for(let j = 0; j < 9 && !isCellEmpty; j++){
        	if(matrix[i][j] === 0) {
        		isCellEmpty = true;
            	noR  = i;
            	noC  = j;
          	}
        }
    }// finding all empty cells

    if(!isCellEmpty === true){
    	return true;
    }
    for(let numb = 1; numb < 10; numb++){
    	if(itemSet(noR,noC,numb)){
    		// setting the right number
        	matrix[noR][noC] = numb;
          	if(main() === true){
          		return true;
          	}
          	matrix[noR][noC] = 0;
        }
    }	
      	return false;
  }

  	//func that's set a number
  	function itemSet(noR,noC,numb){
  	//cheking for already set numbers
    for(let j = 0; j < 9; j++){
    	if(matrix[noR][j] === numb){
    		return false;
    	}
    }
    for(let i = 0; i < 9; i++){
        if(matrix[i][noC] === numb){
        	return false;
       	}
    }
    
    //findin' setting right number
    let thirdRow = noR - noR % 3;
    let thirdCol = noC -noC % 3;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
    	    if(matrix[thirdRow + i][thirdCol + j] === numb){
        	    return false;
          	}
        }
    }
    	return true;
  }
  
}
