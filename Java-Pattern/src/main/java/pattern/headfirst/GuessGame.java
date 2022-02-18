package pattern.headfirst;


import org.apache.log4j.Logger;

public class GuessGame {

    private static Logger log = Logger.getLogger(GuessGame.class);

    Player p1;
    Player p2;

    int answer;

    private void init(){
        this.answer = (int)(Math.random());
    }

    public GuessGame(){
        init();
        log.info("the answer is :"+answer);
    }

    public void startGame(){
        p1 = new Player("p1");
        p2 = new Player("p2");

        while(true){
            p1.guess();
            p2.guess();

            if (p1.number == answer || p2.number == answer){
                log.info("We have a winner。p1 guess:"+(p1.number == answer)+" p2 guess:"+(p2.number==answer) );
                break;
            }
            log.info("We need try again!");
        }
    }





}
