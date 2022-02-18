package pattern.headfirst;

import lombok.Data;
import org.apache.log4j.Logger;

@Data
public class Player {

    private static Logger log = Logger.getLogger(Player.class);

    public int number ;
    public String name;

    public Player(String name){
        this.name = name;
    }

    public Player guess(){
        number = (int) (Math.random() * 10);
        log.info(name + " guess number:"+  number);
        return this;
    }
}
