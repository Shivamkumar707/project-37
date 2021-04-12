class Question {
  constructor(){
    this.button = createButton("Submit");
    this.title = createElement('h2');
    this.input1 = createInput("Enter your name here...");
    this.input2 = createInput("Enter correct option No.");

  }

  hide(){
    this.button.hide();
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
  }

   
  
  display() {
    this.title.html("My Quiz Game");
    this.title.position(350,0);

    var question = createElement("h4");
    question.html("Question:- What starts and ends with letter the 'E', but has only one letter? " );
    question.position(150,80);

    var option1 = createElement("h4");
    option1.html("1: Everyone ");
    option1.position(150,100);

    var option2 = createElement("h4");
    option2.html("2: Envelope ");
    option2.position(150,120);

    var option3 = createElement("h4");
    option3.html("3: Estimate ");
    option3.position(150,140);

    var option4 = createElement("h4");
    option4.html("4: Example ");
    option4.position(150,160);

    this.button.position(330, 300);
    this.input1.position(150,250);
    this.input2.position(400,250);

    this.button.mousePressed(()=>{
      this.button.hide();
      this.title.hide();
      this.input1.hide();
      this.input2.hide();

      contestant.name = this.input1.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.answer = this.input2.value();

      contestant.update();
      contestant.updateCount(contestantCount);
      
  });

  }

}