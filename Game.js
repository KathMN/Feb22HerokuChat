const GameState = Object.freeze({
    GREETING:   Symbol("greeting"),
    MOM:  Symbol("mom"),
    WAIT: Symbol("wait"),
    LABORATORY: Symbol("laboratory"),
    PROFESSOR: Symbol("professor"),
    FOLLOW: Symbol("follow"),
    PIKACHU: Symbol("pikachu"),
    QUEST: Symbol("quest"),
    BATTLE: Symbol("battle"),
    BITE: Symbol("bite"),
    WIN: Symbol("win"),
});

export default class Game{
    constructor(){
        this.stateCur = GameState.GREETING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "GameOver";
        switch(this.stateCur){
            case GameState.GREETING:
            sReply ="It is a beautiful sunny morning and you hop out of bed full of energy and excitement! Today is the first day of your Pokemon quest. Will you go downstairs and talk with your MOM or RUSH right over to Professor Oak’s house?";
                this.stateCur = GameState.MOM;
                break;
            case GameState.MOM:
                if(sInput.toLowerCase().match("mom")){
                    sReply = "Your Mom has made you a mouth-watering breakfast. You pick up a piece of toast and take a bite. Will you stay and eat more breakfast with your MOM or head OUT to see the Professor?";
                }else{
                    sReply ="You grab your bag and put on your cap. As you walk towards the door your Mother asks if you would like to stay and eat a little more. Do you stay with your MOM or LEAVE your house?";
                    this.stateCur = GameState.LABORATORY;
                }
                break;
                case GameState.LABORATORY: 
                    if(sInput.toLowerCase().match("leave")){
                        sReply = "You walk up to the Professor’s door and start to get nervous. You start to wonder if you are ready to start this quest alone. Do you KNOCK on the laboratory door or RUN back to your house?";
                        this.stateCur = GameState.PROFESSOR;
                    }else{
                        sReply = "Your Mom has made you a mouth-watering breakfast. You pick up a piece of toast and take a bite. Will you stay and eat more breakfast with your MOM or head OUT to see the Professor?";
                        this.stateCur = GameState.MOM;
                    }
                    break;
                case GameState.PROFESSOR:
                    if(sInput.toLowerCase().match("knock")){
                        sReply = "You wrap on the door and the Professor Answers. 'Today you begin on your journey. It’s time to pick out your starter Pokemon', he says. 'Follow me, unless you don’t think you’re ready'. Do you FOLLOW the professor or go back HOME?";
                        this.stateCur = GameState.FOLLOW;
                    }else{
                        sReply = "Your Mom has made you a mouth-watering breakfast. You pick up a piece of toast and take a bite. Will you stay and eat more breakfast with your MOM or head OUT to see the Professor?";
                        this.stateCur = GameState.MOM;
                    }
                    break;
                    case GameState.FOLLOW:
                    if(sInput.toLowerCase().match("follow")){
                        sReply = "You follow the Professor into a large sterile looking room full of beakers and equipment. In the center of the room there is a table with two pokeballs on it. Will you choose PIKACHU, a yellow electric-mouse pokemon, or EVEE, a brown fox-like pokemon with a bushy tail?"
                        this.stateCur = GameState.PIKACHU;
                    }else{
                        sReply = "Your Mom has made you a mouth-watering breakfast. You pick up a piece of toast and take a bite. Will you stay and eat more breakfast with your MOM or head OUT to see the Professor?";
                        this.stateCur = GameState.MOM;
                    }
                    break;
                    case GameState.PIKACHU:
                    if(sInput.toLowerCase().match("pikachu")){
                        sReply = "The professor hands you a red and white pokeball. There is a flash of light as Pikachu lets himself out of the ball. As you reach out to pick him up he electrocutes you and runs away! The professor chuckles. 'It looks like you are stuck with Evee after all', he says. Will you accept EVEE as your starter pokemon or run home to the safety of your MOM?";
                        this.stateCur = GameState.EVEE;
                    }else{
                        sReply = "The professor hands you a red and white pokeball. You press the button on the front and a cute little bushy tailed Evee pops out and greets you. You give Evee a hug as she repeats her own name with glee. Do you keep your EVEE, or give her back to the professor and head HOME?";
                        this.stateCur = GameState.EVEE;
                    }
                    break;
                    case GameState.EVEE:
                    if(sInput.toLowerCase().match("evee")){
                        sReply = "Evee looks up at you with big brown eyes. 'I guess you're stuck with me huh?', you say. Shall we head out on our QUEST or stay and CHAT with the professor?";
                        this.stateCur = GameState.QUEST;
                    }else{
                        sReply = "Your Mom has made you a mouth-watering breakfast. You pick up a piece of toast and take a bite. Will you stay and eat more breakfast with your MOM or head OUT to see the Professor?"
                        this.stateCur = GameState.MOM;
                    }
                    break;
                    case GameState.QUEST:
                    if(sInput.toLowerCase().match("quest")){
                        sReply = "You leave the Professor's laboratory and head down route 2 towards Pallet town. While looking around at the lush forest scenery you almost bump into your rival Gary. He challenges you to a battle. Do you BATTLE or RUN?";
                        this.stateCur = GameState.BATTLE;
                    }else{
                        sReply = "'Do you know why pokemon compete and battle so hard for you?' says the professor. 'Its because they can see the love and trust you have for all pokemon. Never forget that' Knowing this boosts your confidence. Are you ready to go on your QUEST or will you stay and TALK to the professor?"
                        this.stateCur = GameState.QUEST;
                    }
                    break;
                    case GameState.BATTLE:
                    if(sInput.toLowerCase().match("battle")){
                        sReply = "Gary is battling with his pokemon Diglett. It's your turn to choose a move for Evee. Do you choose TACKLE or BITE?"
                        this.stateCur = GameState.BITE;
                    }else{
                        sReply = "You are unable to escape! You must stay and fight. What move should Evee start with, TACKLE or BITE?"
                        this.stateCur = GameState.BITE;
                    }
                    break;
                    case GameState.BITE:
                    if(sInput.toLowerCase().match("bite")){
                        sReply = "Bite is super-effective against Diglett. His HP is down to zero. You Win!!"
                        this.stateCur = GameState.WIN;
                    }else{
                        sReply = "Tackle is not very effective. Diglett responds with Sand Attack. It lowers your accuracy by 5%. Do you continue to BATTLE or RUN?"
                        this.stateCur = GameState.BATTLE;
                    }
                }                
        return([sReply]);
    }
}