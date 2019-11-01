# Javascript_Quiz

 <p class="paragraph">Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your time by ten seconds!</p>
            <form id="answers">
                <input type="radio" name="answer1" value="Ravens" id="answer1">
                <label for='answer1'></label><br />
                <input type="radio" name="answer1" value="Packers" id="answer2">
                <label for='answer2'></label><br />
                <input type="radio" name="answer1" value="Cowboys" id="answer3">
                <label for='answer3'></label><br />
                <input type="radio" name="answer1" value="Colts" id="answer4">
                <label for='answer4'></label><br />
                <input type="radio" name="answer1" value="answer5" id="answer5">
                <label for='answer5'></label><br />
                <button type="submit" form="form1" value="Submit" id="submit">Submit</button>
            </form>
            <button class="start-button">Start Page</button>


            usersArray.push(user);
      window.localStorage.setItem('users', JSON.stringify(usersArray));
      var test = JSON.parse(localStorage.getItem("users"))
      console.log(test)
      