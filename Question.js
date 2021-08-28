class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   this.number = createElement('h2')
   this.input2 = createInput("Enter Your Answer Number");
   this.greeting = createElement("h2");



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3')
    this.option1 = createElement('h4')
    this.option2 = createElement('h5')
    this.option3 = createElement('h7')
    this.option4 = createElement('h8');



    
  }

  

  
  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question 1 : The layer of earth on which we all live");
    this.question.position(250, 50);

    this.option1.html("1.Mantle");
    this.option1.position(250, 100);

    this.option2.html("2.Core");
    this.option2.position(250, 130);

    this.option3.html("3.Crust");
    this.option3.position(250, 180);

    this.option4.html("4.Inner Core");
    this.option4.position(250, 206);

    

    display()
    {this.handleMousePresses}








    //Create html() and position() for each question, input and answers.




    this.input1.position(150, 230);
    this.button.position(290, 300);
    this.input2.position(490,230);
    

    // Add a mousepressed action when the button is clicked Display the this.message

   

  }
   handleMousePressed() {
  this.button.mousePressed(()=>{
    this.input2.hide();
    this.Button.hide();
    var message = `
    Hello ${this.input2.value()}
    </br>thank...`;
    this.greeting.html(message);
    })
    }
   
}
