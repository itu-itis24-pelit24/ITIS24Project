const word1 = document.getElementById("word1")
        const word2 = document.getElementById("word2")
        const word3 = document.getElementById("word3")
        const word4 = document.getElementById("word4")
        const word5 = document.getElementById("word5")
        const word1hider = document.getElementById("word1hider")
        const word2hider = document.getElementById("word2hider")
        const word3hider = document.getElementById("word3hider")
        const word4hider = document.getElementById("word4hider")
        const word5hider = document.getElementById("word5hider")
        const userinput = document.getElementById("user-input")
        const submitbtn = document.getElementById("submit-btn")
        let Scoreelement = document.getElementById("Score")
        const restartbtn = document.getElementById("restart-btn")
        const heart1 = document.getElementById("1")
        const heart2 = document.getElementById("2")
        const heart3 = document.getElementById("3")
        const message = document.getElementById("message")
        let challengeWord = "PRISM"
        let Score=0
        let Lives=3
        let guesses =[]
        function startGame(){
            Lives=3
            userinput.value = ""
            message.textContent=""
            Score = 0
            heart3.style.visibility = "visible"
             heart2.style.visibility = "visible"
              heart1.style.visibility = "visible"
              word1.classList.add("hidden")
               word2.classList.add("hidden")
                word3.classList.add("hidden")
                 word4.classList.add("hidden")
                  word5.classList.add("hidden")
                   word1hider.classList.remove("hidden")
                      word2hider.classList.remove("hidden")
                         word3hider.classList.remove("hidden")
                             word4hider.classList.remove("hidden")
                                 word5hider.classList.remove("hidden")
            guesses = []
            Scoreelement.textContent=Score
        }
        function eventChecker(){
            
            const correctPredictionP="p"
            let wordPrediction = userinput.value.toLowerCase();
            const correctPredictionI ="i"
            const correctPredictionR = "r"
            const correctPredictionS= "s"
            const correctPredictionM = "m"
            if(guesses.includes(wordPrediction)){
                message.textContent = "You already guessed this letter!"
                userinput.value = ""
                return
            }
            else if( wordPrediction === correctPredictionP ){
             Score= Score += 20
             word1.classList.remove("hidden")
             word1hider.classList.add("hidden")
             guesses.push("p")
             userinput.value = ""
             message.textContent = "You got it right!"
            }
            else if (wordPrediction === correctPredictionR){
                Score = Score += 20
                word2.classList.remove("hidden")
                word2hider.classList.add("hidden")
                guesses.push("r")
                userinput.value = ""
                message.textContent = "You got it right!"
            }
            else if (wordPrediction === correctPredictionI){
                Score = Score += 20
                word3.classList.remove("hidden")
                word3hider.classList.add("hidden")
                guesses.push("i")
                userinput.value = ""
                message.textContent = "You got it right!"
            }
            else if (wordPrediction === correctPredictionS){
                Score = Score+=20
                word4.classList.remove("hidden")
                word4hider.classList.add("hidden")
                guesses.push("s")
                userinput.value = ""
                message.textContent = "You got it right!"
            }
            else if(wordPrediction=== correctPredictionM){
                Score = Score +=20
                word5.classList.remove("hidden")
                word5hider.classList.add("hidden")
                guesses.push("m")
                userinput.value = ""
                message.textContent = "You got it right!"
            }
            else if (wordPrediction=="prism"){
                Score = 100
                guesses.push("prism")
                word1.classList.remove("hidden")
                word2.classList.remove("hidden")
                word3.classList.remove("hidden")
                word4.classList.remove("hidden")
                word5.classList.remove("hidden")
                word1hider.classList.add("hidden")
                word2hider.classList.add("hidden")
                word3hider.classList.add("hidden")
                word4hider.classList.add("hidden")
                word5hider.classList.add("hidden")
            }
            else if(wordPrediction==""){
                message.textContent="No prediction,write a letter or a word."
            }
            else if(wordPrediction.length!=1){
            Lives = 0
            if (Lives === 0){
                heart1.style.visibility = "hidden"
                heart2.style.visibility = "hidden"
                heart3.style.visibility = "hidden"
                
                alert("You lost the game!,Press reset the game to start again.")
              message.textContent="Press reset the game to start again."
            }
            }
                     
            else {
                Lives --
                message.textContent="Wrong guess,try again."
                if (Lives === 2) heart3.style.visibility = "hidden";
        if (Lives === 1) heart2.style.visibility = "hidden";
        if (Lives === 0) {
            heart1.style.visibility = "hidden";
           alert("You lost the game!,Press reset the game to start again.");
           message.textContent="Press reset the game to start again."           
        }
            }
            Scoreelement.textContent=Score
            if (Score === 100)  {
                alert ("You won the game!");
                message.textContent = "Congrats! Press reset the game to start again."
            } 
        }
        submitbtn.addEventListener("click", eventChecker)
        restartbtn.addEventListener("click", startGame)
        
        
        startGame();