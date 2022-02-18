package pattern.conf;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import pattern.util.FileUtils;


public class LogConfig {

    private static Logger logger = Logger.getLogger(LogConfig.class);

    private LogConfig() {
    }

    public static void setLog() {
        Properties pro = new Properties();
        try {
            InputStream in = new BufferedInputStream(new FileInputStream(("application.properties")));
            pro.load(in);

            /* 创建log文件夹 */
            FileUtils.createDirectory(pro.getProperty("log-folder"));

            File file = new File(pro.getProperty("log-folder"));
            String logPath = file.getAbsolutePath();

            System.setProperty("logPath", logPath);
            PropertyConfigurator.configure("log4j.properties");
            logger.info("Log fold config done");
        } catch (Exception e) {
            logger.error("error", e);
        }
    }
}