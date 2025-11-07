class Quiz {
    // YOUR CODE HERE:
    //
    constructor (questions, timeLimit, timeRemaining){
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0

    }

    getQuestion(){
       
    
    return this.questions[this.currentQuestionIndex]
     }
    
    moveToNextQuestion(){
return this.currentQuestionIndex++
    }

    shuffleQuestions(){
    this.questions.sort(()=>Math.random()-0.5);
    }

    checkAnswer(answer){
    if (this.choices === this.answer){
      return this.correctAnswers++
    }

    }
    

    hasEnded(){
        if (this.currentQuestionIndex<this.questions.length){
            return false
        } else if (this.currentQuestionIndex=this.questions.length)
            return true
    }
}
