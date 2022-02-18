// package pattern;

import com.alibaba.fastjson.JSONException;
import com.alibaba.fastjson.JSONObject;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import pattern.headfirst.Generics;

/**
 * Hello world!
 */
public final class DesignApplication {
    private static Logger log = Logger.getLogger(DesignApplication.class);

    private static final String TAG = "Hello World!";
    /**
     * Says hello to the world.
     * 
     * @param args The arguments of the program.
     */
    public static void main(String[] args) {
        log.info("App正在运行");
        log.debug("log4j正在运行");
        System.out.println(TAG);
        Generics.shows();

        StringUtils.isNotEmpty(TAG);
        try {
            JSONObject j = null;
            j.put("1",1);
        }catch (JSONException e){
            e.printStackTrace();
        }
    }
}
