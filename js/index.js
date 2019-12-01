        let i = 0;
        let toggle = true;
        var intervalFunction = setInterval(myTimerFunction, 1000);
        
        function stopFunction() {
            clearInterval(intervalFunction);
        }

        function startFunction() {
            setInterval(myTimerFunction, 1000);
        }

        function myTimerFunction() {
            if(toggle){
                if(i < 30){
                    i++;
                    document.getElementById("timer").innerHTML = i;
                }
            }else{
                if(i > 0){
                    i--;
                    document.getElementById("timer").innerHTML = i;
                }
            }
        }
        
        function revert(){
            toggle = !toggle;
            if(toggle){
                i = 0;
            }else{
                i = 30;
            }
        }

        function resetTimer() {
            if(toggle){
                i = 0;
            }else{
                i = 30;
            }
        }